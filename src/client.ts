import { base64ToBytes } from "@fastnear/utils";
import type { BetterAuthClientPlugin, BetterFetchOption, BetterFetchResponse } from "better-auth/client";
import { sign, type WalletInterface } from "near-sign-verify";
import type { siwn } from ".";
import { type AccountId, type NonceRequestT, type NonceResponseT, type ProfileResponseT, type VerifyRequestT, type VerifyResponseT } from "./types";

export interface Signer {
	accountId(): string | null;
	signMessage: WalletInterface["signMessage"];
}

export interface AuthCallbacks {
	onSuccess?: () => void;
	onError?: (error: Error & { status?: number; code?: string }) => void;
}

export interface SIWNClientConfig {
	domain: string;
}

export interface SIWNClientActions {
	near: {
		nonce: (params: NonceRequestT) => Promise<BetterFetchResponse<NonceResponseT>>;
		verify: (params: VerifyRequestT) => Promise<BetterFetchResponse<VerifyResponseT>>;
		getProfile: (accountId?: AccountId) => Promise<BetterFetchResponse<ProfileResponseT>>;
	};
	signIn: {
		near: (params: { recipient: string, signer: Signer }, callbacks?: AuthCallbacks) => Promise<VerifyResponseT>;
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
					nonce: async (params: NonceRequestT, fetchOptions?: BetterFetchOption): Promise<BetterFetchResponse<NonceResponseT>> => {
						return await $fetch("/near/nonce", {
							method: "POST",
							body: params,
							...fetchOptions
						});
					},
					verify: async (params: VerifyRequestT, fetchOptions?: BetterFetchOption): Promise<BetterFetchResponse<VerifyResponseT>> => {
						return await $fetch("/near/verify", {
							method: "POST",
							body: params,
							...fetchOptions
						});
					},
					getProfile: async (accountId?: AccountId, fetchOptions?: BetterFetchOption): Promise<BetterFetchResponse<ProfileResponseT>> => {
						return await $fetch("/near/profile", {
							method: "POST",
							body: { accountId },
							...fetchOptions
						});

					},
				},
				signIn: {
					near: async (params: { recipient: string, signer: Signer }, callbacks?: AuthCallbacks): Promise<VerifyResponseT> => {
						try {
							const { signer, recipient } = params;

							if (!signer) {
								throw new Error("NEAR signer not available");
							}

							// Must be already connected
							const accountId = signer.accountId();
							if (!accountId) {
								throw new Error("Wallet not connected. Please connect your wallet first.");
							}

							// Get nonce for signature
							const nonceResponse: BetterFetchResponse<NonceResponseT> = await $fetch("/near/nonce", {
								method: "POST",
								body: { accountId }
							});

							const nonce = nonceResponse?.data?.nonce;
							const message = `Sign in to ${recipient}\n\nAccount ID: ${accountId}\nNonce: ${nonce}`;

							// Convert base64 nonce to Uint8Array for signing
							const nonceBytes = base64ToBytes(nonce!);

							// Sign message
							const authToken = await sign(message, {
								signer,
								recipient,
								nonce: nonceBytes,
							});

							// Verify signature with backend
							const verifyResponse: BetterFetchResponse<VerifyResponseT> = await $fetch("/near/verify", {
								method: "POST",
								body: {
									authToken,
									accountId,
								}
							});

							if (!verifyResponse?.data?.success) {
								throw new Error("Authentication verification failed");
							}

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
