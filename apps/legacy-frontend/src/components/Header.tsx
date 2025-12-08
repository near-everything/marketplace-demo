import { Search, User, Heart, ShoppingCart, LogIn, UserCircle, LogOut } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import Group from "../imports/Group";

interface HeaderProps {
  cartCount: number;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  onSearchSubmit: () => void;
  onLogoClick?: () => void;
  onFavoritesClick?: () => void;
  favoritesCount: number;
  onNavigateToCollections?: () => void;
  onNavigateToCollection?: (collection: "Men" | "Women" | "Exclusives" | "Accessories") => void;
  onCartClick?: () => void;
  onProfileClick?: () => void;
  isSignedIn?: boolean;
  onSignIn?: () => void;
  onSignOut?: () => void;
  onMyAccount?: () => void;
  walletAddress?: string;
}

export function Header({ 
  cartCount, 
  searchQuery, 
  onSearchChange, 
  onSearchSubmit, 
  onLogoClick, 
  onFavoritesClick, 
  favoritesCount, 
  onNavigateToCollections, 
  onNavigateToCollection, 
  onCartClick, 
  onProfileClick,
  isSignedIn = false,
  onSignIn,
  onSignOut,
  onMyAccount,
  walletAddress
}: HeaderProps) {
  const [showMobileSearch, setShowMobileSearch] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const accountMenuRef = useRef<HTMLDivElement>(null);

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (accountMenuRef.current && !accountMenuRef.current.contains(event.target as Node)) {
        setShowAccountMenu(false);
      }
    };

    if (showAccountMenu) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showAccountMenu]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      onSearchSubmit();
      setShowMobileSearch(false);
    }
  };

  return (
    <header className="bg-white border-b border-[rgba(0,0,0,0.1)] sticky top-0 z-50">
      <div className="max-w-[1408px] mx-auto px-4 md:px-8 lg:px-16 py-4">
        <div className="flex items-center justify-between gap-4">
          {/* Logo */}
          <button 
            onClick={onLogoClick}
            className="flex items-center hover:opacity-80 transition-opacity"
            aria-label="Go to home"
          >
            <NearLogo />
          </button>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-6">
            <button 
              onClick={(e) => {
                e.preventDefault();
                onNavigateToCollection?.("Men");
              }}
              className="text-neutral-950 hover:text-neutral-600 transition-colors"
            >
              Men
            </button>
            <button 
              onClick={(e) => {
                e.preventDefault();
                onNavigateToCollection?.("Women");
              }}
              className="text-neutral-950 hover:text-neutral-600 transition-colors"
            >
              Women
            </button>
            <button 
              onClick={(e) => {
                e.preventDefault();
                onNavigateToCollections?.();
              }}
              className="text-neutral-950 hover:text-neutral-600 transition-colors"
            >
              Collections
            </button>
          </nav>

          {/* Search and Actions */}
          <div className="flex items-center gap-2">
            {/* Desktop Search */}
            <div className="hidden lg:flex items-center bg-[#f3f3f5] px-3 py-2 w-[240px]">
              <Search className="size-4 text-[#717182] mr-2" />
              <input 
                type="text" 
                placeholder="Search products..." 
                className="bg-transparent border-none outline-none text-sm text-neutral-950 placeholder:text-[#717182] w-full"
                value={searchQuery}
                onChange={(e) => onSearchChange(e.target.value)}
                onKeyDown={handleKeyDown}
              />
            </div>

            {/* Mobile Search Button */}
            <button 
              className="lg:hidden p-2 hover:bg-gray-100 transition-colors" 
              aria-label="Search"
              onClick={() => setShowMobileSearch(!showMobileSearch)}
            >
              <Search className="size-4" />
            </button>

            {/* Action Buttons */}
            <div className="relative" ref={accountMenuRef}>
              <button 
                className="p-2 hover:bg-gray-100 transition-colors" 
                aria-label="Account"
                onClick={() => setShowAccountMenu(!showAccountMenu)}
              >
                <User className="size-4" />
              </button>

              {/* Account Dropdown Menu */}
              {showAccountMenu && (
                <div className="absolute right-0 top-full mt-2 bg-white border-2 border-[rgba(0,0,0,0.1)] min-w-[220px] shadow-lg z-50">
                  {isSignedIn ? (
                    <>
                      <button 
                        onClick={() => {
                          setShowAccountMenu(false);
                          onMyAccount?.();
                        }}
                        className="w-full px-4 py-3 text-left hover:bg-[#f3f3f5] transition-colors flex items-start gap-3"
                      >
                        <UserCircle className="size-4 mt-0.5 flex-shrink-0" />
                        <div className="flex-1 min-w-0">
                          <div className="text-xs text-[#717182] mb-1">My Account</div>
                          <div className="text-sm text-neutral-950 truncate font-mono">
                            {walletAddress || "wallet.near"}
                          </div>
                        </div>
                      </button>
                      <button 
                        onClick={() => {
                          setShowAccountMenu(false);
                          onSignOut?.();
                        }}
                        className="w-full px-4 py-3 text-left text-sm hover:bg-red-50 transition-colors border-t border-[rgba(0,0,0,0.1)] flex items-center gap-2 text-red-600"
                      >
                        <LogOut className="size-4" />
                        Log Out
                      </button>
                    </>
                  ) : (
                    <button 
                      onClick={() => {
                        setShowAccountMenu(false);
                        onSignIn?.();
                      }}
                      className="w-full px-4 py-3 text-left text-sm hover:bg-[#f3f3f5] transition-colors flex items-center gap-2"
                    >
                      <LogIn className="size-4" />
                      Sign In
                    </button>
                  )}
                </div>
              )}
            </div>
            <button 
              className="p-2 hover:bg-gray-100 transition-colors relative" 
              aria-label="Favorites"
              onClick={onFavoritesClick}
            >
              <Heart className="size-4" />
              {favoritesCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-neutral-950 text-white text-xs size-5 flex items-center justify-center">
                  {favoritesCount}
                </span>
              )}
            </button>
            <button className="p-2 hover:bg-gray-100 transition-colors relative" aria-label="Cart" onClick={onCartClick}>
              <ShoppingCart className="size-4" />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-neutral-950 text-white text-xs size-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </button>
          </div>
        </div>

        {/* Mobile Search Bar */}
        {showMobileSearch && (
          <div className="lg:hidden mt-4 flex items-center bg-[#f3f3f5] rounded-sm px-3 py-2">
            <Search className="size-4 text-[#717182] mr-2" />
            <input 
              type="text" 
              placeholder="Search products..." 
              className="bg-transparent border-none outline-none text-sm text-neutral-950 placeholder:text-[#717182] w-full"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              onKeyDown={handleKeyDown}
              autoFocus
            />
          </div>
        )}
      </div>
    </header>
  );
}

function NearLogo() {
  return (
    <div className="h-6 w-24">
      <Group />
    </div>
  );
}