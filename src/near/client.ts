import type { BetterAuthClientPlugin } from "better-auth/client";
import type { siwn } from ".";
import type { SIWNClientActions, SIWNClientPlugin } from "./client-types";
import type { AccountId } from "./types";

export const siwnClient = (domain: string): SIWNClientPlugin => {
	return {
		id: "siwn",
		$InferServerPlugin: {} as ReturnType<typeof siwn>,
		getActions: ($fetch): SIWNClientActions => {
			return {
				// NEAR-specific methods
				near: {
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
				}
			};
		}
	} satisfies BetterAuthClientPlugin;
};
