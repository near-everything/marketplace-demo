import { Effect } from 'every-plugin/effect';
import type { Product, ProductCategory, Collection } from '../schema';
import {
  PRODUCTS,
  COLLECTIONS,
  getProductById,
  getProductsByCategory,
  searchProducts as searchProductsData,
  getFeaturedProducts as getFeaturedProductsData,
  getCollectionBySlug,
  categoryFromSlug,
} from '../data/products';

export class ProductService {
  getProducts(options: { category?: ProductCategory; limit?: number; offset?: number }) {
    return Effect.sync(() => {
      const { category, limit = 50, offset = 0 } = options;
      let products = category ? getProductsByCategory(category) : PRODUCTS;
      const total = products.length;
      products = products.slice(offset, offset + limit);
      return { products, total };
    });
  }

  getProduct(id: string) {
    return Effect.gen(function* () {
      const product = getProductById(id);
      if (!product) {
        return yield* Effect.fail(new Error(`Product not found: ${id}`));
      }
      return { product };
    });
  }

  searchProducts(options: { query: string; category?: ProductCategory; limit?: number }) {
    return Effect.sync(() => {
      const { query, category, limit = 20 } = options;
      const products = searchProductsData(query, category).slice(0, limit);
      return { products };
    });
  }

  getFeaturedProducts(limit = 8) {
    return Effect.sync(() => {
      const products = getFeaturedProductsData(limit);
      return { products };
    });
  }

  getCollections() {
    return Effect.sync(() => {
      return { collections: COLLECTIONS };
    });
  }

  getCollection(slug: string) {
    return Effect.gen(function* () {
      const collection = getCollectionBySlug(slug);
      if (!collection) {
        return yield* Effect.fail(new Error(`Collection not found: ${slug}`));
      }
      const category = categoryFromSlug(slug);
      const products = category ? getProductsByCategory(category) : [];
      return { collection, products };
    });
  }
}
