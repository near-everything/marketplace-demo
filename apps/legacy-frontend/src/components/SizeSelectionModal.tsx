import { X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Product } from "../data/products";

interface SizeSelectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  product: Product | null;
  onConfirm: (size: string) => void;
}

const SIZES = ["XS", "S", "M", "L", "XL"];

export function SizeSelectionModal({
  isOpen,
  onClose,
  product,
  onConfirm,
}: SizeSelectionModalProps) {
  const [selectedSize, setSelectedSize] = useState<string>("M");

  const handleConfirm = () => {
    onConfirm(selectedSize);
    onClose();
    // Reset to default for next time
    setSelectedSize("M");
  };

  if (!product) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 bg-black/50 z-50"
            onClick={onClose}
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.2 }}
            className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[480px] bg-white z-50 shadow-[0px_10px_15px_-3px_rgba(0,0,0,0.1),0px_4px_6px_-4px_rgba(0,0,0,0.1)] mx-4"
          >
            {/* Header */}
            <div className="border-b border-[rgba(0,0,0,0.1)] px-6 py-4 flex items-start justify-between">
              <div className="flex-1">
                <h2 className="tracking-[-0.48px] text-[16px] mb-1">
                  Select Size
                </h2>
                <p className="text-[#717182] text-[14px] tracking-[-0.48px]">
                  Choose your size for {product.name}
                </p>
              </div>
              <button
                onClick={onClose}
                className="size-8 flex items-center justify-center -mr-2"
                aria-label="Close modal"
              >
                <X className="size-4" />
              </button>
            </div>

            {/* Content */}
            <div className="px-6 py-6">
              {/* Product Preview */}
              <div className="flex gap-4 mb-6">
                <div className="bg-[#ececf0] rounded size-20 shrink-0 overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-[16px] tracking-[-0.48px] mb-1">
                    {product.name}
                  </h3>
                  <p className="text-[#717182] text-[14px] tracking-[-0.48px] mb-2">
                    {product.category}
                  </p>
                  <p className="text-[16px] tracking-[-0.48px]">
                    ${product.price.toFixed(2)}
                  </p>
                </div>
              </div>

              {/* Size Selection */}
              <div className="mb-6">
                <label className="block text-[14px] tracking-[-0.48px] mb-3">
                  Size
                </label>
                <div className="grid grid-cols-5 gap-2">
                  {SIZES.map((size) => (
                    <button
                      key={size}
                      onClick={() => setSelectedSize(size)}
                      className={`h-12 border transition-colors tracking-[-0.48px] text-[14px] ${
                        selectedSize === size
                          ? "border-neutral-950 bg-neutral-950 text-white"
                          : "border-[rgba(0,0,0,0.1)] bg-white text-neutral-950 hover:border-neutral-950"
                      }`}
                    >
                      {size}
                    </button>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div className="flex gap-3">
                <button
                  onClick={onClose}
                  className="flex-1 h-10 border border-[rgba(0,0,0,0.1)] bg-white text-neutral-950 tracking-[-0.48px] text-[14px] hover:bg-[#f3f3f5] transition-colors"
                >
                  Cancel
                </button>
                <button
                  onClick={handleConfirm}
                  className="flex-1 h-10 bg-neutral-950 text-white tracking-[-0.48px] text-[14px] hover:bg-neutral-800 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
