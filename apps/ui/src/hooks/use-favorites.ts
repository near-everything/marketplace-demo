import { useState, useEffect, useCallback } from 'react';
import type { Product } from '@/data/products';
import { getProductById } from '@/data/products';

const FAVORITES_STORAGE_KEY = 'marketplace-favorites';

export function useFavorites() {
  const [favoriteIds, setFavoriteIds] = useState<number[]>(() => {
    if (typeof window === 'undefined') return [];
    const stored = localStorage.getItem(FAVORITES_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  });

  useEffect(() => {
    localStorage.setItem(FAVORITES_STORAGE_KEY, JSON.stringify(favoriteIds));
  }, [favoriteIds]);

  const toggleFavorite = useCallback((productId: number) => {
    setFavoriteIds((prev) => {
      if (prev.includes(productId)) {
        return prev.filter((id) => id !== productId);
      }
      return [...prev, productId];
    });
  }, []);

  const addFavorite = useCallback((productId: number) => {
    setFavoriteIds((prev) => {
      if (prev.includes(productId)) return prev;
      return [...prev, productId];
    });
  }, []);

  const removeFavorite = useCallback((productId: number) => {
    setFavoriteIds((prev) => prev.filter((id) => id !== productId));
  }, []);

  const isFavorite = useCallback(
    (productId: number) => favoriteIds.includes(productId),
    [favoriteIds]
  );

  const clearFavorites = useCallback(() => {
    setFavoriteIds([]);
  }, []);

  const favorites: Product[] = favoriteIds
    .map((id) => getProductById(id))
    .filter(Boolean) as Product[];

  return {
    favoriteIds,
    favorites,
    count: favoriteIds.length,
    toggleFavorite,
    addFavorite,
    removeFavorite,
    isFavorite,
    clearFavorites,
  };
}
