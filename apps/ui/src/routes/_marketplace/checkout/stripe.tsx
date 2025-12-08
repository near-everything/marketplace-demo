import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import { ChevronLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useCart } from '@/hooks/use-cart';

export const Route = createFileRoute('/_marketplace/checkout/stripe')({
  component: StripeCheckoutPage,
});

function StripeCheckoutPage() {
  const navigate = useNavigate();
  const { cartItems, subtotal, clearCart } = useCart();
  const [isProcessing, setIsProcessing] = useState(false);
  const [email, setEmail] = useState('');
  const [fullName, setFullName] = useState('');
  const [country, setCountry] = useState('United States');
  const [address, setAddress] = useState('');
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [billingInfoSame, setBillingInfoSame] = useState(true);

  const total = subtotal;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsProcessing(true);

    setTimeout(() => {
      const orderNumber = `NEAR-${Math.random().toString(36).substr(2, 7).toUpperCase()}-${Math.random().toString(36).substr(2, 8).toUpperCase()}`;
      clearCart();
      navigate({
        to: '/order-confirmation',
        search: { orderNumber, email: email || 'customer@example.com' },
      });
    }, 2000);
  };

  if (cartItems.length === 0) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-medium mb-4">Your cart is empty</h1>
          <Link to="/" className="text-[#00ec97] hover:underline">
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen font-sans">
      <div className="border-b border-[rgba(0,0,0,0.1)]">
        <div className="max-w-[800px] mx-auto px-8 py-4">
          <Link
            to="/checkout"
            className="flex items-center gap-2 hover:opacity-70 transition-opacity"
          >
            <ChevronLeft className="size-4" />
            <span className="text-sm">Back</span>
          </Link>
        </div>
      </div>

      <div className="max-w-[800px] mx-auto px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <div className="space-y-4">
              {cartItems.map((item) => (
                <div key={item.productId} className="flex gap-3">
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
                      {item.size !== 'N/A' && `Size: ${item.size} • `}Qty: {item.quantity}
                    </p>
                  </div>
                  <div className="text-sm">${(item.product.price * item.quantity).toFixed(2)}</div>
                </div>
              ))}
            </div>

            <div className="mt-6 pt-4 border-t border-[rgba(0,0,0,0.1)]">
              <div className="flex justify-between text-sm mb-2">
                <span className="text-[#717182]">Subtotal</span>
                <span>${subtotal.toFixed(2)}</span>
              </div>
              <div className="flex justify-between text-sm mb-2">
                <span className="text-[#717182]">Shipping</span>
                <span>Free</span>
              </div>
              <div className="text-xs text-[#717182] mb-4">Free shipping (5-15 business days)</div>
              <div className="flex justify-between font-medium pt-2 border-t border-[rgba(0,0,0,0.1)]">
                <span>Total due</span>
                <span>${total.toFixed(2)}</span>
              </div>
            </div>
          </div>

          <div>
            <button className="w-full bg-[#00D66F] text-black py-3 mb-4 text-sm font-medium hover:bg-[#00C263] transition-colors flex items-center justify-center gap-2">
              Pay with <span className="font-bold">Link</span>
            </button>

            <div className="text-center text-xs text-[#717182] mb-6">OR</div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h3 className="text-sm font-medium mb-3">Shipping information</h3>
                
                <div className="space-y-3">
                  <div>
                    <label className="block text-xs text-[#717182] mb-1">Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="your@email.com"
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
                      <option>United States</option>
                      <option>United Kingdom</option>
                      <option>Germany</option>
                      <option>France</option>
                      <option>Italy</option>
                    </select>

                    <input
                      type="text"
                      value={address}
                      onChange={(e) => setAddress(e.target.value)}
                      placeholder="Address"
                      className="w-full border border-[#dddddd] px-3 py-2 text-sm outline-none focus:border-[#635BFF] transition-colors"
                      required
                    />
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-sm font-medium mb-3">Payment method</h3>
                
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
                        <div className="size-6 bg-[#1A1F71] rounded-sm" />
                        <div className="size-6 bg-[#FF5F00] rounded-sm" />
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
                </div>
              </div>

              <Button
                type="submit"
                disabled={isProcessing}
                className="w-full bg-[#635BFF] hover:bg-[#5850EC] disabled:opacity-50"
              >
                {isProcessing ? 'Processing...' : 'Pay'}
              </Button>

              <p className="text-xs text-center text-[#717182]">
                By paying, you agree to our Terms and Privacy Policy.
              </p>

              <div className="flex items-center justify-center gap-2 text-xs text-[#717182]">
                <span>Powered by</span>
                <span className="text-[#635BFF] font-semibold">stripe</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
