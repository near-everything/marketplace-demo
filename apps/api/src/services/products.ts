import { Effect } from 'every-plugin/effect';
import {
  categoryFromSlug,
  COLLECTIONS,
  getCollectionBySlug,
  getFeaturedProducts as getFeaturedProductsData,
  getProductById,
  PRODUCTS
} from '../data/products';
import type { Product, ProductCategory } from '../schema';
import type { PrintfulFulfillmentService } from './fulfillment';

export class ProductService {
  private printfulService: PrintfulFulfillmentService | null;
  private printfulProductsCache: Product[] | null = null;
  private printfulCacheExpiry: number = 0;
  private readonly CACHE_TTL_MS = 5 * 60 * 1000;

  constructor(printfulService?: PrintfulFulfillmentService | null) {
    this.printfulService = printfulService ?? null;
  }

  private getPrintfulProducts() {
    return Effect.gen(this, function* () {
      if (!this.printfulService) {
        return [];
      }

      const now = Date.now();
      if (this.printfulProductsCache && now < this.printfulCacheExpiry) {
        return this.printfulProductsCache;
      }

      try {
        const syncProducts = yield* this.printfulService.getSyncProducts();
        const allProducts: Product[] = [];

        for (const syncProduct of syncProducts) {
          try {
            const { sync_product, sync_variants } = yield* this.printfulService.getSyncProduct(syncProduct.id);
            const products = this.printfulService.transformSyncProductToProduct(sync_product, sync_variants);
            allProducts.push(...products);
          } catch (error) {
            console.error(`Failed to fetch Printful product ${syncProduct.id}:`, error);
          }
        }

        this.printfulProductsCache = allProducts;
        this.printfulCacheExpiry = now + this.CACHE_TTL_MS;

        return allProducts;
      } catch (error) {
        console.error('Failed to fetch Printful products:', error);
        return this.printfulProductsCache || [];
      }
    });
  }

  private getAllProducts() {
    return Effect.gen(this, function* () {
      const staticProducts = PRODUCTS.map((p) => ({
        ...p,
        fulfillmentProvider: p.fulfillmentProvider || ('manual' as const),
      }));

      const printfulProducts = yield* this.getPrintfulProducts();

      return [...staticProducts, ...printfulProducts];
    });
  }

  getProducts(options: { category?: ProductCategory; limit?: number; offset?: number }) {
    return Effect.gen(this, function* () {
      const { category, limit = 50, offset = 0 } = options;

      let allProducts = yield* this.getAllProducts();

      if (category) {
        allProducts = allProducts.filter((p) => p.category === category);
      }

      const total = allProducts.length;
      const products = allProducts.slice(offset, offset + limit);

      return { products, total };
    });
  }

  getProduct(id: string) {
    return Effect.gen(this, function* () {
      if (id.startsWith('printful-')) {
        const printfulProducts = yield* this.getPrintfulProducts();
        const product = printfulProducts.find((p) => p.id === id);
        if (!product) {
          return yield* Effect.fail(new Error(`Product not found: ${id}`));
        }
        return { product };
      }

      const staticProduct = getProductById(id);
      if (staticProduct) {
        return {
          product: {
            ...staticProduct,
            fulfillmentProvider: staticProduct.fulfillmentProvider || ('manual' as const),
          },
        };
      }

      const allProducts = yield* this.getAllProducts();
      const product = allProducts.find((p) => p.id === id);

      if (!product) {
        return yield* Effect.fail(new Error(`Product not found: ${id}`));
      }

      return { product };
    });
  }

  searchProducts(options: { query: string; category?: ProductCategory; limit?: number }) {
    return Effect.gen(this, function* () {
      const { query, category, limit = 20 } = options;
      const lowerQuery = query.toLowerCase();

      const allProducts = yield* this.getAllProducts();

      const matchedProducts = allProducts.filter((p) => {
        const matchesQuery = !query || p.name.toLowerCase().includes(lowerQuery);
        const matchesCategory = !category || p.category === category;
        return matchesQuery && matchesCategory;
      });

      const products = matchedProducts.slice(0, limit);
      return { products };
    });
  }

  getFeaturedProducts(limit = 8) {
    return Effect.gen(this, function* () {
      const allProducts = yield* this.getAllProducts();

      const printfulProducts = allProducts.filter((p) => p.fulfillmentProvider === 'printful');
      const staticFeatured = getFeaturedProductsData(limit);

      const combined = [...printfulProducts.slice(0, Math.min(2, printfulProducts.length))];

      const remaining = limit - combined.length;
      combined.push(...staticFeatured.slice(0, remaining));

      return { products: combined.slice(0, limit) };
    });
  }

  getCollections() {
    return Effect.sync(() => {
      return { collections: COLLECTIONS };
    });
  }

  getCollection(slug: string) {
    return Effect.gen(this, function* () {
      const collection = getCollectionBySlug(slug);
      if (!collection) {
        return yield* Effect.fail(new Error(`Collection not found: ${slug}`));
      }

      const category = categoryFromSlug(slug);
      const allProducts = yield* this.getAllProducts();

      const products = category ? allProducts.filter((p) => p.category === category) : [];

      return { collection, products };
    });
  }

  clearCache() {
    this.printfulProductsCache = null;
    this.printfulCacheExpiry = 0;
  }
}
