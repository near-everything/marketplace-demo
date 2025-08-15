import type { Session } from "better-auth";
import type { BetterAuthClientPlugin } from "better-auth/client";
import type { siwn } from ".";
import type { AccountId } from "./types";

import type {
	SignatureResult
} from "fastintear";
import * as fastintear from "fastintear";

// Type definitions for browser globals
declare const window: any;
declare const document: any;

// FastINTEAR integration
let near: typeof fastintear = fastintear;

// Check if we're in browser environment
function isBrowser(): boolean {
	return typeof window !== 'undefined' && typeof document !== 'undefined';
}

// Lazy load FastINTEAR to avoid issues in SSR environments
async function getNear() {
	if (!near && isBrowser()) {
		try {
			const fastintear = await import("fastintear");
			near = fastintear;
		} catch (error) {
			throw new Error("FastINTEAR not found. Please install: npm install fastintear");
		}
	}
	return near;
}

// Error mapping for FastINTEAR errors
function mapFastintearError(error: any) {
	const message = error?.message || "Unknown error";

	if (message.includes("Must sign in")) {
		return {
			message: "Wallet connection required",
			code: "WALLET_NOT_CONNECTED",
			status: 401
		};
	}

	if (message.includes("Popup was blocked")) {
		return {
			message: "Please allow popups to connect your wallet",
			code: "POPUP_BLOCKED",
			status: 400
		};
	}

	if (message.includes("User rejected") || message.includes("RejectedByUser")) {
		return {
			message: "User cancelled wallet connection",
			code: "USER_REJECTED",
			status: 400
		};
	}

	if (message.includes("Access key error") || message.includes("InvalidAccessKey")) {
		return {
			message: "Invalid or expired access key",
			code: "INVALID_ACCESS_KEY",
			status: 401
		};
	}

	return {
		message,
		code: "WALLET_ERROR",
		status: 500
	};
}

// Create wallet proxy for full FastINTEAR access
function createWalletProxy($fetch: any) {
	return {
		// Direct FastINTEAR method exposure
		async requestSignIn(params?: { contractId?: string; successUrl?: string; failureUrl?: string }) {
			const nearInstance = await getNear();
			return nearInstance.requestSignIn(params);
		},

		async signOut() {
			const nearInstance = await getNear();
			await nearInstance.signOut();
			// Also sign out from Better Auth
			try {
				await $fetch("/auth/sign-out", { method: "POST" });
			} catch (error) {
				console.warn("Failed to sign out from Better Auth:", error);
			}
		},

		async signMessage(params: { message: string; recipient: string; nonce?: Uint8Array }) {
			const nearInstance = await getNear();
			return nearInstance.signMessage(params);
		},

		async sendTx(params: { receiverId: string; actions: any[] }) {
			const nearInstance = await getNear();
			return nearInstance.sendTx(params);
		},

		async view(params: { contractId: string; methodName: string; args?: any; blockId?: string }) {
			const nearInstance = await getNear();
			return nearInstance.view(params);
		},

		// State methods
		accountId: async () => {
			const nearInstance = await getNear();
			return nearInstance.accountId();
		},

		publicKey: async () => {
			const nearInstance = await getNear();
			return nearInstance.publicKey();
		},

		authStatus: async () => {
			const nearInstance = await getNear();
			return nearInstance.authStatus();
		},

		selected: async () => {
			const nearInstance = await getNear();
			return nearInstance.selected();
		},

		// Event handling
		onAccount: async (callback: (accountId: string | null) => void) => {
			const nearInstance = await getNear();
			return nearInstance.event.onAccount(callback);
		},

		onTx: async (callback: (txStatus: any) => void) => {
			const nearInstance = await getNear();
			return nearInstance.event.onTx(callback);
		},

		offAccount: async (unsubscribe: any) => {
			const nearInstance = await getNear();
			return nearInstance.event.offAccount(unsubscribe);
		},

		offTx: async (unsubscribe: any) => {
			const nearInstance = await getNear();
			return nearInstance.event.offTx(unsubscribe);
		},

		// Configuration
		config: async (config?: { networkId?: "mainnet" | "testnet"; nodeUrl?: string }) => {
			const nearInstance = await getNear();
			return nearInstance.config(config);
		},

		// Utility access
		get actions() {
			return getNear().then(n => n.actions);
		},

		get utils() {
			return getNear().then(n => n.utils);
		}
	};
}

// Session synchronization setup
function setupSessionSync($fetch: any) {
	if (typeof window === 'undefined') return;

	getNear().then(nearInstance => {
		// Listen for FastINTEAR account changes
		nearInstance.event.onAccount((accountId: string | null) => {
			if (!accountId) {
				// User signed out from wallet - sign out from Better Auth too
				$fetch("/auth/sign-out", { method: "POST" }).catch((error: any) => {
					console.warn("Failed to sync sign-out with Better Auth:", error);
				});
			}
		});
	}).catch(console.error);
}

export const siwnClient = () => {
	return {
		id: "siwn",
		$InferServerPlugin: {} as ReturnType<typeof siwn>,
		getActions: ($fetch) => {
			// Set up session synchronization
			setupSessionSync($fetch);

			return {
				// Better Auth standard methods
				signIn: {
					near: async (options?: {
						networkId?: "mainnet" | "testnet";
						contractId?: string;
						email?: string;
						callbackUrl?: string;
					}) => {
						try {
							const nearInstance = await getNear();

							// 1. Configure FastINTEAR
							nearInstance.config({
								networkId: options?.networkId || "mainnet"
							});

							// 2. Connect wallet via FastINTEAR
							await nearInstance.requestSignIn({
								contractId: options?.contractId || undefined
							});

							const accountId = nearInstance.accountId();
							if (!accountId) {
								throw new Error("Failed to connect wallet");
							}

							// 3. Get nonce from Better Auth server
							const nonceResult: { nonce?: string; error?: { message: string } } = await $fetch("/near/nonce", {
								method: "POST",
								body: { accountId }
							});

							if (nonceResult.error) {
								throw new Error(nonceResult.error.message || "Failed to get nonce");
							}

							if (!nonceResult.nonce) {
								throw new Error("No nonce received from server");
							}

							// Convert base64 nonce back to Uint8Array for signing
							const nonceBytes = new Uint8Array(atob(nonceResult.nonce).split('').map(c => c.charCodeAt(0)));

							// 4. Sign message using FastINTEAR
							const signature: SignatureResult = await nearInstance.signMessage({
								message: "Sign in to app",
								recipient: typeof window !== 'undefined' ? window.location.hostname : "localhost",
								nonce: nonceBytes,
							});

							// 5. Verify with Better Auth
							const result = await $fetch("/near/verify", {
								method: "POST",
								body: {
									authToken: signature.signature || signature, // Handle different FastINTEAR response formats
									accountId,
									email: options?.email
								}
							});

							return result;
						} catch (error) {
							return {
								data: null,
								error: mapFastintearError(error)
							};
						}
					}
				},

				// NEAR-specific methods
				near: {
					// Full FastINTEAR wallet access
					wallet: createWalletProxy($fetch),

					// Better Auth integration methods
					nonce: async (params: { accountId: AccountId }) => {
						return $fetch("/near/nonce", {
							method: "POST",
							body: params
						});
					},

					verify: async (params: {
						authToken: string;
						accountId: AccountId;
						email?: string;
					}) => {
						return $fetch("/near/verify", {
							method: "POST",
							body: params
						});
					},

					getProfile: async (accountId?: AccountId) => {
						return $fetch("/near/profile", {
							method: "POST",
							body: { accountId }
						});
					},

					// Session synchronization
					syncSession: async () => {
						try {
							const nearInstance = await getNear();
							const accountId = nearInstance.accountId();

							if (accountId) {
								// Verify current session is still valid
								const result: { session?: Session | null } = await $fetch("/auth/session", { method: "GET" });
								if (!result.session) {
									// Session expired, sign out from wallet too
									await nearInstance.signOut();
								}
							}
						} catch (error) {
							console.warn("Session sync failed:", error);
						}
					}
				}
			};
		}
	} satisfies BetterAuthClientPlugin;
};
