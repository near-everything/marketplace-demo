import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { Product } from "../data/products";
import svgPaths from "../imports/svg-jhz5c8sxrh";

interface CheckoutPageProps {
  cartItems: { [productId: number]: { quantity: number; size: string } };
  products: Product[];
  onBack: () => void;
  onPaymentSelect: (method: "near" | "stripe") => void;
}

export function CheckoutPage({ cartItems, products, onBack, onPaymentSelect }: CheckoutPageProps) {
  const [discountCode, setDiscountCode] = useState("");
  const [selectedPaymentMethod, setSelectedPaymentMethod] = useState<"near" | "stripe" | null>(null);

  // Calculate totals
  const cartProducts = Object.entries(cartItems).map(([id, item]) => ({
    product: products.find((p) => p.id === Number(id))!,
    ...item,
  }));

  const subtotal = cartProducts.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const shipping = 0; // Free shipping
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + shipping + tax;
  
  // Mock NEAR conversion rate (1 NEAR = $3.50)
  const nearAmount = (total / 3.5).toFixed(2);

  const handlePaymentClick = (method: "near" | "stripe") => {
    setSelectedPaymentMethod(method);
    onPaymentSelect(method);
  };

  return (
    <div className="bg-white min-h-screen">
      {/* Header with Back Button */}
      <div className="border-b border-[rgba(0,0,0,0.1)]">
        <div className="max-w-[1408px] mx-auto px-4 md:px-8 lg:px-16 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-3 hover:opacity-70 transition-opacity"
          >
            <ChevronLeft className="size-4" />
            <span className="text-sm">Back to Cart</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[1408px] mx-auto px-4 md:px-8 lg:px-16 py-8">
        <h1 className="text-[32px] mb-8">Checkout</h1>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Order Summary */}
          <div className="border border-[rgba(0,0,0,0.1)] p-8">
            {/* Order Summary */}
            <div className="mb-6">
              <h2 className="text-base mb-6">Order Summary</h2>

              {/* Cart Items */}
              <div className="space-y-4">
                {cartProducts.map((item) => (
                  <div key={item.product.id} className="flex gap-4">
                    <div className="size-20 bg-[#ececf0] border border-[rgba(0,0,0,0.1)] flex-shrink-0 overflow-hidden">
                      <img
                        src={item.product.image}
                        alt={item.product.name}
                        className="size-full object-cover"
                      />
                    </div>
                    <div className="flex-1">
                      <p className="text-base mb-1">{item.product.name}</p>
                      <p className="text-sm text-[#717182]">
                        {item.size !== "N/A" && `Size: ${item.size} • `}Qty: {item.quantity}
                      </p>
                    </div>
                    <div className="text-base text-right">
                      ${(item.product.price * item.quantity).toFixed(2)}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-[rgba(0,0,0,0.1)] my-6" />

            {/* Price Breakdown */}
            <div className="space-y-3 mb-6">
              <div className="flex justify-between text-sm">
                <span className="text-[#717182]">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#717182]">Shipping</span>
                <span>Free</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-[#717182]">Tax</span>
                <span>${tax.toFixed(2)}</span>
              </div>
            </div>

            {/* Divider */}
            <div className="h-px bg-[rgba(0,0,0,0.1)] mb-3" />

            {/* Total */}
            <div className="flex justify-between items-start">
              <span className="text-base">Total</span>
              <div className="text-right">
                <p className="text-base">${total.toFixed(2)}</p>
                <p className="text-sm text-[#717182]">{nearAmount} NEAR</p>
              </div>
            </div>

            {/* Discount Code */}
            <div className="mt-6 bg-[#f6f6f6] border border-[rgba(0,0,0,0.1)] p-4 flex items-center justify-between gap-4">
              <span className="text-sm">Apply Discount Code</span>
              <input
                type="text"
                placeholder="Enter Code"
                value={discountCode}
                onChange={(e) => setDiscountCode(e.target.value)}
                className="bg-white border border-[#dddddd] px-4 py-2 text-sm text-[#717182] placeholder:text-[#717182] outline-none focus:border-neutral-950 transition-colors w-60"
              />
            </div>
          </div>

          {/* Right Side - Payment Methods */}
          <div>
            <h2 className="text-base mb-6">Choose Payment Method</h2>

            <div className="space-y-6">
              {/* Pay with NEAR */}
              <div
                className="w-full border border-neutral-200 p-6 text-left relative opacity-50 cursor-not-allowed"
              >
                <div className="flex items-start gap-3">
                  {/* NEAR Icon */}
                  <div className="size-10 bg-[#00ec97] flex items-center justify-center flex-shrink-0">
                    <svg className="size-6" fill="none" viewBox="0 0 24 24">
                      <path
                        d={svgPaths.p3d12d900}
                        fill="black"
                      />
                    </svg>
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <p className="text-base">Pay with NEAR</p>
                      <span className="bg-neutral-950 text-white text-[10px] px-2 py-0.5 uppercase tracking-wider">
                        COMING SOON
                      </span>
                    </div>
                    <p className="text-xs text-[rgba(0,0,0,0.7)]">Recommended</p>
                  </div>
                </div>

                <p className="text-sm text-[rgba(0,0,0,0.8)] mt-4">
                  Instant checkout with your NEAR wallet
                </p>
              </div>

              {/* Pay with Stripe */}
              <button
                onClick={() => handlePaymentClick("stripe")}
                className={`w-full border p-6 hover:border-neutral-950 transition-colors text-left ${
                  selectedPaymentMethod === "stripe" ? "border-neutral-950" : "border-[rgba(0,0,0,0.1)]"
                }`}
              >
                <div className="flex items-start gap-3">
                  {/* Card Icon */}
                  <div className="size-10 bg-[#d6d3ff] flex items-center justify-center flex-shrink-0">
                    <svg className="size-6" fill="none" viewBox="0 0 24 24">
                      <rect fill="#8A85FA" height="6" rx="1" width="22" x="1" y="4" />
                      <path
                        d={svgPaths.p197f6980}
                        stroke="#635BFF"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </div>

                  {/* Text */}
                  <div className="flex-1">
                    <p className="text-base mb-1">Pay with Card</p>
                    
                    {/* Powered by Stripe */}
                    <div className="flex items-center gap-1 text-xs text-[#635bff]">
                      <span>Powered by</span>
                      <svg className="h-4 w-8" fill="none" viewBox="0 0 33 14">
                        <path
                          clipRule="evenodd"
                          d={svgPaths.p3aae5770}
                          fill="#635BFF"
                          fillRule="evenodd"
                        />
                      </svg>
                    </div>
                  </div>
                </div>

                <p className="text-sm text-[#717182] mt-4">
                  Traditional checkout with credit card
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}