import { createPlugin } from 'every-plugin';
import { Effect } from 'every-plugin/effect';
import { z } from 'every-plugin/zod';
import { Near, InMemoryKeyStore, parseKey, type Network } from 'near-kit';

import { contract } from './contract';
import { RelayerService } from './service';
import { ProductService } from './services/products';
import { OrderService } from './services/orders';
import { StripeService } from './services/stripe';
import { GelatoFulfillmentService, mapFulfillmentStatus, parseTrackingInfo } from './services/fulfillment';
import { getProductById } from './data/products';

export * from './schema';

const DEMO_PRODUCT = {
  productUid: 'apparel_product_gca_t-shirt_gsc_crewneck_gcu_unisex_gqa_classic_gsi_s_gco_white_gpr_4-4',
  fileUrl: 'https://cdn-origin.gelato-api-dashboard.ie.live.gelato.tech/docs/sample-print-files/logo.png',
};

export default createPlugin({
  variables: z.object({
    network: z.enum(['mainnet', 'testnet']).default('mainnet'),
    contractId: z.string().default('social.near'),
    nodeUrl: z.string().optional(),
  }),

  secrets: z.object({
    relayerAccountId: z.string().min(1, 'Relayer account ID is required'),
    relayerPrivateKey: z.string().min(1, 'Relayer private key is required'),
    STRIPE_SECRET_KEY: z.string().optional(),
    STRIPE_WEBHOOK_SECRET: z.string().optional(),
    GELATO_API_KEY: z.string().optional(),
    GELATO_WEBHOOK_SECRET: z.string().optional(),
  }),

  contract,

  initialize: (config) =>
    Effect.gen(function* () {
      const networkConfig = config.variables.nodeUrl
        ? {
            networkId: config.variables.network,
            rpcUrl: config.variables.nodeUrl,
          }
        : (config.variables.network as Network);

      console.log(`[API Init] relayerAccountId: ${config.secrets.relayerAccountId}`);
      console.log(`[API Init] network: ${config.variables.network}`);
      console.log(`[API Init] contractId: ${config.variables.contractId}`);

      const keyStore = new InMemoryKeyStore();
      yield* Effect.promise(() =>
        keyStore.add(
          config.secrets.relayerAccountId,
          parseKey(config.secrets.relayerPrivateKey)
        )
      );

      const near = new Near({
        network: networkConfig,
        keyStore,
        defaultSignerId: config.secrets.relayerAccountId,
        defaultWaitUntil: 'FINAL',
      });

      const relayerService = new RelayerService(
        near,
        config.secrets.relayerAccountId,
        config.variables.contractId
      );

      const productService = new ProductService();
      const orderService = new OrderService();

      const stripeService = config.secrets.STRIPE_SECRET_KEY && config.secrets.STRIPE_WEBHOOK_SECRET
        ? new StripeService(config.secrets.STRIPE_SECRET_KEY, config.secrets.STRIPE_WEBHOOK_SECRET)
        : null;

      const fulfillmentService = config.secrets.GELATO_API_KEY && config.secrets.GELATO_WEBHOOK_SECRET
        ? new GelatoFulfillmentService(config.secrets.GELATO_API_KEY, config.secrets.GELATO_WEBHOOK_SECRET)
        : null;

      console.debug('[API Init] Services initialized');

      return {
        relayerService,
        productService,
        orderService,
        stripeService,
        fulfillmentService,
      };
    }),

  shutdown: () => Effect.void,

  createRouter: (context, builder) => {
    const { relayerService, productService, orderService, stripeService, fulfillmentService } = context;

    return {
      connect: builder.connect.handler(async ({ input }) => {
        return await relayerService.ensureStorageDeposit(input.accountId);
      }),

      publish: builder.publish.handler(async ({ input }) => {
        return await relayerService.submitDelegateAction(input.payload);
      }),

      ping: builder.ping.handler(async () => {
        return {
          status: 'ok' as const,
          timestamp: new Date().toISOString(),
        };
      }),

      getProducts: builder.getProducts.handler(async ({ input }) => {
        return await Effect.runPromise(productService.getProducts(input));
      }),

      getProduct: builder.getProduct.handler(async ({ input }) => {
        return await Effect.runPromise(productService.getProduct(input.id));
      }),

      searchProducts: builder.searchProducts.handler(async ({ input }) => {
        return await Effect.runPromise(productService.searchProducts(input));
      }),

      getFeaturedProducts: builder.getFeaturedProducts.handler(async ({ input }) => {
        return await Effect.runPromise(productService.getFeaturedProducts(input.limit));
      }),

      getCollections: builder.getCollections.handler(async () => {
        return await Effect.runPromise(productService.getCollections());
      }),

      getCollection: builder.getCollection.handler(async ({ input }) => {
        return await Effect.runPromise(productService.getCollection(input.slug));
      }),

      createCheckout: builder.createCheckout.handler(async ({ input }) => {
        if (!stripeService) {
          throw new Error('Stripe is not configured');
        }

        const product = getProductById(input.productId);
        if (!product) {
          throw new Error(`Product not found: ${input.productId}`);
        }

        const userId = 'demo-user';
        const totalAmount = product.price * 100 * input.quantity;

        const order = await Effect.runPromise(
          orderService.createOrder({
            userId,
            productId: product.id,
            productName: product.name,
            quantity: input.quantity,
            totalAmount,
            currency: product.currency || 'USD',
          })
        );

        const checkout = await Effect.runPromise(
          stripeService.createCheckoutSession({
            orderId: order.id,
            productName: product.name,
            productDescription: product.description,
            productImage: product.image,
            unitAmount: product.price * 100,
            currency: product.currency || 'USD',
            quantity: input.quantity,
            successUrl: input.successUrl,
            cancelUrl: input.cancelUrl,
          })
        );

        await Effect.runPromise(
          orderService.updateOrderCheckout(order.id, checkout.sessionId, 'stripe')
        );

        return {
          checkoutSessionId: checkout.sessionId,
          checkoutUrl: checkout.url,
          orderId: order.id,
        };
      }),

      getOrders: builder.getOrders.handler(async ({ input }) => {
        const userId = 'demo-user';
        return await Effect.runPromise(orderService.getOrders(userId, input));
      }),

      getOrder: builder.getOrder.handler(async ({ input }) => {
        const userId = 'demo-user';
        return await Effect.runPromise(orderService.getOrder(input.id, userId));
      }),

      stripeWebhook: builder.stripeWebhook.handler(async ({ input }) => {
        if (!stripeService || !fulfillmentService) {
          throw new Error('Stripe or fulfillment service not configured');
        }

        const event = await Effect.runPromise(
          stripeService.verifyWebhookSignature(input.body, input.signature)
        );

        if (event.type === 'checkout.session.completed') {
          const session = event.data.object;
          const orderId = session.metadata?.orderId;

          if (orderId) {
            const fullSession = await Effect.runPromise(
              stripeService.getCheckoutSession(session.id)
            );

            const shippingAddress = stripeService.extractShippingAddress(fullSession);

            if (shippingAddress) {
              await Effect.runPromise(
                orderService.updateOrderShipping(orderId, shippingAddress)
              );
              await Effect.runPromise(orderService.updateOrderStatus(orderId, 'paid'));

              const orderResult = await Effect.runPromise(orderService.getOrder(orderId));
              const order = orderResult.order;

              const orderData = fulfillmentService.buildOrderData({
                orderId: order.id,
                userId: order.userId,
                productUid: DEMO_PRODUCT.productUid,
                fileUrl: DEMO_PRODUCT.fileUrl,
                quantity: order.quantity,
                currency: order.currency,
                shippingAddress,
                fulfillmentReferenceId: order.fulfillmentReferenceId!,
              });

              try {
                const fulfillmentResult = await Effect.runPromise(
                  fulfillmentService.createOrder(orderData)
                );
                await Effect.runPromise(
                  orderService.updateOrderFulfillment(orderId, fulfillmentResult.id)
                );
              } catch (error) {
                console.error('Failed to create fulfillment order:', error);
              }
            } else {
              await Effect.runPromise(orderService.updateOrderStatus(orderId, 'paid'));
            }
          }
        }

        return { received: true };
      }),

      fulfillmentWebhook: builder.fulfillmentWebhook.handler(async ({ input }) => {
        if (!fulfillmentService) {
          throw new Error('Fulfillment service not configured');
        }

        const isValid = await Effect.runPromise(
          fulfillmentService.verifyWebhookSignature(input.body, input.signature)
        );

        if (!isValid) {
          throw new Error('Invalid webhook signature');
        }

        const event = JSON.parse(input.body);

        switch (event.event) {
          case 'order_status_updated': {
            const { orderReferenceId, fulfillmentStatus, items } = event;
            const order = await Effect.runPromise(
              orderService.getOrderByFulfillmentReference(orderReferenceId)
            );
            
            if (order) {
              const status = mapFulfillmentStatus(fulfillmentStatus);
              await Effect.runPromise(orderService.updateOrderStatus(order.id, status));
              
              const trackingInfo = parseTrackingInfo(items);
              if (trackingInfo.length > 0) {
                await Effect.runPromise(orderService.updateOrderTracking(order.id, trackingInfo));
              }
            }
            break;
          }

          case 'order_item_tracking_code_updated': {
            const { orderReferenceId, trackingCode, trackingUrl, shipmentMethodName } = event;
            const order = await Effect.runPromise(
              orderService.getOrderByFulfillmentReference(orderReferenceId)
            );

            if (order) {
              const existingTracking = order.trackingInfo || [];
              const newTracking = {
                trackingCode,
                trackingUrl,
                shipmentMethodName,
              };

              const existingIndex = existingTracking.findIndex(
                (t) => t.trackingCode === trackingCode
              );
              
              if (existingIndex >= 0) {
                existingTracking[existingIndex] = { ...existingTracking[existingIndex], ...newTracking };
              } else {
                existingTracking.push(newTracking);
              }

              await Effect.runPromise(orderService.updateOrderTracking(order.id, existingTracking));
              await Effect.runPromise(orderService.updateOrderStatus(order.id, 'shipped'));
            }
            break;
          }

          case 'order_delivery_estimate_updated': {
            const { orderReferenceId, minDeliveryDate, maxDeliveryDate } = event;
            const order = await Effect.runPromise(
              orderService.getOrderByFulfillmentReference(orderReferenceId)
            );

            if (order) {
              await Effect.runPromise(
                orderService.updateOrderDeliveryEstimate(order.id, {
                  minDeliveryDate,
                  maxDeliveryDate,
                })
              );
            }
            break;
          }
        }

        return { received: true };
      }),
    };
  },
});
