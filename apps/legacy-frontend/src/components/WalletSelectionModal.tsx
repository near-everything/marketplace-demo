import { X, Loader2 } from "lucide-react";
import { useState } from "react";

interface WalletSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  onComplete?: () => void;
}

export function WalletSelectionModal({ isOpen, onClose, onComplete }: WalletSelectionModalProps) {
  const [rememberWallets, setRememberWallets] = useState(true);
  const [isConnecting, setIsConnecting] = useState(false);
  const [selectedWallet, setSelectedWallet] = useState<string | null>(null);

  if (!isOpen) return null;

  const handleWalletClick = (walletName: string) => {
    setSelectedWallet(walletName);
    setIsConnecting(true);

    // Simulate connection delay
    setTimeout(() => {
      setIsConnecting(false);
      setSelectedWallet(null);
      onClose();
      if (onComplete) {
        onComplete();
      }
    }, 1500);
  };

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-[#2c2c2c] w-full max-w-4xl flex overflow-hidden relative">
        {/* Loading Overlay */}
        {isConnecting && (
          <div className="absolute inset-0 bg-black/70 flex items-center justify-center z-10">
            <div className="text-center">
              <Loader2 className="size-12 animate-spin text-[#5b9def] mx-auto mb-4" />
              <p className="text-white text-sm">Connecting to {selectedWallet}...</p>
            </div>
          </div>
        )}

        {/* Left Side - Connect Your Wallet */}
        <div className="flex-1 p-8 border-r border-[#404040]">
          <h2 className="text-white text-xl mb-6">Connect Your Wallet</h2>
          
          {/* Remember wallets toggle */}
          <div className="flex items-center justify-between mb-8">
            <span className="text-white/80 text-sm">Remember wallets</span>
            <button
              onClick={() => setRememberWallets(!rememberWallets)}
              disabled={isConnecting}
              className={`w-12 h-6 rounded-full transition-colors ${
                rememberWallets ? 'bg-[#5b9def]' : 'bg-[#505050]'
              } relative`}
            >
              <div
                className={`w-5 h-5 bg-white rounded-full absolute top-0.5 transition-transform ${
                  rememberWallets ? 'translate-x-6' : 'translate-x-0.5'
                }`}
              />
            </button>
          </div>

          {/* Recent */}
          <div className="mb-6">
            <h3 className="text-white/60 text-xs uppercase mb-3">Recent</h3>
            <div className="space-y-2">
              <button 
                onClick={() => handleWalletClick("MyNearWallet")}
                disabled={isConnecting}
                className="w-full flex items-center gap-3 p-3 hover:bg-[#3c3c3c] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="size-10 bg-white flex items-center justify-center">
                  <svg className="size-8" viewBox="0 0 32 32" fill="none">
                    <rect width="32" height="32" fill="white"/>
                    <path d="M8 8L16 24L24 8H8Z" fill="#5B9DEF"/>
                  </svg>
                </div>
                <span className="text-white text-sm">MyNearWallet</span>
              </button>

              <button 
                onClick={() => handleWalletClick("HOT Wallet")}
                disabled={isConnecting}
                className="w-full flex items-center gap-3 p-3 bg-[rgba(0,0,0,0)] hover:bg-[#3c3c3c] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="size-10 bg-white flex items-center justify-center">
                  <svg className="size-6" viewBox="0 0 24 24" fill="none">
                    <circle cx="12" cy="12" r="8" fill="#FF6B00"/>
                    <circle cx="12" cy="12" r="4" fill="#FFD700"/>
                  </svg>
                </div>
                <span className="text-white text-sm">HOT Wallet</span>
              </button>
            </div>
          </div>

          {/* More */}
          <div>
            <h3 className="text-white/60 text-xs uppercase mb-3">More</h3>
            <div className="space-y-2">
              <button 
                onClick={() => handleWalletClick("Meteor Wallet")}
                disabled={isConnecting}
                className="w-full flex items-center gap-3 p-3 hover:bg-[#3c3c3c] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="size-10 bg-white flex items-center justify-center">
                  <svg className="size-8" viewBox="0 0 32 32" fill="none">
                    <rect width="32" height="32" fill="white"/>
                    <circle cx="16" cy="16" r="10" fill="#8B5CF6"/>
                    <path d="M12 10L20 16L12 22V10Z" fill="white"/>
                  </svg>
                </div>
                <span className="text-white text-sm">Meteor Wallet</span>
              </button>

              <button 
                onClick={() => handleWalletClick("Intear Wallet")}
                disabled={isConnecting}
                className="w-full flex items-center gap-3 p-3 hover:bg-[#3c3c3c] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                <div className="size-10 bg-white flex items-center justify-center">
                  <svg className="size-6" viewBox="0 0 24 24" fill="none">
                    <path d="M12 3C12 3 6 8 6 14C6 17.314 8.686 20 12 20C15.314 20 18 17.314 18 14C18 8 12 3 12 3Z" fill="#00D4AA" stroke="#00D4AA" strokeWidth="1.5"/>
                  </svg>
                </div>
                <span className="text-white text-sm">Intear Wallet</span>
              </button>
            </div>
          </div>
        </div>

        {/* Right Side - What is a Wallet */}
        <div className="flex-1 p-8 relative">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
          >
            <X className="size-6" />
          </button>

          <h2 className="text-white text-xl mb-12">What is a Wallet?</h2>

          <div className="space-y-8 mb-12">
            {/* Secure & Manage */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <svg className="size-12" viewBox="0 0 48 48" fill="none">
                  <circle cx="18" cy="18" r="6" stroke="#5B9DEF" strokeWidth="2"/>
                  <path d="M30 12L30 24" stroke="#5B9DEF" strokeWidth="2" strokeLinecap="round"/>
                  <circle cx="30" cy="12" r="3" fill="#5B9DEF"/>
                </svg>
              </div>
              <div>
                <h3 className="text-white mb-2">Secure & Manage Your Digital Assets</h3>
                <p className="text-white/60 text-sm">
                  Safely store and transfer your crypto and NFTs.
                </p>
              </div>
            </div>

            {/* Log In to Any NEAR App */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <svg className="size-12" viewBox="0 0 48 48" fill="none">
                  <rect x="12" y="14" width="24" height="20" stroke="#5B9DEF" strokeWidth="2" rx="2"/>
                  <path d="M16 14V10C16 8 17 6 20 6H28C31 6 32 8 32 10V14" stroke="#5B9DEF" strokeWidth="2"/>
                  <circle cx="24" cy="24" r="2" fill="#5B9DEF"/>
                </svg>
              </div>
              <div>
                <h3 className="text-white mb-2">Log In to Any NEAR App</h3>
                <p className="text-white/60 text-sm">
                  No need to create new accounts or credentials. Connect your wallet and you are good to go!
                </p>
              </div>
            </div>
          </div>

          {/* Get a Wallet Button */}
          <div className="flex justify-center">
            <button className="bg-[#5b9def] hover:bg-[#4a8cde] text-white px-6 py-3 transition-colors">
              Get a Wallet
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}