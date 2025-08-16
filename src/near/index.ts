import { APIError, createAuthEndpoint } from "better-auth/api";
import { setSessionCookie } from "better-auth/cookies";
import { z } from "zod";
import type { BetterAuthPlugin } from "better-auth/types";
import type {
	AccountId,
	SIWNVerifyMessageArgs,
	NearAccount,
	Profile,
	SocialImage,
} from "./types";
import { accountIdSchema } from "./types";
import type { User } from "better-auth/types";
import { schema } from "./schema";
import { verify, generateNonce, type VerifyOptions, type VerificationResult, parseAuthToken } from "near-sign-verify";

function getOrigin(baseURL: string): string {
	try {
		return new URL(baseURL).origin;
	} catch {
		return baseURL;
	}
}

const ACCOUNT_ID_REGEX =
	/^(([a-z\d]+[-_])*[a-z\d]+\.)*([a-z\d]+[-_])*[a-z\d]+$/;

function validateAccountId(accountId: string): boolean {
	return (
		accountId.length >= 2 &&
		accountId.length <= 64 &&
		ACCOUNT_ID_REGEX.test(accountId)
	);
}

function getNetworkFromAccountId(accountId: string): "mainnet" | "testnet" {
	return accountId.endsWith('.testnet') ? 'testnet' : 'mainnet';
}

const FALLBACK_URL =
	"https://ipfs.near.social/ipfs/bafkreidn5fb2oygegqaldx7ycdmhu4owcrmoxd7ekbzfmeakkobz2ja7qy";

function getImageUrl(
	image: SocialImage | undefined,
	fallback?: string,
): string {
	if (image?.url) return image.url;
	if (image?.ipfs_cid) return `https://ipfs.near.social/ipfs/${image.ipfs_cid}`;
	return fallback || FALLBACK_URL;
}

interface SocialApiResponse {
	[accountId: string]: {
		profile?: Profile;
	};
}

async function defaultGetProfile(accountId: AccountId): Promise<Profile | null> {
	const network = getNetworkFromAccountId(accountId);
	const apiServer = network === 'mainnet' 
		? "https://api.near.social" 
		: "https://test.api.near.social";
	
	const keys = [`${accountId}/profile/**`];
	
	try {
		const response = await fetch(`${apiServer}/get`, {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({ keys })
		});
		
		if (!response.ok) {
			throw new Error(`HTTP error! status: ${response.status}`);
		}
		
		const data = await response.json() as SocialApiResponse;
		const profile: Profile | undefined = data?.[accountId]?.profile;
		
		if (profile) {
			return {
				name: profile.name,
				description: profile.description,
				image: profile.image,
				backgroundImage: profile.backgroundImage,
				linktree: profile.linktree
			};
		}
		return null;
	} catch (error) {
		console.error("NEAR Social lookup failed:", error);
		return null;
	}
}

async function defaultVerifyMessage(args: SIWNVerifyMessageArgs, requireFullAccessKey: boolean = true): Promise<boolean> {
	try {
		const result = await verify(args.authToken, {
			expectedRecipient: args.expectedRecipient,
			nonceMaxAge: 15 * 60 * 1000, // 15 minutes
			requireFullAccessKey,
		});
		return result.accountId === args.accountId;
	} catch (error) {
		console.error("SIWN verification failed:", error);
		return false;
	}
}

export interface SIWNPluginOptions {
	domain: string;
	emailDomainName?: string;
	anonymous?: boolean;
	requireFullAccessKey?: boolean;
	getNonce?: () => Promise<Uint8Array>;
	validateNonce?: (nonce: Uint8Array) => boolean;
	getMessage?: (args: { accountId: AccountId; recipient: string; nonce: Uint8Array }) => string;
	validateMessage?: (message: string) => boolean;
	validateRecipient?: (recipient: string) => boolean;
	getProfile?: (accountId?: AccountId) => Promise<Profile | null>;
	validateFunctionCallKey?: (args: {
		accountId: AccountId;
		publicKey: string;
		contractId?: string;
	}) => Promise<boolean>;
}

export const siwn = (options: SIWNPluginOptions) =>
	({
		id: "siwn",
		schema,
		endpoints: {
			getSiwnNonce: createAuthEndpoint(
				"/near/nonce",
				{
					method: "POST",
					body: z.object({
						accountId: accountIdSchema,
					}),
				},
				async (ctx) => {
					const { accountId } = ctx.body;
					const network = getNetworkFromAccountId(accountId);
					const nonce = options.getNonce ? await options.getNonce() : generateNonce();

					// Store nonce as base64 string for database compatibility
					const nonceString = btoa(String.fromCharCode(...nonce));

					await ctx.context.internalAdapter.createVerificationValue({
						identifier: `siwn:${accountId}:${network}`,
						value: nonceString,
						expiresAt: new Date(Date.now() + 15 * 60 * 1000),
					});

					return ctx.json({ nonce: nonceString });
				},
			),
			getSiwnProfile: createAuthEndpoint(
				"/near/profile",
				{
					method: "POST",
					body: z.object({
						accountId: accountIdSchema.optional(),
					}),
				},
				async (ctx) => {
					const { accountId } = ctx.body;
					let targetAccountId = accountId;

					if (!targetAccountId) {
						const session = ctx.context.session;
						if (!session) {
							throw new APIError("UNAUTHORIZED", {
								message: "Session required when no accountId provided",
								status: 401,
							});
						}

						const nearAccount: NearAccount | null = await ctx.context.adapter.findOne({
							model: "nearAccount",
							where: [
								{ field: "userId", operator: "eq", value: session.user.id },
								{ field: "isPrimary", operator: "eq", value: true },
							],
						});

						if (!nearAccount) {
							throw new APIError("NOT_FOUND", {
								message: "No NEAR account found for user",
								status: 404,
							});
						}

						targetAccountId = nearAccount.accountId;
					}

					const profile = await (options.getProfile || defaultGetProfile)(targetAccountId);
					return ctx.json({ profile });
				},
			),
			verifySiwnMessage: createAuthEndpoint(
				"/near/verify",
				{
					method: "POST",
					body: z
						.object({
							authToken: z.string().min(1),
							accountId: accountIdSchema,
							email: z.email().optional(),
						})
						.refine((data) => options.anonymous !== false || !!data.email, {
							message:
								"Email is required when the anonymous plugin option is disabled.",
							path: ["email"],
						}),
					requireRequest: true,
				},
				async (ctx) => {
					const {
						authToken,
						accountId,
						email,
					} = ctx.body;
					const network = getNetworkFromAccountId(accountId);
					const isAnon = options.anonymous ?? true;
					const requireFullAccess = options.requireFullAccessKey ?? true;

					if (!isAnon && !email) {
						throw new APIError("BAD_REQUEST", {
							message: "Email is required when anonymous is disabled.",
							status: 400,
						});
					}

					try {
						const verification =
							await ctx.context.internalAdapter.findVerificationValue(
								`siwn:${accountId}:${network}`,
							);

						if (!verification || new Date() > verification.expiresAt) {
							throw new APIError("UNAUTHORIZED", {
								message: "Unauthorized: Invalid or expired nonce",
								status: 401,
								code: "UNAUTHORIZED_INVALID_OR_EXPIRED_NONCE",
							});
						}

						// Build verify options using plugin configuration
						let verifyOptions: VerifyOptions;

						if (options.validateNonce && options.validateRecipient && options.validateMessage) {
							verifyOptions = {
								requireFullAccessKey: requireFullAccess,
								validateNonce: options.validateNonce,
								validateRecipient: options.validateRecipient,
								validateMessage: options.validateMessage,
							};
						} else if (options.validateNonce && options.validateRecipient) {
							verifyOptions = {
								requireFullAccessKey: requireFullAccess,
								validateNonce: options.validateNonce,
								validateRecipient: options.validateRecipient,
							};
						} else if (options.validateNonce) {
							verifyOptions = {
								requireFullAccessKey: requireFullAccess,
								validateNonce: options.validateNonce,
								expectedRecipient: options.domain,
							};
						} else if (options.validateRecipient) {
							verifyOptions = {
								requireFullAccessKey: requireFullAccess,
								nonceMaxAge: 15 * 60 * 1000,
								validateRecipient: options.validateRecipient,
							};
						} else {
							verifyOptions = {
								requireFullAccessKey: requireFullAccess,
								nonceMaxAge: 15 * 60 * 1000,
								expectedRecipient: options.domain,
							};
						}

						console.log("authToken", parseAuthToken(authToken));

						// Verify the signature using near-sign-verify
						const result: VerificationResult = await verify(authToken, verifyOptions);

						console.log("result", result);

						if (result.accountId !== accountId) {
							throw new APIError("UNAUTHORIZED", {
								message: "Unauthorized: Account ID mismatch",
								status: 401,
							});
						}

						if (!requireFullAccess && options.validateFunctionCallKey) {
							const isValidFunctionKey = await options.validateFunctionCallKey({
								accountId: result.accountId,
								publicKey: result.publicKey,
							}); // we can validate against an access control contract

							if (!isValidFunctionKey) {
								throw new APIError("UNAUTHORIZED", {
									message: "Unauthorized: Invalid function call access key",
									status: 401,
								});
							}
						}

						await ctx.context.internalAdapter.deleteVerificationValue(
							verification.id,
						);

						let user: User | null = null;

						const existingNearAccount: NearAccount | null =
							await ctx.context.adapter.findOne({
								model: "nearAccount",
								where: [
									{ field: "accountId", operator: "eq", value: accountId },
									{ field: "network", operator: "eq", value: network },
								],
							});

						if (existingNearAccount) {
							user = await ctx.context.adapter.findOne({
								model: "user",
								where: [
									{
										field: "id",
										operator: "eq",
										value: existingNearAccount.userId,
									},
								],
							});
						} else {
							const anyNearAccount: NearAccount | null =
								await ctx.context.adapter.findOne({
									model: "nearAccount",
									where: [
										{ field: "accountId", operator: "eq", value: accountId },
									],
								});

							if (anyNearAccount) {
								user = await ctx.context.adapter.findOne({
									model: "user",
									where: [
										{
											field: "id",
											operator: "eq",
											value: anyNearAccount.userId,
										},
									],
								});
							}
						}

						if (!user) {
							const domain =
								options.emailDomainName ?? getOrigin(ctx.context.baseURL);
							const userEmail =
								!isAnon && email ? email : `${accountId}@${domain}`;
							
							const profile = await (options.getProfile || defaultGetProfile)(accountId);

							user = await ctx.context.internalAdapter.createUser({
								name: profile?.name ?? accountId,
								email: userEmail,
								image: profile?.image ? getImageUrl(profile.image) : "",
							});

							await ctx.context.adapter.create({
								model: "nearAccount",
								data: {
									userId: user.id,
									accountId,
									network,
									publicKey: result.publicKey,
									isPrimary: true,
									createdAt: new Date(),
								},
							});

							await ctx.context.internalAdapter.createAccount({
								userId: user.id,
								providerId: "siwn",
								accountId: `${accountId}:${network}`,
								createdAt: new Date(),
								updatedAt: new Date(),
							});
						} else {
							if (!existingNearAccount) {
								await ctx.context.adapter.create({
									model: "nearAccount",
									data: {
										userId: user.id,
										accountId,
										network,
										publicKey: result.publicKey,
										isPrimary: false,
										createdAt: new Date(),
									},
								});

								await ctx.context.internalAdapter.createAccount({
									userId: user.id,
									providerId: "siwn",
									accountId: `${accountId}:${network}`,
									createdAt: new Date(),
									updatedAt: new Date(),
								});
							}
						}

						const session = await ctx.context.internalAdapter.createSession(
							user.id,
							ctx,
						);

						if (!session) {
							throw new APIError("INTERNAL_SERVER_ERROR", {
								message: "Internal Server Error",
								status: 500,
							});
						}

						await setSessionCookie(ctx, { session, user });

						return ctx.json({
							token: session.token,
							success: true,
							user: {
								id: user.id,
								accountId,
								network,
							},
						});
					} catch (error: unknown) {
						if (error instanceof APIError) throw error;
						throw new APIError("UNAUTHORIZED", {
							message: "Something went wrong. Please try again later.",
							error: error instanceof Error ? error.message : "Unknown error",
							status: 401,
						});
					}
				},
			),
		},
	}) satisfies BetterAuthPlugin;

export { validateAccountId, getNetworkFromAccountId, defaultGetProfile };
