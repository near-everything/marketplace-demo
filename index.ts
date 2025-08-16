export { siwn, validateAccountId, getNetworkFromAccountId, defaultGetProfile } from "./src/near/index";
export { siwnClient } from "./src/near/client";
export type {
	AccountId,
	NearAccount,
	SIWNVerifyMessageArgs,
	SocialImage,
	Profile,
} from "./src/near/types";
export { accountIdSchema } from "./src/near/types";
export type { SIWNPluginOptions } from "./src/near/index";

// Re-export client types to fix TypeScript inference issues
export type {
	SIWNClientPlugin,
	SIWNClientActions,
	SIWNWalletProxy,
	AuthResponse,
	AuthError,
	NetworkConfig,
	SignatureResult,
	TxStatus,
	Session,
	User,
} from "./src/near/client-types";
