import { authClient } from "@/lib/auth-client";
import { useNavigate, useSearch } from "@tanstack/react-router";
import { toast } from "sonner";
import { useState } from "react";
import Loader from "./loader";
import { Button } from "./ui/button";

declare global {
	interface Window {
		near?: {
			accountId(): string | null;
			signMessage: (params: { message: string; recipient: string; nonce: Uint8Array }) => Promise<any>;
			requestSignIn: (params: { contractId: string }, callbacks: { onSuccess: (result: any) => void; onError: (error: any) => void }) => Promise<void>;
		};
	}
}

export default function SignInForm() {
	const navigate = useNavigate({
		from: "/",
	});
	const search = useSearch({ from: "/login" });
	const { isPending } = authClient.useSession();
	const [isConnectingWallet, setIsConnectingWallet] = useState(false);
	const [isSigningInWithNear, setIsSigningInWithNear] = useState(false);

	// Check wallet connection status
	const accountId = (typeof window !== "undefined" && window.near?.accountId()) || null;

	const handleWalletConnect = async () => {
		setIsConnectingWallet(true);

		try {
			if (!window.near) {
				throw new Error("NEAR wallet not available. Please make sure you have a NEAR wallet installed or refresh the page.");
			}

			await window.near.requestSignIn(
				{
					contractId: "social.near",
				},
				{
					onSuccess: (result: any) => {
						toast.success(`Wallet connected: ${result.accountId}`);
						setIsConnectingWallet(false);
					},
					onError: (error: any) => {
						console.error("Wallet connection failed:", error);
						toast.error(
							error.type === "popup_blocked"
								? "Please allow popups and try again"
								: "Failed to connect wallet"
						);
						setIsConnectingWallet(false);
					},
				}
			);
		} catch (error) {
			console.error("Wallet connection error:", error);
			toast.error("Failed to connect to NEAR wallet");
			setIsConnectingWallet(false);
		}
	};

	const handleNearSignIn = async () => {
		setIsSigningInWithNear(true);

		try {
			await authClient.signIn.near(
				{ 
					recipient: "better-near-auth.near", 
					signer: window.near! 
				},
				{
					onSuccess: () => {
						navigate({
							to: search.redirect || "/dashboard",
						});
						toast.success(`Signed in as: ${accountId}`);
					},
					onError: (error) => {
						console.error("NEAR sign in error:", error);
						toast.error(error instanceof Error ? error.message : "Authentication failed");
					},
				}
			);
		} catch (error) {
			console.error("NEAR authentication error:", error);
			toast.error(error instanceof Error ? error.message : "Failed to authenticate with NEAR");
		} finally {
			setIsSigningInWithNear(false);
		}
	};

	if (isPending) {
		return <Loader />;
	}

	return (
		<div className="mx-auto w-full mt-10 max-w-md p-6">
			<h1 className="mb-6 text-center text-3xl font-bold">Sign in with NEAR</h1>
			<p className="mb-8 text-center text-gray-600">
				Connect your NEAR wallet to authenticate securely
			</p>

			{!accountId ? (
				<Button
					type="button"
					className="w-full py-3 text-lg"
					onClick={handleWalletConnect}
					disabled={isConnectingWallet}
				>
					{isConnectingWallet ? "Connecting Wallet..." : "Connect NEAR Wallet"}
				</Button>
			) : (
				<Button
					type="button"
					className="w-full py-3 text-lg"
					onClick={handleNearSignIn}
					disabled={isSigningInWithNear}
				>
					{isSigningInWithNear ? "Signing in..." : `Sign in with NEAR (${accountId})`}
				</Button>
			)}

			<div className="mt-6 text-center text-sm text-gray-500">
				<p>
					This demo uses fastintear for wallet connectivity.
				</p>
			</div>
		</div>
	);
}
