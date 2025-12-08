import { useEffect } from "react";
import { X, Minus, Plus, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { Product } from "../data/products";

interface CartItem {
  product: Product;
  quantity: number;
  size: string;
}

interface CartSidebarProps {
  isOpen: boolean;
  onClose: () => void;
  cartItems: { [productId: number]: { quantity: number; size: string } };
  products: Product[];
  onUpdateQuantity: (productId: number, change: number) => void;
  onRemoveItem: (productId: number) => void;
  onUpdateSize: (productId: number, size: string) => void;
  onCheckout?: () => void;
}

export function CartSidebar({
  isOpen,
  onClose,
  cartItems,
  products,
  onUpdateQuantity,
  onRemoveItem,
  onUpdateSize,
  onCheckout,
}: CartSidebarProps) {
  // Prevent background scrolling when sidebar is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  // Get cart items with product details
  const cartItemsWithDetails: CartItem[] = Object.entries(cartItems)
    .map(([id, { quantity, size }]) => {
      const product = products.find((p) => p.id === parseInt(id));
      if (!product) return null;
      return {
        product,
        quantity,
        size,
      };
    })
    .filter((item): item is CartItem => item !== null);

  // Calculate subtotal
  const subtotal = cartItemsWithDetails.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return (
    <>
      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-40"
            onClick={onClose}
          />
        )}
      </AnimatePresence>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3, ease: "easeInOut" }}
            className="fixed right-0 top-0 h-full w-full max-w-[512px] bg-white z-50 flex flex-col shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)]"
          >
            {/* Header */}
            <div className="border-b border-[rgba(0,0,0,0.1)] px-4 py-4">
              <div className="flex items-start justify-between mb-1.5">
                <div className="flex-1">
                  <h2 className="tracking-[-0.48px] text-[16px]">Shopping Cart</h2>
                </div>
                <button
                  onClick={onClose}
                  className="size-8 flex items-center justify-center -mr-2"
                  aria-label="Close cart"
                >
                  <X className="size-4" />
                </button>
              </div>
              <p className="text-[#717182] text-[14px] tracking-[-0.48px]">
                Review your items and proceed to checkout
              </p>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto px-4">
              {cartItemsWithDetails.length === 0 ? (
                <div className="flex items-center justify-center h-full">
                  <p className="text-[#717182] text-[14px]">Your cart is empty</p>
                </div>
              ) : (
                <div className="divide-y divide-[rgba(0,0,0,0.1)]">
                  {cartItemsWithDetails.map((item) => (
                    <div
                      key={item.product.id}
                      className="py-4 flex gap-4 items-start"
                    >
                      {/* Product Image */}
                      <div className="bg-[#ececf0] rounded size-20 shrink-0 overflow-hidden">
                        <img
                          src={item.product.image}
                          alt={item.product.name}
                          className="w-full h-full object-cover"
                        />
                      </div>

                      {/* Product Details */}
                      <div className="flex-1 min-w-0">
                        {/* Product Name and Remove Button */}
                        <div className="flex items-start justify-between mb-1">
                          <div className="flex-1 min-w-0 pr-2">
                            <h3 className="text-[16px] tracking-[-0.48px] truncate">
                              {item.product.name}
                            </h3>
                            <p className="text-[#717182] text-[14px] tracking-[-0.48px] mt-1">
                              {item.product.category}
                            </p>
                          </div>
                          <button
                            onClick={() => onRemoveItem(item.product.id)}
                            className="size-8 flex items-center justify-center shrink-0"
                            aria-label={`Remove ${item.product.name}`}
                          >
                            <X className="size-4" />
                          </button>
                        </div>

                        {/* Size Selector */}
                        <div className="relative inline-block mt-3">
                          <select
                            value={item.size}
                            onChange={(e) =>
                              onUpdateSize(item.product.id, e.target.value)
                            }
                            className="appearance-none bg-[#f3f3f5] border-none h-9 px-3.5 pr-9 text-[14px] tracking-[-0.48px] cursor-pointer"
                          >
                            <option value="XS">XS</option>
                            <option value="S">S</option>
                            <option value="M">M</option>
                            <option value="L">L</option>
                            <option value="XL">XL</option>
                            <option value="N/A">N/A</option>
                          </select>
                          <ChevronDown className="size-4 text-[#717182] absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none opacity-50" />
                        </div>

                        {/* Quantity and Price */}
                        <div className="flex items-center justify-between mt-2">
                          {/* Quantity Controls */}
                          <div className="flex items-center border border-[rgba(0,0,0,0.1)] rounded h-[34px]">
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, -1)}
                              disabled={item.quantity <= 1}
                              className="size-8 flex items-center justify-center disabled:opacity-50"
                              aria-label="Decrease quantity"
                            >
                              <Minus className="size-4" />
                            </button>
                            <span className="w-8 text-center text-[16px] tracking-[-0.48px]">
                              {item.quantity}
                            </span>
                            <button
                              onClick={() => onUpdateQuantity(item.product.id, 1)}
                              className="size-8 flex items-center justify-center"
                              aria-label="Increase quantity"
                            >
                              <Plus className="size-4" />
                            </button>
                          </div>

                          {/* Price */}
                          <div className="text-[16px] tracking-[-0.48px]">
                            ${(item.product.price * item.quantity).toFixed(2)}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cartItemsWithDetails.length > 0 && (
              <div className="border-t border-[rgba(0,0,0,0.1)] px-4 pt-4 pb-4">
                {/* Subtotal */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[16px] tracking-[-0.48px]">Subtotal</span>
                  <span className="text-[16px] tracking-[-0.48px]">
                    ${subtotal.toFixed(2)}
                  </span>
                </div>

                {/* Checkout Button */}
                <button
                  onClick={onCheckout}
                  className="w-full bg-neutral-950 text-white h-9 flex items-center justify-center tracking-[-0.48px] text-[14px] hover:bg-neutral-800 transition-colors"
                >
                  Checkout
                </button>

                {/* Shipping Note */}
                <p className="text-[#717182] text-[12px] tracking-[-0.48px] text-center mt-4">
                  Shipping and taxes calculated at checkout
                </p>
              </div>
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}