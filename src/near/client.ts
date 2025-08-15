import type { siwn } from ".";
import type { BetterAuthClientPlugin } from "better-auth/client";
import type { AccountId } from "./types";

export const siwnClient = () => {
	return {
		id: "siwn",
		$InferServerPlugin: {} as ReturnType<typeof siwn>,
		getActions: ($fetch) => ({
			getProfile: async (accountId?: AccountId) => {
				return $fetch("/near/profile", {
					method: "POST",
					body: { accountId }
				});
			}
		})
	} satisfies BetterAuthClientPlugin;
};
