import svgPaths from "../imports/svg-ltzoq7tm61";
import imgImageWithFallback from "figma:asset/8b83c6986dd3ffd55dc4f73c18f55e152452f668.png";
import imgImageWithFallback1 from "figma:asset/fd32da6d955919681e059a5194a228ec74fb5883.png";
import imgImageWithFallback2 from "figma:asset/1abbf3e6f5926f53e873d365dc5909350868bab2.png";
import imgImageWithFallback3 from "figma:asset/752ea4da164bcbcb76b2a46abbe7f5eecbe4a267.png";

interface CollectionsPageProps {
  onExploreCollection: (collection: string) => void;
  onViewAllProducts: () => void;
  onNavigateToDetail: (collection: "Men" | "Women" | "Exclusives" | "Accessories") => void;
}

export function CollectionsPage({ onExploreCollection, onViewAllProducts, onNavigateToDetail }: CollectionsPageProps) {
  return (
    <div className="bg-white w-full">
      {/* Hero Section */}
      <div className="bg-[rgba(236,236,240,0.3)] border-b border-[rgba(0,0,0,0.1)] py-24">
        <div className="max-w-[1408px] mx-auto px-4 md:px-8 lg:px-16">
          <div className="text-center space-y-6">
            <h1 className="tracking-[-0.48px]">Our Collections</h1>
            <p className="text-[#717182] text-[18px] leading-[28px] tracking-[-0.48px] max-w-[723px] mx-auto">
              Discover premium NEAR Protocol merchandise across four curated collections. Each piece is designed with quality and sustainability in mind.
            </p>
          </div>
        </div>
      </div>

      {/* Collections Grid */}
      <div className="max-w-[1408px] mx-auto px-4 md:px-8 lg:px-16 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Men's Collection */}
          <div 
            className="border border-[rgba(0,0,0,0.1)] overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => onNavigateToDetail("Men")}
          >
            <div className="bg-[#ececf0] h-[400px] md:h-[517.5px] overflow-hidden">
              <img 
                alt="Men's Collection" 
                className="w-full h-full object-cover" 
                src={imgImageWithFallback} 
              />
            </div>
            <div className="border-t border-[rgba(0,0,0,0.1)] p-6 space-y-3">
              <h3 className="tracking-[-0.48px]">Men's Collection</h3>
              <p className="text-[#717182] tracking-[-0.48px] leading-[24px]">
                Premium fits designed specifically for men. Classic essentials to modern oversized styles.
              </p>
              <div className="flex items-center justify-between">
                <p className="text-[#717182] text-[14px] tracking-[-0.48px]">4 products</p>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onNavigateToDetail("Men");
                  }}
                  className="px-3 py-2 hover:bg-gray-100 transition-colors tracking-[-0.48px]"
                >
                  Explore
                </button>
              </div>
            </div>
          </div>

          {/* Women's Collection */}
          <div 
            className="border border-[rgba(0,0,0,0.1)] overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => onNavigateToDetail("Women")}
          >
            <div className="bg-[#ececf0] h-[400px] md:h-[517.5px] overflow-hidden">
              <img 
                alt="Women's Collection" 
                className="w-full h-full object-cover" 
                src={imgImageWithFallback1} 
              />
            </div>
            <div className="border-t border-[rgba(0,0,0,0.1)] p-6 space-y-3">
              <h3 className="tracking-[-0.48px]">Women's Collection</h3>
              <p className="text-[#717182] tracking-[-0.48px] leading-[24px]">
                Tailored fits designed for women. Comfortable, stylish, and sustainably made.
              </p>
              <div className="flex items-center justify-between">
                <p className="text-[#717182] text-[14px] tracking-[-0.48px]">4 products</p>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onNavigateToDetail("Women");
                  }}
                  className="px-3 py-2 hover:bg-gray-100 transition-colors tracking-[-0.48px]"
                >
                  Explore
                </button>
              </div>
            </div>
          </div>

          {/* NEAR Legion Collection */}
          <div 
            className="border border-[rgba(0,0,0,0.1)] overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => onNavigateToDetail("Exclusives")}
          >
            <div className="bg-[#ececf0] h-[400px] md:h-[517.5px] overflow-hidden">
              <img 
                alt="NEAR Legion Collection" 
                className="w-full h-full object-cover" 
                src={imgImageWithFallback2} 
              />
            </div>
            <div className="border-t border-[rgba(0,0,0,0.1)] p-6 space-y-3">
              <div className="flex items-center gap-2">
                <h3 className="tracking-[-0.48px]">NEAR Legion Collection</h3>
                <span className="border border-neutral-950 px-2 py-0.5 text-[12px] tracking-[-0.48px]">
                  Limited
                </span>
              </div>
              <p className="text-[#717182] tracking-[-0.48px] leading-[24px]">
                Limited edition designs created in collaboration with artists. Once they're gone, they're gone.
              </p>
              <div className="flex items-center justify-between">
                <p className="text-[#717182] text-[14px] tracking-[-0.48px]">3 products</p>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onNavigateToDetail("Exclusives");
                  }}
                  className="px-3 py-2 hover:bg-gray-100 transition-colors tracking-[-0.48px]"
                >
                  Explore
                </button>
              </div>
            </div>
          </div>

          {/* Accessories Collection */}
          <div 
            className="border border-[rgba(0,0,0,0.1)] overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
            onClick={() => onNavigateToDetail("Accessories")}
          >
            <div className="bg-[#ececf0] h-[400px] md:h-[517.5px] overflow-hidden">
              <img 
                alt="Accessories" 
                className="w-full h-full object-cover" 
                src={imgImageWithFallback3} 
              />
            </div>
            <div className="border-t border-[rgba(0,0,0,0.1)] p-6 space-y-3">
              <h3 className="tracking-[-0.48px]">Accessories</h3>
              <p className="text-[#717182] tracking-[-0.48px] leading-[24px]">
                Complete your look with our curated selection. From everyday essentials to statement pieces.
              </p>
              <div className="flex items-center justify-between">
                <p className="text-[#717182] text-[14px] tracking-[-0.48px]">7 products</p>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onNavigateToDetail("Accessories");
                  }}
                  className="px-3 py-2 hover:bg-gray-100 transition-colors tracking-[-0.48px]"
                >
                  Explore
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-[rgba(236,236,240,0.3)] border-t border-[rgba(0,0,0,0.1)] py-16">
        <div className="max-w-[672px] mx-auto px-4 text-center space-y-10">
          <div className="space-y-4">
            <h2 className="tracking-[-0.48px]">Can't decide?</h2>
            <p className="text-[#717182] tracking-[-0.48px]">
              Browse our entire collection and find the perfect piece for you.
            </p>
          </div>
          <button 
            onClick={onViewAllProducts}
            className="bg-white border border-[rgba(0,0,0,0.1)] px-6 py-2.5 hover:bg-gray-50 transition-colors tracking-[-0.48px]"
          >
            View All Products
          </button>
        </div>
      </div>
    </div>
  );
}