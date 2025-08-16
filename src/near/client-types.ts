import type { BetterAuthClientPlugin } from "better-auth/client";
import type { siwn } from "./index";
import type { AccountId, Profile } from "./types";

// Re-export key types from fastintear that consumers might need
export type { NetworkConfig, SignatureResult, TxStatus } from "fastintear";

// Re-export Better Auth types
export type { Session, User } from "better-auth";

// Better Auth response types
export interface AuthResponse {
  token?: string;
  success: boolean;
  user?: {
    id: string;
    accountId: string;
    network: string;
  };
}

export interface AuthError {
  message: string;
  code: string;
  status: number;
}

// Define explicit return types for the client plugin
export interface SIWNClientActions {
  near: {
    // wallet: SIWNWalletProxy;
    nonce: (params: { accountId: AccountId }) => Promise<{ nonce?: string; error?: { message: string } }>;
    verify: (params: {
      authToken: string;
      accountId: AccountId;
      email?: string;
    }) => Promise<any>;
    getProfile: (accountId?: AccountId) => Promise<{ profile: Profile | null }>;
  };
}

export interface SIWNWalletProxy {
  requestSignIn(params?: { contractId?: string; successUrl?: string; failureUrl?: string }): Promise<void>;
  signOut(): Promise<void>;
  signMessage(params: { message: string; recipient: string; nonce?: Uint8Array }): Promise<any>;
  sendTx(params: { receiverId: string; actions: any[] }): Promise<any>;
  view(params: { contractId: string; methodName: string; args?: any; blockId?: string }): Promise<any>;
  accountId(): string | null;
  publicKey(): string | null;
  authStatus(): any;
  selected(): any;
  onAccount(callback: (accountId: string | null) => void): any;
  onTx(callback: (txStatus: any) => void): any;
  offAccount(unsubscribe: any): any;
  offTx(unsubscribe: any): any;
  config(config?: { networkId?: "mainnet" | "testnet"; nodeUrl?: string }): any;
  readonly actions: any;
  readonly utils: any;
}

export interface SIWNClientPlugin extends BetterAuthClientPlugin {
  id: "siwn";
  $InferServerPlugin: ReturnType<typeof siwn>;
  getActions: (fetch: any) => SIWNClientActions;
}
