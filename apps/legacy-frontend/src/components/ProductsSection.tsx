import { useState } from "react";
import { Heart, Plus } from "lucide-react";
import imgProduct1 from "figma:asset/4fa8b39e9c2ac96748ac43f791167a77131c590e.png";
import imgProduct2 from "figma:asset/22e8cdddd9ab3900abde04f193e6b75a535503ff.png";
import imgProduct3 from "figma:asset/f088d7ec9f16661bc461a762417ac9e90242645d.png";
import imgProduct4 from "figma:asset/432e520b35ca5db7bb27272f597e5876cda9dd9a.png";
import imgProduct5 from "figma:asset/4bccc138d7d406e34e8558c132be301bebc7f3d7.png";
import imgProduct6 from "figma:asset/46ea705ffd78f4019918bb2fd2b66e6caa50008e.png";
import imgProduct8 from "figma:asset/c90671806a221dfe4f2cfa2c496b9afe21957596.png";
import imgProduct9 from "figma:asset/60aeb6e8fae869d59657e4792208dcffbd4ed8de.png";

const products = [
  { id: 1, category: "Men", name: "NEAR Protocol Hoodie", price: 65, image: imgProduct1 },
  { id: 2, category: "Women", name: "Classic NEAR Tee", price: 35, image: imgProduct2 },
  { id: 3, category: "Accessories", name: "NEAR Snapback Cap", price: 28, image: imgProduct3 },
  { id: 4, category: "Accessories", name: "Protocol Tote Bag", price: 22, image: imgProduct4 },
  { id: 5, category: "Accessories", name: "NEAR Coffee Mug", price: 18, image: imgProduct5 },
  { id: 6, category: "Exclusives", name: "Sticker Pack", price: 12, image: imgProduct6 },
  { id: 7, category: "Men", name: "Men's Essential Tee - Black", price: 32, image: "https://images.unsplash.com/photo-1667744565777-fa2eb22adeeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYW4lMjB3ZWFyaW5nJTIwYmxhY2slMjB0c2hpcnR8ZW58MXx8fHwxNzYzNjU1NDY1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" },
  { id: 8, category: "Men", name: "Men's Oversized Tee", price: 38, image: imgProduct8 },
  { id: 9, category: "Women", name: "Women's Crop Tee", price: 30, image: imgProduct9 },
];

interface ProductsSectionProps {
  favorites: number[];
  onToggleFavorite: (id: number) => void;
  onAddToCart: (id: number) => void;
  onNavigateToProduct?: (productId: number) => void;
}

export function ProductsSection({ favorites, onToggleFavorite, onAddToCart, onNavigateToProduct }: ProductsSectionProps) {
  const [activeFilter, setActiveFilter] = useState("All");
  
  const filters = ["All", "Men", "Women", "Exclusives", "Accessories"];
  
  const filteredProducts = activeFilter === "All" 
    ? products 
    : products.filter(p => p.category === activeFilter);

  return (
    <section className="py-16 md:py-20" id="products">
      <div className="max-w-[1408px] mx-auto px-4 md:px-8 lg:px-16">
        {/* Filter Buttons */}
        <div className="flex flex-wrap gap-2 justify-center mb-12">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-4 py-2 border transition-colors ${
                activeFilter === filter
                  ? "bg-neutral-950 text-white border-neutral-950"
                  : "bg-white text-neutral-950 border-[rgba(0,0,0,0.1)] hover:border-neutral-950"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProducts.map((product) => (
            <ProductCard
              key={product.id}
              {...product}
              isFavorite={favorites.includes(product.id)}
              onToggleFavorite={onToggleFavorite}
              onAddToCart={onAddToCart}
              onNavigateToProduct={onNavigateToProduct}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface ProductCardProps {
  id: number;
  category: string;
  name: string;
  price: number;
  image: string;
  isFavorite: boolean;
  onToggleFavorite: (id: number) => void;
  onAddToCart: (id: number) => void;
  onNavigateToProduct?: (productId: number) => void;
}

function ProductCard({ 
  id, 
  category, 
  name, 
  price, 
  image, 
  isFavorite, 
  onToggleFavorite,
  onAddToCart,
  onNavigateToProduct
}: ProductCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className="group bg-white border border-[rgba(0,0,0,0.1)] overflow-hidden cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => onNavigateToProduct?.(id)}
    >
      {/* Image Container */}
      <div className="relative bg-[#ececf0] aspect-square overflow-hidden">
        <img 
          src={image} 
          alt={name} 
          className="w-full h-full object-cover"
        />

        {/* Favorite Button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            onToggleFavorite(id);
          }}
          className="absolute top-2 right-2 p-2 bg-white/80 backdrop-blur-sm hover:bg-white transition-all z-10"
          aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
        >
          <Heart 
            className={`size-4 ${isFavorite ? "fill-black stroke-black" : "stroke-black"}`} 
          />
        </button>

        {/* Quick Add Button */}
        <div 
          className={`absolute bottom-0 left-0 right-0 flex items-center justify-center p-6 transition-opacity duration-300 ${
            isHovered ? "opacity-100" : "opacity-0"
          }`}
        >
          <button
            onClick={(e) => {
              e.stopPropagation();
              onAddToCart(id);
            }}
            className="bg-neutral-950 text-white px-6 py-2 flex items-center gap-2 hover:bg-neutral-800 transition-colors"
          >
            <Plus className="size-4" />
            QUICK ADD
          </button>
        </div>
      </div>

      {/* Product Info */}
      <div className="p-4">
        <p className="text-xs text-[#717182] uppercase tracking-wider mb-1">
          {category}
        </p>
        <h3 className="text-neutral-950 mb-2">{name}</h3>
        <p className="text-neutral-950">${price}</p>
      </div>
    </div>
  );
}