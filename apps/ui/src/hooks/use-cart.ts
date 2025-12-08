import { useState, useEffect, useCallback } from 'react';
import type { CartItem, Product } from '@/data/products';
import { getProductById, requiresSize, allProducts } from '@/data/products';

const CART_STORAGE_KEY = 'marketplace-cart';

export interface CartItemWithProduct extends CartItem {
  product: Product;
}

export function useCart() {
  const [items, setItems] = useState<Record<number, CartItem>>(() => {
    if (typeof window === 'undefined') return {};
    const stored = localStorage.getItem(CART_STORAGE_KEY);
    return stored ? JSON.parse(stored) : {};
  });

  useEffect(() => {
    localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  const addToCart = useCallback((productId: number, size = 'N/A') => {
    setItems((prev) => ({
      ...prev,
      [productId]: {
        productId,
        quantity: (prev[productId]?.quantity || 0) + 1,
        size: prev[productId]?.size || size,
      },
    }));
  }, []);

  const updateQuantity = useCallback((productId: number, change: number) => {
    setItems((prev) => {
      const current = prev[productId];
      if (!current) return prev;

      const newQuantity = current.quantity + change;
      if (newQuantity <= 0) {
        const { [productId]: _, ...rest } = prev;
        return rest;
      }

      return {
        ...prev,
        [productId]: { ...current, quantity: newQuantity },
      };
    });
  }, []);

  const updateSize = useCallback((productId: number, size: string) => {
    setItems((prev) => {
      const current = prev[productId];
      if (!current) return prev;
      return {
        ...prev,
        [productId]: { ...current, size },
      };
    });
  }, []);

  const removeItem = useCallback((productId: number) => {
    setItems((prev) => {
      const { [productId]: _, ...rest } = prev;
      return rest;
    });
  }, []);

  const clearCart = useCallback(() => {
    setItems({});
  }, []);

  const cartItems: CartItemWithProduct[] = Object.values(items)
    .map((item) => {
      const product = getProductById(item.productId);
      if (!product) return null;
      return { ...item, product };
    })
    .filter(Boolean) as CartItemWithProduct[];

  const totalCount = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  
  const subtotal = cartItems.reduce(
    (sum, item) => sum + item.product.price * item.quantity,
    0
  );

  return {
    items,
    cartItems,
    totalCount,
    subtotal,
    addToCart,
    updateQuantity,
    updateSize,
    removeItem,
    clearCart,
    requiresSize,
    allProducts,
  };
}
