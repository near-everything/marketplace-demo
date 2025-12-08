import { X, Heart, Trash2 } from "lucide-react";
import { useEffect } from "react";
import svgPaths from "../imports/svg-wuo8xuetxh";

interface Product {
  id: number;
  name: string;
  price: number;
  category: string;
  image: string;
}

interface FavoritesPanelProps {
  isOpen: boolean;
  onClose: () => void;
  favorites: number[];
  products: Product[];
  onRemoveFavorite: (id: number) => void;
  onAddToCart: (id: number) => void;
}

export function FavoritesPanel({ 
  isOpen, 
  onClose, 
  favorites, 
  products,
  onRemoveFavorite,
  onAddToCart 
}: FavoritesPanelProps) {
  const favoriteProducts = products.filter(p => favorites.includes(p.id));

  // Prevent body scroll when panel is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  // Handle escape key to close panel
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape' && isOpen) {
        onClose();
      }
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [isOpen, onClose]);

  return (
    <>
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 z-40 transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={onClose}
      />

      {/* Side Panel */}
      <div className={`fixed right-0 top-0 h-screen w-full max-w-[512px] bg-white z-50 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] border-l border-[rgba(0,0,0,0.1)] overflow-y-auto transition-transform duration-300 ${
        isOpen ? "translate-x-0" : "translate-x-full"
      }`}>
        {/* Header */}
        <div className="flex flex-col gap-1.5 px-4 py-4 border-b border-[rgba(0,0,0,0.1)]">
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-neutral-950 mb-1.5">Favorites</h2>
              <p className="text-sm text-[#717182]">Your saved items</p>
            </div>
            <button
              onClick={onClose}
              className="p-1 hover:bg-gray-100 transition-colors opacity-70 hover:opacity-100"
              aria-label="Close favorites"
            >
              <X className="size-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-4">
          {favoriteProducts.length === 0 ? (
            <EmptyState />
          ) : (
            <div className="space-y-4">
              {favoriteProducts.map((product) => (
                <FavoriteItem
                  key={product.id}
                  product={product}
                  onRemove={onRemoveFavorite}
                  onAddToCart={onAddToCart}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </>
  );
}

function EmptyState() {
  return (
    <div className="flex flex-col items-center justify-center py-32 text-center">
      {/* Heart Icon */}
      <div className="mb-6">
        <svg className="size-8" fill="none" viewBox="0 0 32 32">
          <path 
            d={svgPaths.p18d31c00} 
            stroke="#717182" 
            strokeLinecap="round" 
            strokeLinejoin="round" 
            strokeWidth="2" 
          />
        </svg>
      </div>

      {/* Text */}
      <h3 className="text-[#717182] mb-2">No favorites yet</h3>
      <p className="text-xs text-[#717182] max-w-[200px]">
        Click the heart icon on products to save them here
      </p>
    </div>
  );
}

interface FavoriteItemProps {
  product: Product;
  onRemove: (id: number) => void;
  onAddToCart: (id: number) => void;
}

function FavoriteItem({ product, onRemove, onAddToCart }: FavoriteItemProps) {
  return (
    <div className="flex gap-3 p-3 border border-[rgba(0,0,0,0.1)] hover:border-neutral-950 transition-colors">
      {/* Product Image */}
      <div className="w-20 h-20 bg-[#ececf0] overflow-hidden flex-shrink-0">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Info */}
      <div className="flex-1 min-w-0">
        <p className="text-xs text-[#717182] uppercase tracking-wider mb-1">
          {product.category}
        </p>
        <h4 className="text-sm text-neutral-950 mb-1 line-clamp-2">
          {product.name}
        </h4>
        <p className="text-sm text-neutral-950 mb-2">${product.price}</p>

        {/* Actions */}
        <div className="flex gap-2">
          <button
            onClick={() => onAddToCart(product.id)}
            className="flex-1 bg-neutral-950 text-white text-xs px-3 py-1.5 hover:bg-neutral-800 transition-colors"
          >
            Add to Cart
          </button>
          <button
            onClick={() => onRemove(product.id)}
            className="p-1.5 border border-[rgba(0,0,0,0.1)] hover:border-neutral-950 hover:bg-gray-50 transition-colors"
            aria-label="Remove from favorites"
          >
            <Trash2 className="size-4" />
          </button>
        </div>
      </div>
    </div>
  );
}