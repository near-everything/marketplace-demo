import { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { Product } from "../data/products";

interface StripeCheckoutPageProps {
  cartItems: { [productId: number]: { quantity: number; size: string } };
  products: Product[];
  onBack: () => void;
  onPaymentComplete: (orderNumber: string) => void;
}

export function StripeCheckoutPage({
  cartItems,
  products,
  onBack,
  onPaymentComplete,
}: StripeCheckoutPageProps) {
  const [isProcessing, setIsProcessing] = useState(false);
  const [email, setEmail] = useState("");
  const [fullName, setFullName] = useState("");
  const [country, setCountry] = useState("Italy");
  const [address, setAddress] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expiry, setExpiry] = useState("");
  const [cvc, setCvc] = useState("");
  const [phone, setPhone] = useState("");
  const [billingInfoSame, setBillingInfoSame] = useState(true);
  const [saveInfo, setSaveInfo] = useState(false);

  // Calculate totals
  const cartProducts = Object.entries(cartItems).map(([id, item]) => ({
    product: products.find((p) => p.id === Number(id))!,
    ...item,
  }));

  const subtotal = cartProducts.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const total = subtotal; // Free shipping, no tax for demo

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    // Simulate payment processing
    setTimeout(() => {
      // Generate order number
      const orderNumber = `NEAR-${Math.random().toString(36).substr(2, 7).toUpperCase()}-${Math.random().toString(36).substr(2, 8).toUpperCase()}`;
      onPaymentComplete(orderNumber);
    }, 2000);
  };

  return (
    <div className="bg-white min-h-screen font-['Roboto',sans-serif]">
      {/* Header */}
      <div className="border-b border-[rgba(0,0,0,0.1)]">
        <div className="max-w-[800px] mx-auto px-8 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-2 hover:opacity-70 transition-opacity font-['Roboto',sans-serif]"
          >
            <ChevronLeft className="size-4" />
            <span className="text-sm">Back</span>
          </button>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-[800px] mx-auto px-8 py-8 font-['Roboto',sans-serif]">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Left Side - Order Summary */}
          <div>
            <h2 className="text-sm mb-4 text-[#717182]">Choose a currency:</h2>
            <div className="flex gap-2 mb-4">
              <button className="flex items-center gap-2 border border-neutral-950 px-4 py-2 text-sm">
                <span>🇪🇺</span>
                <span>€{total.toFixed(2)}</span>
              </button>
              <button className="flex items-center gap-2 border border-[#dddddd] px-4 py-2 text-sm text-[#717182]">
                <span>🇺🇸</span>
                <span>${total.toFixed(2)}</span>
              </button>
            </div>
            <p className="text-xs text-[#717182] mb-6">1 EUR = 0.0030 EUR</p>

            {/* Product List */}
            <div className="space-y-4">
              {cartProducts.map((item) => (
                <div key={item.product.id} className="flex gap-3">
                  <div className="size-12 bg-[#ececf0] flex-shrink-0 overflow-hidden">
                    <img
                      src={item.product.image}
                      alt={item.product.name}
                      className="size-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm">{item.product.name}</p>
                    <p className="text-xs text-[#717182]">
                      {item.size !== "N/A" && `Size: ${item.size} • `}Qty: {item.quantity}
                    </p>
                  </div>
                  <div className="text-sm">€{(item.product.price * item.quantity).toFixed(2)}</div>
                </div>
              ))}
            </div>

            {/* Price Summary */}
            <div className="mt-6 pt-4 border-t border-[rgba(0,0,0,0.1)]">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-[#717182]">Subtotal</span>
                <span>€{subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-[#717182]">Shipping</span>
                <span>Free</span>
              </div>
              <div className="text-xs text-[#717182] mb-4">Free shipping (5-15 business days)</div>
              <div className="flex justify-between font-medium pt-2 border-t border-[rgba(0,0,0,0.1)]">
                <span>Total due</span>
                <span>€{total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          {/* Right Side - Payment Form */}
          <div>
            {/* Pay with Link Button */}
            <button className="w-full bg-[#00D66F] text-black py-3 mb-4 text-sm font-medium hover:bg-[#00C263] transition-colors flex items-center justify-center gap-2">
              Pay with <span className="font-bold">Link</span>
            </button>

            <div className="text-center text-xs text-[#717182] mb-6">OR</div>

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Shipping Information */}
              <div>
                <h3 className="text-sm mb-3">Shipping information</h3>
                
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs text-[#717182] mb-1">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="davis@demo.everything"
                      className="w-full border border-[#dddddd] px-3 py-2 text-sm outline-none focus:border-[#635BFF] transition-colors"
                      required
                    />
                  </div>

                  <div>
                    <label className="block text-xs text-[#717182] mb-1">Shipping address</label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      placeholder="Full name"
                      className="w-full border border-[#dddddd] px-3 py-2 text-sm outline-none focus:border-[#635BFF] transition-colors mb-2"
                      required
                    />
                    
                    <select
                      value={country}
                      onChange={(e) => setCountry(e.target.value)}
                      className="w-full border border-[#dddddd] px-3 py-2 text-sm outline-none focus:border-[#635BFF] transition-colors mb-2"
                    >
                      <option>Italy</option>
                      <option>United States</option>
                      <option>United Kingdom</option>
                      <option>Germany</option>
                      <option>France</option>
                    </select>

                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Address"
                      className="w-full border border-[#dddddd] px-3 py-2 text-sm outline-none focus:border-[#635BFF] transition-colors mb-1"
                      required
                    />
                    <button type="button" className="text-xs text-[#635BFF] hover:underline">
                      Enter address manually
                    </button>
                  </div>
                </div>
              </div>

              {/* Payment Method */}
              <div>
                <h3 className="text-sm mb-3">Payment method</h3>
                
                <div>
                  <label className="block text-xs text-[#717182] mb-1">Card information</label>
                  <div className="border border-[#dddddd] focus-within:border-[#635BFF] transition-colors">
                    <div className="relative border-b border-[#dddddd] p-3">
                      <input
                        type="text"
                        value={cardNumber}
                        onChange={(e) => setCardNumber(e.target.value)}
                        placeholder="1234 1234 1234 1234"
                        maxLength={19}
                        className="w-full text-sm outline-none pr-20"
                        required
                      />
                      <div className="absolute right-3 top-1/2 -translate-y-1/2 flex gap-1">
                        <div className="size-6 bg-[#EB001B] rounded-sm" />
                        <div className="size-6 bg-[#F79E1B] rounded-sm" />
                        <div className="size-6 bg-[#007BC1] rounded-sm" />
                      </div>
                    </div>
                    <div className="flex">
                      <input
                        type="text"
                        value={expiry}
                        onChange={(e) => setExpiry(e.target.value)}
                        placeholder="MM / YY"
                        maxLength={7}
                        className="flex-1 p-3 text-sm outline-none border-r border-[#dddddd]"
                        required
                      />
                      <input
                        type="text"
                        value={cvc}
                        onChange={(e) => setCvc(e.target.value)}
                        placeholder="CVC"
                        maxLength={4}
                        className="w-20 p-3 text-sm outline-none"
                        required
                      />
                    </div>
                  </div>

                  <label className="flex items-start gap-2 mt-3">
                    <input
                      type="checkbox"
                      checked={billingInfoSame}
                      onChange={(e) => setBillingInfoSame(e.target.checked)}
                      className="mt-0.5"
                    />
                    <span className="text-xs text-[#717182]">Billing info is same as shipping</span>
                  </label>

                  <label className="flex items-start gap-2 mt-2">
                    <input
                      type="checkbox"
                      checked={saveInfo}
                      onChange={(e) => setSaveInfo(e.target.checked)}
                      className="mt-0.5"
                    />
                    <span className="text-xs">
                      <span className="text-neutral-950">Save my information for faster checkout</span>
                      <br />
                      <span className="text-[#717182]">Pay securely on this site and everywhere Link is accepted.</span>
                    </span>
                  </label>

                  <div className="mt-3">
                    <input
                      type="tel"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="(201) 555-0123"
                      className="w-full border border-[#dddddd] px-3 py-2 text-sm outline-none focus:border-[#635BFF] transition-colors"
                    />
                  </div>
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-[#635BFF] text-white py-3 text-sm font-medium hover:bg-[#5850EC] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {isProcessing ? "Processing..." : "Pay"}
              </button>

              <p className="text-xs text-center text-[#717182]">
                By paying, you agree to Link's Terms and Privacy.
              </p>

              <div className="flex items-center justify-center gap-2 text-xs text-[#717182]">
                <span>Powered by</span>
                <span className="text-[#635BFF] font-semibold">stripe</span>
                <span>•</span>
                <button type="button" className="hover:underline">Terms</button>
                <span>•</span>
                <button type="button" className="hover:underline">Privacy</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}