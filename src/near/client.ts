import { base64ToBytes } from "@fastnear/utils";
import type { BetterAuthClientPlugin } from "better-auth/client";
import { sign, type WalletInterface } from "near-sign-verify";
import type { siwn } from ".";
import type { AccountId, NonceRequestT, NonceResponseT, ProfileResponseT, VerifyRequestT, VerifyResponseT } from "./types";

export interface NearAuthSigner {
	accountId(): string | null;
	signMessage: WalletInterface["signMessage"];
}

export interface AuthCallbacks {
	onSuccess?: () => void;
	onError?: (error: Error & { status?: number; code?: string }) => void;
}

export interface SIWNClientConfig {
	domain: string;
	signer: NearAuthSigner;
}

export interface SIWNClientActions {
	near: {
		nonce: (params: NonceRequestT) => Promise<NonceResponseT>;
		verify: (params: VerifyRequestT) => Promise<VerifyResponseT>;
		getProfile: (accountId?: AccountId) => Promise<ProfileResponseT>;
	};
	signIn: {
		near: (params?: { recipient?: string }, callbacks?: AuthCallbacks) => Promise<VerifyResponseT>;
	};
}

export interface SIWNClientPlugin extends BetterAuthClientPlugin {
	id: "siwn";
	$InferServerPlugin: ReturnType<typeof siwn>;
	getActions: ($fetch: any) => SIWNClientActions;
}

export const siwnClient = (config: SIWNClientConfig): SIWNClientPlugin => {
	return {
		id: "siwn",
		$InferServerPlugin: {} as ReturnType<typeof siwn>,
		getActions: ($fetch): SIWNClientActions => {
			return {
				near: {
					nonce: async (params: NonceRequestT): Promise<NonceResponseT> => {
						return $fetch("/near/nonce", { method: "POST", body: params });
					},
					verify: async (params: VerifyRequestT): Promise<VerifyResponseT> => {
						return $fetch("/near/verify", { method: "POST", body: params });
					},
					getProfile: async (accountId?: AccountId): Promise<ProfileResponseT> => {
						return $fetch("/near/profile", {
							method: "POST",
							body: { accountId },
						});
					},
				},
				signIn: {
					near: async (params: { recipient?: string } = {}, callbacks?: AuthCallbacks): Promise<VerifyResponseT> => {
						try {
							const { signer } = config;

							if (!signer) {
								throw new Error("NEAR signer not available");
							}

							// Must be already connected
							const accountId = signer.accountId();
							if (!accountId) {
								throw new Error("Wallet not connected. Please connect your wallet first.");
							}

							const recipient = params.recipient || config.domain;

							// Get nonce for signature
							const nonceResponse = await $fetch("/near/nonce", {
								method: "POST",
								body: { accountId }
							}) as { data: NonceResponseT };

							const nonce = nonceResponse?.data?.nonce;
							const message = `Sign in to ${recipient}\n\nAccount ID: ${accountId}\nNonce: ${nonce}`;

							// Convert base64 nonce to Uint8Array for signing
							const nonceBytes = base64ToBytes(nonce);

							// Use near-sign-verify with the signer
							const authToken = await sign(message, {
								signer,
								recipient,
								nonce: nonceBytes,
							});

							// Verify signature with backend
							const verifyResponse = await $fetch("/near/verify", {
								method: "POST",
								body: {
									authToken,
									accountId,
								}
							}) as { data: VerifyResponseT };

							console.log("verifyResponse", verifyResponse);

							if (!verifyResponse?.data?.success) {
								throw new Error("Authentication verification failed");
							}

							// Success!
							callbacks?.onSuccess?.();
							return verifyResponse.data;

						} catch (error) {
							const err = error instanceof Error ? error : new Error(String(error));
							callbacks?.onError?.(err);
							throw err;
						}
					}
				}
			};
		}
	} satisfies BetterAuthClientPlugin;
};
