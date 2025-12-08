import { useState } from "react";
import { ArrowLeft, Star, Minus, Plus } from "lucide-react";
import svgPaths from "../imports/svg-zyqrrqcpdd";
import { ImageViewer } from "./ImageViewer";

interface Product {
  id: string;
  category: string;
  name: string;
  price: number;
  image: string;
}

interface ProductDetailPageProps {
  product: Product;
  allProducts: Product[];
  onBack: () => void;
  onAddToCart: (productId: string) => void;
  onNavigateToProduct: (productId: string) => void;
  favorites: string[];
  onToggleFavorite: (productId: string) => void;
}

const SIZES = ["XS", "S", "M", "L", "XL", "XXL"];

export function ProductDetailPage({
  product,
  allProducts,
  onBack,
  onAddToCart,
  onNavigateToProduct,
  favorites,
  onToggleFavorite,
}: ProductDetailPageProps) {
  const [selectedSize, setSelectedSize] = useState("XS");
  const [quantity, setQuantity] = useState(1);
  const [viewerOpen, setViewerOpen] = useState(false);
  const [viewerImageIndex, setViewerImageIndex] = useState(0);

  // Create array of 4 images (same image repeated for now)
  const productImages = [product.image, product.image, product.image, product.image];

  const handleAddToCart = () => {
    for (let i = 0; i < quantity; i++) {
      onAddToCart(product.id);
    }
  };

  const handleImageClick = (index: number) => {
    setViewerImageIndex(index);
    setViewerOpen(true);
  };

  // Get related products from the same category
  const relatedProducts = allProducts
    .filter((p) => p.category === product.category && p.id !== product.id)
    .slice(0, 3);

  return (
    <div className="bg-white w-full min-h-screen">
      {/* Image Viewer Modal */}
      {viewerOpen && (
        <ImageViewer
          images={productImages}
          initialIndex={viewerImageIndex}
          onClose={() => setViewerOpen(false)}
          productName={product.name}
        />
      )}

      {/* Back Button Section */}
      <div className="border-b border-[rgba(0,0,0,0.1)]">
        <div className="max-w-[1408px] mx-auto px-4 md:px-8 lg:px-16 py-4">
          <button
            onClick={onBack}
            className="flex items-center gap-3 hover:opacity-70 transition-opacity"
          >
            <ArrowLeft className="size-4" />
            <span className="tracking-[-0.48px]">Back to Shop</span>
          </button>
        </div>
      </div>

      <div className="max-w-[1408px] mx-auto px-4 md:px-8 lg:px-16 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image Gallery */}
          <div className="w-full">
            <div className="grid grid-cols-2 gap-4 aspect-square">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="bg-[#ececf0] w-full h-full overflow-hidden cursor-pointer hover:opacity-90 transition-opacity"
                  onClick={() => handleImageClick(i)}
                >
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            {/* Category Badge */}
            <div className="inline-block border border-[rgba(0,0,0,0.1)] px-2 py-1">
              <span className="text-[12px] tracking-[-0.48px]">{product.category}</span>
            </div>

            {/* Product Name */}
            <h1 className="tracking-[-0.48px]">{product.name}</h1>

            {/* Rating */}
            <div className="flex items-center gap-2">
              <div className="flex items-center">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} className="size-4 fill-black stroke-black" />
                ))}
                <div className="relative size-4">
                  <Star className="size-4 fill-transparent stroke-[#717182]" />
                  <div className="absolute inset-0 overflow-hidden w-[80%]">
                    <Star className="size-4 fill-black stroke-black" />
                  </div>
                </div>
              </div>
              <span className="text-[#717182] text-[14px] tracking-[-0.48px]">
                4.8 (127 reviews)
              </span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3">
              <span className="text-[16px] tracking-[-0.48px]">${product.price}</span>
              <span className="text-[#717182] text-[14px] tracking-[-0.48px]">
                Free shipping on orders over $50
              </span>
            </div>

            {/* Description */}
            <p className="text-[#717182] tracking-[-0.48px] leading-[24px]">
              Premium heavyweight hoodie featuring the iconic NEAR Protocol logo.
              Made from 100% organic cotton for ultimate comfort and sustainability.
            </p>

            {/* Divider */}
            <div className="h-px bg-[rgba(0,0,0,0.1)]" />

            {/* Size Selector */}
            <div className="space-y-3">
              <label className="block tracking-[-0.48px]">Size</label>
              <div className="flex gap-2">
                {SIZES.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`px-4 py-2 tracking-[-0.48px] transition-colors ${
                      selectedSize === size
                        ? "bg-neutral-950 text-white"
                        : "bg-white border border-[rgba(0,0,0,0.1)] hover:bg-gray-50"
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="space-y-3">
              <label className="block tracking-[-0.48px]">Quantity</label>
              <div className="flex items-center gap-3 border border-[rgba(0,0,0,0.1)] rounded w-fit px-1 py-1">
                <button
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                  className="p-2 hover:bg-gray-100 rounded transition-colors disabled:opacity-50"
                  disabled={quantity <= 1}
                >
                  <Minus className="size-4" />
                </button>
                <span className="tracking-[-0.48px] min-w-[2ch] text-center">
                  {quantity}
                </span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="p-2 hover:bg-gray-100 rounded transition-colors"
                >
                  <Plus className="size-4" />
                </button>
              </div>
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="w-full bg-neutral-950 text-white py-2 px-4 tracking-[-0.48px] hover:bg-neutral-800 transition-colors"
            >
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </button>

            {/* Divider */}
            <div className="h-px bg-[rgba(0,0,0,0.1)]" />

            {/* Features */}
            <div className="space-y-2">
              <h4 className="tracking-[-0.48px]">Features</h4>
              <ul className="space-y-1 text-[#717182] text-[14px] tracking-[-0.48px]">
                <li className="flex gap-2">
                  <span>•</span>
                  <span>100% organic cotton fleece</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Heavyweight 350GSM fabric</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Screen-printed NEAR logo</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Kangaroo pocket with hidden zip</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Ribbed cuffs and hem</span>
                </li>
                <li className="flex gap-2">
                  <span>•</span>
                  <span>Unisex fit</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* You Might Also Like */}
        {relatedProducts.length > 0 && (
          <div className="mt-24 space-y-8">
            <div className="space-y-2">
              <h2 className="tracking-[-0.48px]">You Might Also Like</h2>
              <p className="text-[#717182] tracking-[-0.48px]">
                Explore more from our collection
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <div
                  key={relatedProduct.id}
                  className="border border-[rgba(0,0,0,0.1)] overflow-hidden group cursor-pointer"
                  onClick={() => onNavigateToProduct(relatedProduct.id)}
                >
                  <div className="bg-[#ececf0] aspect-square overflow-hidden relative">
                    <img
                      src={relatedProduct.image}
                      alt={relatedProduct.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 flex items-end justify-center pb-6 opacity-0 group-hover:opacity-100 transition-opacity">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onAddToCart(relatedProduct.id);
                        }}
                        className="bg-neutral-950 text-white px-4 py-2 text-[14px] tracking-[-0.48px] flex items-center gap-2"
                      >
                        <Plus className="size-4" />
                        QUICK ADD
                      </button>
                    </div>
                  </div>
                  <div className="p-4 border-t border-[rgba(0,0,0,0.1)]">
                    <div className="flex justify-between items-start">
                      <div className="space-y-1">
                        <p className="text-[#717182] text-[12px] uppercase tracking-[0.6px]">
                          {relatedProduct.category}
                        </p>
                        <h3 className="text-[14px] tracking-[-0.48px]">
                          {relatedProduct.name}
                        </h3>
                      </div>
                      <span className="tracking-[-0.48px]">${relatedProduct.price}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}