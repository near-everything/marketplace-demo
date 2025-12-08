import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/_marketplace/login')({
  component: LoginPage,
});

function LoginPage() {
  const navigate = useNavigate();
  const [isExpanded, setIsExpanded] = useState(false);

  const handleSignIn = (method: string) => {
    console.log(`Sign in with ${method}`);
    navigate({ to: '/account' });
  };

  return (
    <div className="bg-white min-h-screen w-full flex items-center justify-center py-16 px-4">
      <div className="w-full max-w-[672px]">
        <div className="text-center mb-12">
          <h1 className="text-2xl mb-2">Welcome to the NEAR Merch Store!</h1>
          <p className="text-[#717182]">Create your account</p>
        </div>

        <div className="mb-4">
          <button
            onClick={() => handleSignIn('near')}
            className="w-full bg-[#00ec97] border-2 border-[rgba(0,0,0,0.1)] px-6 py-5 flex items-center justify-center gap-3 hover:bg-[#00d687] transition-colors"
          >
            <div className="size-6 flex items-center justify-center">
              <svg className="size-6" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" fill="black" />
              </svg>
            </div>
            <span className="text-sm">Sign up with NEAR</span>
          </button>
        </div>

        <div className="mb-4 space-y-3">
          <button
            onClick={() => handleSignIn('google')}
            className="w-full bg-white border-2 border-[rgba(0,0,0,0.1)] px-6 py-5 flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors"
          >
            <svg className="size-6" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            <span className="text-sm">Sign in with Google</span>
          </button>

          <button
            onClick={() => handleSignIn('email')}
            className="w-full bg-white border-2 border-[rgba(0,0,0,0.1)] px-6 py-5 flex items-center justify-center gap-3 hover:bg-gray-50 transition-colors"
          >
            <svg className="size-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
            </svg>
            <span className="text-sm">Sign up with Email</span>
          </button>
        </div>

        <div className="mb-6 border border-[rgba(0,0,0,0.1)]">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full px-3 py-3 flex items-center justify-between hover:bg-gray-50 transition-colors"
          >
            <span className="text-sm">Why connect a wallet?</span>
            <ChevronDown
              className={`size-4 transition-transform ${isExpanded ? 'rotate-180' : ''}`}
            />
          </button>

          {isExpanded && (
            <div className="px-4 pb-6 pt-2">
              <p className="text-[#717182] mb-4">
                Connecting your NEAR wallet provides the fastest and most secure way to shop:
              </p>
              <ul className="space-y-2">
                <li className="flex items-start gap-2">
                  <span className="text-[#00ec97] text-sm">•</span>
                  <span className="text-[#717182] text-sm">No need to remember passwords - your wallet is your login</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ec97] text-sm">•</span>
                  <span className="text-[#717182] text-sm">Pay directly with crypto for instant transactions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ec97] text-sm">•</span>
                  <span className="text-[#717182] text-sm">Access exclusive NFT drops and limited editions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#00ec97] text-sm">•</span>
                  <span className="text-[#717182] text-sm">Your data stays private and under your control</span>
                </li>
              </ul>
            </div>
          )}
        </div>

        <div className="text-center mb-6">
          <p className="text-[#717182] text-sm">
            Already have an account?{' '}
            <button className="underline hover:text-neutral-950 transition-colors">
              Sign in
            </button>
          </p>
        </div>

        <div className="bg-[#ececf0] px-4 py-4 text-center">
          <p className="text-[#717182] text-xs">
            🔒 Your information is secure and encrypted. We never share your data.
          </p>
        </div>

        <div className="text-center mt-6">
          <Link
            to="/"
            className="text-sm text-[#717182] hover:text-neutral-950 underline transition-colors"
          >
            ← Back to store
          </Link>
        </div>
      </div>
    </div>
  );
}
