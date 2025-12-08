export function Footer() {
  return (
    <footer className="bg-white border-t border-[rgba(0,0,0,0.1)] py-12" id="about">
      <div className="max-w-[1408px] mx-auto px-4 md:px-8 lg:px-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* About */}
          <div>
            <h4 className="text-neutral-950 mb-4">NEAR Protocol</h4>
            <p className="text-sm text-[#717182] leading-relaxed">
              Building the future of blockchain technology, one block at a time.
            </p>
          </div>

          {/* Shop */}
          <div>
            <h4 className="text-neutral-950 mb-4">Shop</h4>
            <ul className="space-y-2">
              <li>
                <a href="#products" className="text-sm text-[#717182] hover:text-neutral-950 transition-colors">
                  All Products
                </a>
              </li>
              <li>
                <a href="#collections" className="text-sm text-[#717182] hover:text-neutral-950 transition-colors">
                  Collections
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="text-neutral-950 mb-4">Support</h4>
            <ul className="space-y-2">
              <li>
                <a href="#faq" className="text-sm text-[#717182] hover:text-neutral-950 transition-colors">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#shipping" className="text-sm text-[#717182] hover:text-neutral-950 transition-colors">
                  Shipping
                </a>
              </li>
              <li>
                <a href="#returns" className="text-sm text-[#717182] hover:text-neutral-950 transition-colors">
                  Returns
                </a>
              </li>
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h4 className="text-neutral-950 mb-4">Connect</h4>
            <ul className="space-y-2">
              <li>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[#717182] hover:text-neutral-950 transition-colors">
                  Twitter
                </a>
              </li>
              <li>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[#717182] hover:text-neutral-950 transition-colors">
                  GitHub
                </a>
              </li>
              <li>
                <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-sm text-[#717182] hover:text-neutral-950 transition-colors">
                  Discord
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-[rgba(0,0,0,0.1)]">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-[#717182]">
              © 2024 NEAR Protocol. All rights reserved.
            </p>
            <div className="flex gap-6">
              <a href="#privacy" className="text-sm text-[#717182] hover:text-neutral-950 transition-colors">
                Privacy Policy
              </a>
              <a href="#terms" className="text-sm text-[#717182] hover:text-neutral-950 transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}