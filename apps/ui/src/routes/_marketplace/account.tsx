import { createFileRoute, Link, useNavigate } from '@tanstack/react-router';
import { useState } from 'react';
import { Package, Clock, MapPin, CreditCard, Link2, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Route = createFileRoute('/_marketplace/account')({
  component: MyAccountPage,
});

type Section = 'orders' | 'history' | 'addresses' | 'payment' | 'accounts';

function MyAccountPage() {
  const navigate = useNavigate();
  const [activeSection, setActiveSection] = useState<Section>('orders');
  const userEmail = 'user@example.com';

  const handleSignOut = () => {
    navigate({ to: '/' });
  };

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-[1408px] mx-auto px-4 md:px-8 lg:px-16 py-8">
        <Link
          to="/"
          className="text-sm hover:underline mb-8 inline-block"
        >
          ← Back to Store
        </Link>

        <div className="flex items-start justify-between mb-12">
          <div>
            <h1 className="text-2xl font-medium mb-2">My Account</h1>
            <div className="flex items-center gap-2 text-[#717182] text-sm">
              <svg className="size-4" fill="none" stroke="currentColor" viewBox="0 0 16 16">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.33" d="M13.333 14v-1.333A2.667 2.667 0 0010.666 10H5.333a2.667 2.667 0 00-2.666 2.667V14M8 7.333A2.667 2.667 0 108 2a2.667 2.667 0 000 5.333z" />
              </svg>
              <span>{userEmail}</span>
            </div>
          </div>
          <Button
            variant="outline"
            onClick={handleSignOut}
            className="border-[rgba(0,0,0,0.1)]"
          >
            Sign Out
          </Button>
        </div>

        <div className="grid lg:grid-cols-[280px_1fr] gap-8">
          <div className="space-y-1">
            <button
              onClick={() => setActiveSection('orders')}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                activeSection === 'orders' ? 'bg-[#ececf0]' : 'hover:bg-gray-50'
              }`}
            >
              <Package className="size-4" />
              <span className="flex-1 text-sm">Orders in Progress</span>
              <span className="text-xs text-[#717182]">2</span>
              <ChevronRight className="size-4" />
            </button>

            <button
              onClick={() => setActiveSection('history')}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                activeSection === 'history' ? 'bg-[#ececf0]' : 'hover:bg-gray-50'
              }`}
            >
              <Clock className="size-4" />
              <span className="flex-1 text-sm">Order History</span>
              <span className="text-xs text-[#717182]">1</span>
              <ChevronRight className="size-4" />
            </button>

            <button
              onClick={() => setActiveSection('addresses')}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                activeSection === 'addresses' ? 'bg-[#ececf0]' : 'hover:bg-gray-50'
              }`}
            >
              <MapPin className="size-4" />
              <span className="flex-1 text-sm">Shipping Addresses</span>
              <span className="text-xs text-[#717182]">2</span>
              <ChevronRight className="size-4" />
            </button>

            <button
              onClick={() => setActiveSection('payment')}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                activeSection === 'payment' ? 'bg-[#ececf0]' : 'hover:bg-gray-50'
              }`}
            >
              <CreditCard className="size-4" />
              <span className="flex-1 text-sm">Payment Methods</span>
              <span className="text-xs text-[#717182]">2</span>
              <ChevronRight className="size-4" />
            </button>

            <button
              onClick={() => setActiveSection('accounts')}
              className={`w-full flex items-center gap-3 px-4 py-3 text-left transition-colors ${
                activeSection === 'accounts' ? 'bg-[#ececf0]' : 'hover:bg-gray-50'
              }`}
            >
              <Link2 className="size-4" />
              <span className="flex-1 text-sm">Connected Accounts</span>
              <span className="text-xs text-[#717182]">1</span>
              <ChevronRight className="size-4" />
            </button>
          </div>

          <div>
            {activeSection === 'orders' && <OrdersInProgress />}
            {activeSection === 'history' && <OrderHistory />}
            {activeSection === 'addresses' && <ShippingAddresses />}
            {activeSection === 'payment' && <PaymentMethods />}
            {activeSection === 'accounts' && <ConnectedAccounts />}
          </div>
        </div>
      </div>
    </div>
  );
}

function OrdersInProgress() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-medium">Orders in Progress</h2>
        <span className="text-sm text-[#717182]">2 orders</span>
      </div>

      <div className="bg-white border border-[rgba(0,0,0,0.1)] p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="font-medium">ORD-2024-002</h3>
              <span className="bg-white border border-[rgba(0,0,0,0.1)] px-2 py-0.5 text-xs">Shipped</span>
            </div>
            <p className="text-sm text-[#717182] mb-1">Ordered on October 8, 2024</p>
            <p className="text-sm text-[#717182]">Tracking: TRK987654321</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-[#717182] mb-1">Total</p>
            <p className="font-medium">$89.97</p>
          </div>
        </div>
        <Button variant="outline" className="w-full border-[rgba(0,0,0,0.1)]">
          Track Package
        </Button>
      </div>

      <div className="bg-white border border-[rgba(0,0,0,0.1)] p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="font-medium">ORD-2024-003</h3>
              <span className="bg-[#eceef2] px-2 py-0.5 text-xs">Processing</span>
            </div>
            <p className="text-sm text-[#717182]">Ordered on October 9, 2024</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-[#717182] mb-1">Total</p>
            <p className="font-medium">$24.99</p>
          </div>
        </div>
      </div>
    </div>
  );
}

function OrderHistory() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-medium">Order History</h2>
        <span className="text-sm text-[#717182]">1 order</span>
      </div>

      <div className="bg-white border border-[rgba(0,0,0,0.1)] p-6">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <h3 className="font-medium">ORD-2024-001</h3>
              <span className="bg-[#00ec97] px-2 py-0.5 text-xs">Delivered</span>
            </div>
            <p className="text-sm text-[#717182] mb-1">Ordered on September 28, 2024</p>
            <p className="text-sm text-[#717182]">Delivered on October 3, 2024</p>
          </div>
          <div className="text-right">
            <p className="text-sm text-[#717182] mb-1">Total</p>
            <p className="font-medium">$34.99</p>
          </div>
        </div>
        <button className="text-sm text-[#717182] hover:text-neutral-950 underline">
          View Receipt
        </button>
      </div>
    </div>
  );
}

function ShippingAddresses() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-medium">Shipping Addresses</h2>
        <Button className="bg-[#00ec97] hover:bg-[#00d687] text-black">
          Add New Address
        </Button>
      </div>

      <div className="bg-white border border-[rgba(0,0,0,0.1)] p-6">
        <div className="mb-4">
          <div className="flex items-center gap-2 mb-2">
            <h3 className="font-medium">Home</h3>
            <span className="bg-[#00ec97] px-2 py-0.5 text-xs">Default</span>
          </div>
          <p className="text-sm mb-1">John Doe</p>
          <p className="text-sm text-[#717182]">123 Main St</p>
          <p className="text-sm text-[#717182]">San Francisco, CA 94105</p>
          <p className="text-sm text-[#717182]">United States</p>
          <p className="text-sm text-[#717182] mt-2">Phone: (415) 555-0123</p>
        </div>
        <div className="flex gap-2 border-t border-[rgba(0,0,0,0.1)] pt-4">
          <Button variant="outline" className="flex-1 border-[rgba(0,0,0,0.1)]">Edit</Button>
          <Button variant="outline" className="flex-1 border-[rgba(0,0,0,0.1)]">Remove</Button>
        </div>
      </div>

      <div className="bg-white border border-[rgba(0,0,0,0.1)] p-6">
        <div className="mb-4">
          <h3 className="font-medium mb-2">Work</h3>
          <p className="text-sm mb-1">John Doe</p>
          <p className="text-sm text-[#717182]">456 Market Street, Suite 200</p>
          <p className="text-sm text-[#717182]">San Francisco, CA 94102</p>
          <p className="text-sm text-[#717182]">United States</p>
          <p className="text-sm text-[#717182] mt-2">Phone: (415) 555-0124</p>
        </div>
        <div className="flex gap-2 border-t border-[rgba(0,0,0,0.1)] pt-4">
          <Button variant="outline" className="flex-1 border-[rgba(0,0,0,0.1)]">Edit</Button>
          <Button variant="outline" className="flex-1 border-[rgba(0,0,0,0.1)]">Set as Default</Button>
        </div>
      </div>
    </div>
  );
}

function PaymentMethods() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-medium">Payment Methods</h2>
        <Button className="bg-[#00ec97] hover:bg-[#00d687] text-black">
          Add Payment Method
        </Button>
      </div>

      <div className="bg-white border border-[rgba(0,0,0,0.1)] p-6">
        <div className="flex items-start gap-4 mb-4">
          <div className="bg-[#030213] size-12 flex items-center justify-center">
            <CreditCard className="size-6 text-white" />
          </div>
          <div>
            <div className="flex items-center gap-2 mb-1">
              <p className="font-medium">Visa ending in 4242</p>
              <span className="bg-[#00ec97] px-2 py-0.5 text-xs">Default</span>
            </div>
            <p className="text-sm text-[#717182]">Expires 12/2025</p>
            <p className="text-sm text-[#717182] mt-1">John Doe</p>
          </div>
        </div>
        <div className="flex gap-2 border-t border-[rgba(0,0,0,0.1)] pt-4">
          <Button variant="outline" className="flex-1 border-[rgba(0,0,0,0.1)]">Edit</Button>
          <Button variant="outline" className="flex-1 border-[rgba(0,0,0,0.1)]">Remove</Button>
        </div>
      </div>

      <div className="bg-[#ececf0] p-4">
        <p className="text-xs text-[#717182]">
          🔒 All payment information is encrypted and secure. We never store your full card details.
        </p>
      </div>
    </div>
  );
}

function ConnectedAccounts() {
  return (
    <div className="space-y-4">
      <div className="mb-6">
        <div className="flex items-start gap-3 mb-2">
          <Link2 className="size-5 mt-0.5" />
          <div>
            <h2 className="text-lg font-medium mb-1">Connected Accounts</h2>
            <p className="text-sm text-[#717182]">Manage your linked authentication providers</p>
          </div>
        </div>
      </div>

      <div className="border-t border-[rgba(0,0,0,0.1)] pt-4">
        <p className="text-sm text-[#717182] mb-4">Add New Account</p>

        <div className="bg-[#d4fced] border border-[#00ec97] mb-3 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-[#00ec97] size-10 flex items-center justify-center">
              <svg className="size-5" viewBox="0 0 24 24" fill="none">
                <path d="M12 2L2 7v10l10 5 10-5V7L12 2z" fill="black" />
              </svg>
            </div>
            <div>
              <p className="text-sm">NEAR Account</p>
              <p className="text-xs text-[#717182]">nearuser.near</p>
            </div>
          </div>
          <svg className="size-5 text-[#00ec97]" fill="none" stroke="currentColor" viewBox="0 0 20 20">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <div className="bg-white border border-[rgba(0,0,0,0.1)] mb-3 p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="size-10 flex items-center justify-center">
              <svg className="size-6" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
              </svg>
            </div>
            <p className="text-sm">Link Google Account</p>
          </div>
          <Button className="bg-[#030213] hover:bg-[#1a1a2e] text-white text-xs h-8 px-4">
            Connect
          </Button>
        </div>

        <div className="bg-white border border-[rgba(0,0,0,0.1)] p-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="bg-[#030213] size-10 flex items-center justify-center">
              <svg className="size-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 0C4.477 0 0 4.484 0 10.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0110 4.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.203 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0020 10.017C20 4.484 15.522 0 10 0z" clipRule="evenodd" />
              </svg>
            </div>
            <p className="text-sm">Link GitHub Account</p>
          </div>
          <Button className="bg-[#030213] hover:bg-[#1a1a2e] text-white text-xs h-8 px-4">
            Connect
          </Button>
        </div>
      </div>

      <div className="bg-[#ececf0] p-4 mt-6">
        <p className="text-xs text-[#717182]">
          💡 Connect multiple accounts for flexible sign-in options. You can disconnect at any time from this page.
        </p>
      </div>
    </div>
  );
}
