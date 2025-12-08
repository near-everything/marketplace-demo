import { useState } from "react";
import { X } from "lucide-react";

interface EmailSignInFlowProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete: () => void;
  onConnectWallet: () => void;
}

export function EmailSignInFlow({ isOpen, onClose, onComplete, onConnectWallet }: EmailSignInFlowProps) {
  const [step, setStep] = useState<"enter" | "confirm" | "wallet">("enter");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  if (!isOpen) return null;

  const handleCreateAccount = () => {
    if (email && password) {
      setStep("confirm");
    }
  };

  const handleEmailConfirm = () => {
    // Simulate clicking the confirmation link
    setStep("wallet");
  };

  const handleConnectWallet = () => {
    // Close this flow and trigger wallet modal
    onConnectWallet();
    resetFlow();
  };

  const handleSkipWallet = () => {
    // Navigate back to store without wallet
    onComplete();
    resetFlow();
  };

  const resetFlow = () => {
    setStep("enter");
    setEmail("");
    setPassword("");
  };

  const handleClose = () => {
    onClose();
    resetFlow();
  };

  return (
    <div className="fixed inset-0 bg-white z-50">
      <button
        onClick={handleClose}
        className="absolute top-4 right-4 text-gray-600 hover:text-gray-900 z-10"
      >
        <X className="size-6" />
      </button>

      {/* Step 1: Enter Email */}
      {step === "enter" && (
        <div className="min-h-screen w-full flex items-center justify-center py-16 px-4">
          <div className="w-full max-w-[576px]">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16">
                  <svg className="block size-full" fill="none" viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r="30" stroke="black" strokeWidth="2" />
                    <text x="32" y="40" textAnchor="middle" fontSize="24" fontFamily="Red Hat Mono, sans-serif">N</text>
                  </svg>
                </div>
              </div>
              <h1 className="text-2xl mb-2">Create Your Account</h1>
              <p className="text-[#717182]">Sign up with email to start shopping</p>
            </div>

            {/* Form */}
            <div className="bg-white border border-[rgba(0,0,0,0.1)] p-8">
              <div className="space-y-4 mb-6">
                {/* Email Field */}
                <div>
                  <label className="block text-sm mb-1.5">Email Address</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="your@email.com"
                    className="w-full bg-[#f3f3f5] px-3 py-2 text-sm"
                  />
                </div>

                {/* Password Field */}
                <div>
                  <label className="block text-sm mb-1.5">Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Create a strong password"
                    className="w-full bg-[#f3f3f5] px-3 py-2 text-sm"
                  />
                  <p className="text-xs text-[#717182] mt-1.5">Must be at least 8 characters</p>
                </div>

                {/* Create Account Button */}
                <button
                  onClick={handleCreateAccount}
                  disabled={!email || password.length < 8}
                  className={`w-full py-2 text-sm text-white transition-colors ${
                    email && password.length >= 8
                      ? 'bg-[#030213] hover:bg-[#1a1a2e]'
                      : 'bg-[#030213] opacity-50 cursor-not-allowed'
                  }`}
                >
                  Create Account
                </button>
              </div>

              {/* Security Notice */}
              <div className="border-t border-[rgba(0,0,0,0.1)] pt-6">
                <div className="flex items-start gap-3">
                  <svg className="size-5 text-[#717182] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 20 20">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                  <div>
                    <p className="text-[#717182]">Your data is protected</p>
                    <p className="text-xs text-[#717182]">
                      We use industry-standard encryption to keep your information secure.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Back Link */}
            <div className="text-center mt-6">
              <button
                onClick={handleClose}
                className="text-sm text-[#717182] hover:text-neutral-950 transition-colors"
              >
                ← Back to login options
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Step 2: Check Email */}
      {step === "confirm" && (
        <div className="min-h-screen w-full flex items-center justify-center py-16 px-4">
          <div className="w-full max-w-[576px]">
            {/* Icon and Header */}
            <div className="text-center mb-8">
              <div className="flex justify-center mb-6">
                <div className="bg-[#00ec97] rounded-full size-16 flex items-center justify-center">
                  <svg className="size-8" fill="none" stroke="black" viewBox="0 0 32 32">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.67" d="M26.667 8L12 22.667 5.333 16" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.67" d="M29.333 10.667v12A2.667 2.667 0 0126.667 25.333H5.333A2.667 2.667 0 012.667 22.667v-12m24 0l-10.667 7.333L5.333 10.667m0 0v-2.667a2.667 2.667 0 012.667-2.667h16a2.667 2.667 0 012.667 2.667v2.667z" />
                  </svg>
                </div>
              </div>
              <h2 className="mb-2">Check Your Email</h2>
              <p className="text-[#717182]">
                We've sent a confirmation link to <span className="font-semibold">{email}</span>
              </p>
            </div>

            {/* Instructions Card */}
            <div className="bg-white border border-[rgba(0,0,0,0.1)] p-8">
              <div className="space-y-4">
                <p className="text-sm text-[#717182] text-center">
                  Click the link in your email to verify your account and complete the signup process.
                </p>
                <p className="text-sm text-[#717182] text-center">
                  Didn't receive the email? Check your spam folder or{" "}
                  <button className="underline hover:text-neutral-950 transition-colors">
                    resend the confirmation
                  </button>
                </p>
              </div>
            </div>

            {/* Simulate Email Link Click */}
            <div className="text-center mt-6">
              <button
                onClick={handleEmailConfirm}
                className="text-sm text-[#00ec97] hover:text-[#00d687] underline transition-colors"
              >
                [Demo: Click here to simulate email confirmation]
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Step 3: Add NEAR Wallet */}
      {step === "wallet" && (
        <div className="min-h-screen w-full flex items-center justify-center py-16 px-4">
          <div className="w-full max-w-[672px]">
            {/* Header */}
            <div className="text-center mb-12">
              <div className="flex justify-center mb-6">
                <div className="h-16 w-16">
                  <svg className="block size-full" fill="none" viewBox="0 0 64 64">
                    <circle cx="32" cy="32" r="30" stroke="black" strokeWidth="2" />
                    <text x="32" y="40" textAnchor="middle" fontSize="24" fontFamily="Red Hat Mono, sans-serif">N</text>
                  </svg>
                </div>
              </div>
              <h1 className="text-2xl mb-2">Account Created</h1>
              <p className="text-[#717182]">Connect a NEAR wallet for exclusive benefits</p>
            </div>

            {/* Benefits Card */}
            <div className="bg-white border border-[rgba(0,0,0,0.1)] p-8 mb-8">
              <h2 className="mb-4">Why Add a NEAR Wallet?</h2>

              <div className="space-y-4 mb-12">
                {/* Benefit 1 */}
                <div className="bg-[#ececf0] p-4 flex gap-4">
                  <div className="bg-[#00ec97] size-10 flex items-center justify-center flex-shrink-0">
                    <svg className="size-5" fill="none" stroke="black" viewBox="0 0 20 20">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1">Pay with Crypto</h3>
                    <p className="text-sm text-[#717182]">
                      Instant checkout with NEAR tokens - no credit card needed
                    </p>
                  </div>
                </div>

                {/* Benefit 2 */}
                <div className="bg-[#ececf0] p-4 flex gap-4">
                  <div className="bg-[#00ec97] size-10 flex items-center justify-center flex-shrink-0">
                    <svg className="size-5" fill="none" stroke="black" viewBox="0 0 20 20">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" d="M7 21h10a2 2 0 002-2V9.414a1 1 0 00-.293-.707l-5.414-5.414A1 1 0 0012.586 3H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1">Exclusive NFT Drops</h3>
                    <p className="text-sm text-[#717182]">
                      Access limited edition NFTs and digital collectibles
                    </p>
                  </div>
                </div>

                {/* Benefit 3 */}
                <div className="bg-[#ececf0] p-4 flex gap-4">
                  <div className="bg-[#00ec97] size-10 flex items-center justify-center flex-shrink-0">
                    <svg className="size-5" fill="none" stroke="black" viewBox="0 0 20 20">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.67" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="mb-1">Enhanced Security</h3>
                    <p className="text-sm text-[#717182]">
                      Your keys, your crypto - complete control over your assets
                    </p>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 mb-4">
                <button
                  onClick={handleConnectWallet}
                  className="w-full bg-[#00ec97] hover:bg-[#00d687] px-6 py-3 flex items-center justify-center gap-2 transition-colors"
                >
                  <svg className="size-4" fill="none" stroke="black" viewBox="0 0 16 16">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" d="M12.667 7.333v-2a1.333 1.333 0 00-1.334-1.333H2.667A1.333 1.333 0 001.333 5.333v5.334A1.333 1.333 0 002.667 12h8.666a1.333 1.333 0 001.334-1.333v-2m0-1.334a1.333 1.333 0 010 2.667m0-2.667a1.333 1.333 0 000-2.667" />
                  </svg>
                  <span className="text-sm">Connect NEAR Wallet</span>
                </button>

                <button
                  onClick={handleSkipWallet}
                  className="w-full bg-white border border-[rgba(0,0,0,0.52)] hover:bg-gray-50 px-6 py-3 transition-colors"
                >
                  <span className="text-sm">Continue Without Wallet</span>
                </button>
              </div>

              <p className="text-xs text-[#717182] text-center">
                You can always connect a wallet later from your account settings
              </p>
            </div>

            {/* Security Notice */}
            <div className="bg-[#ececf0] p-4 text-center">
              <p className="text-xs text-[#717182]">
                🔒 Your wallet connection is secure. We never ask for your private keys.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}