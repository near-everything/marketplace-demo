import { z } from "zod";

export const accountIdSchema = z.string()
	.min(2)
	.max(64)
	.regex(/^(([a-z\d]+[-_])*[a-z\d]+\.)*([a-z\d]+[-_])*[a-z\d]+$/, "Invalid NEAR account ID format");

export type AccountId = z.infer<typeof accountIdSchema>;

export interface NearAccount {
	id: string;
	userId: string;
	accountId: string;
	network: string;
	publicKey: string;
	isPrimary: boolean;
	createdAt: Date;
}

export interface SIWNVerifyMessageArgs {
	authToken: string;
	expectedRecipient: string;
	accountId: string;
}

export interface SocialImage {
	url?: string;
	ipfs_cid?: string;
}

export interface Profile {
	name?: string;
	description?: string;
	image?: SocialImage;
	backgroundImage?: SocialImage;
	linktree?: Record<string, string>;
}

// NEP-413: Parameters for the wallet's signMessage method
export interface SignMessageParams {
	message: string;
	recipient: string;
	nonce: Uint8Array | Buffer;
	callbackUrl?: string;
	state?: string;
}

// NEP-413: Output from the wallet's signMessage method
export interface SignedMessage {
	accountId: string;
	publicKey: string;
	signature: string;
	state?: string;
}

// Wallet Interface (works for fastnear or near-wallet-selector)
export interface WalletInterface {
	signMessage: (params: SignMessageParams) => Promise<SignedMessage>;
}