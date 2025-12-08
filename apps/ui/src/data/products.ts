export type ProductCategory = 'Men' | 'Women' | 'Accessories' | 'Exclusives';

export interface Product {
  id: number;
  category: ProductCategory;
  name: string;
  price: number;
  image: string;
  description?: string;
}

export interface CartItem {
  productId: number;
  quantity: number;
  size: string;
}

export const COLLECTIONS: ProductCategory[] = ['Men', 'Women', 'Accessories', 'Exclusives'];

export const SIZES = ['XS', 'S', 'M', 'L', 'XL', 'XXL'] as const;
export type Size = (typeof SIZES)[number];

export const requiresSize = (category: ProductCategory): boolean => {
  return ['Men', 'Women', 'Exclusives'].includes(category);
};

export const allProducts: Product[] = [
  { id: 1, category: 'Men', name: 'NEAR Protocol Hoodie', price: 65, image: '/images/product-1.png' },
  { id: 2, category: 'Women', name: 'Classic NEAR Tee', price: 35, image: '/images/product-2.png' },
  { id: 3, category: 'Accessories', name: 'NEAR Snapback Cap', price: 28, image: '/images/product-3.png' },
  { id: 4, category: 'Accessories', name: 'Protocol Tote Bag', price: 22, image: '/images/product-4.png' },
  { id: 5, category: 'Accessories', name: 'NEAR Coffee Mug', price: 18, image: '/images/product-5.png' },
  { id: 6, category: 'Exclusives', name: 'Sticker Pack', price: 12, image: '/images/product-6.png' },
  { id: 7, category: 'Men', name: "Men's Essential Tee - Black", price: 32, image: 'https://images.unsplash.com/photo-1667744565777-fa2eb22adeeb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&w=1080' },
  { id: 8, category: 'Men', name: "Men's Oversized Tee", price: 38, image: '/images/product-8.png' },
  { id: 9, category: 'Women', name: "Women's Crop Tee", price: 30, image: '/images/product-9.png' },
  { id: 10, category: 'Men', name: "Men's Polo Shirt", price: 45, image: '/images/product-10.png' },
  { id: 11, category: 'Women', name: "Women's Fitted Tee", price: 30, image: '/images/product-11.png' },
  { id: 12, category: 'Exclusives', name: "Founder's Edition Tee", price: 40, image: '/images/product-12.png' },
  { id: 13, category: 'Women', name: "Women's Crop Tee", price: 30, image: '/images/product-13.png' },
  { id: 14, category: 'Men', name: "Men's Oversized Tee", price: 38, image: '/images/product-14.png' },
  { id: 15, category: 'Exclusives', name: 'Limited Edition Black Tee', price: 45, image: '/images/product-15.png' },
  { id: 16, category: 'Women', name: "Women's Hoodie", price: 68, image: '/images/product-16.png' },
  { id: 17, category: 'Accessories', name: 'NEAR Backpack', price: 75, image: '/images/product-17.png' },
  { id: 18, category: 'Accessories', name: 'NEAR Water Bottle', price: 20, image: '/images/product-18.png' },
];

export const getProductById = (id: number): Product | undefined => {
  return allProducts.find((p) => p.id === id);
};

export const getProductsByCategory = (category: ProductCategory): Product[] => {
  return allProducts.filter((p) => p.category === category);
};

export const searchProducts = (query: string, category?: ProductCategory): Product[] => {
  const lowerQuery = query.toLowerCase();
  return allProducts.filter((p) => {
    const matchesQuery = !query || p.name.toLowerCase().includes(lowerQuery);
    const matchesCategory = !category || p.category === category;
    return matchesQuery && matchesCategory;
  });
};

export const getFeaturedProducts = (limit = 8): Product[] => {
  return allProducts.slice(0, limit);
};
