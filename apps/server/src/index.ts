import "dotenv/config";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { auth } from "./lib/auth";
import { createContext } from "./lib/context";
import { appRouter } from "./routers";
import { migrate } from "drizzle-orm/libsql/migrator";
import { db } from "./db";
import { RPCHandler } from "@orpc/server/fetch";
import { verifyWebhookSignature as verifyStripeWebhook } from "./services/stripe";
import { createGelatoOrder, handleOrderStatusUpdate, handleTrackingCodeUpdate, handleDeliveryEstimateUpdate, verifyWebhookSignature, type OrderItemFulfillment } from "./services/gelato";
import { ShippingAddressSchema } from "./lib/schemas";
import { order } from "./db/schema/orders";
import { eq } from "drizzle-orm";

const app = new Hono();

app.use(logger());
app.use(
  "/*",
  cors({
    origin: process.env.CORS_ORIGIN?.split(",") || ["*"],
    allowMethods: ["GET", "POST", "OPTIONS"],
    allowHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.on(["POST", "GET"], "/api/auth/**", (c) => auth.handler(c.req.raw));

// Stripe webhook
app.post("/api/stripe/webhook", async (c) => {
  try {
    const body = await c.req.text();
    const signature = c.req.header("stripe-signature");

    if (!signature) {
      return c.json({ error: "Missing stripe signature" }, 400);
    }

    // Verify webhook signature
    await verifyStripeWebhook(body, signature, process.env.STRIPE_WEBHOOK_SECRET!);

    const event = JSON.parse(body);

    // Handle checkout session completed
    if (event.type === "checkout.session.completed") {
      const session = event.data.object;
      const orderId = session.metadata?.orderId;

      if (orderId) {
        // Extract and validate shipping address from Stripe
        const shippingDetails = session.shipping_details;
        let shippingAddress = null;

        if (shippingDetails) {
          const [firstName, ...lastNameParts] = shippingDetails.name?.split(' ') || ['', ''];

          shippingAddress = ShippingAddressSchema.parse({
            firstName,
            lastName: lastNameParts.join(' '),
            addressLine1: shippingDetails.address?.line1 || '',
            addressLine2: shippingDetails.address?.line2 || undefined,
            city: shippingDetails.address?.city || '',
            state: shippingDetails.address?.state || '',
            postCode: shippingDetails.address?.postal_code || '',
            country: shippingDetails.address?.country || '',
            email: session.customer_details?.email || '',
            phone: session.customer_details?.phone || '',
          });
        }

        // Update order status to paid and store shipping address
        await db
          .update(order)
          .set({
            status: "paid",
            shippingAddress: shippingAddress,
          })
          .where(eq(order.id, orderId));

        // Create Gelato order
        try {
          await createGelatoOrder(orderId);
        } catch (error) {
          console.error("Failed to create Gelato order:", error);
          // Don't fail the webhook, just log the error
        }
      }
    }

    return c.json({ received: true });
  } catch (error) {
    console.error("Stripe webhook error:", error);
    return c.json({ error: "Webhook processing failed" }, 400);
  }
});

// Gelato webhook
app.post("/api/gelato/webhook", async (c) => {
  try {
    const body = await c.req.text();
    const signature = c.req.header("x-gelato-signature");

    if (!signature) {
      return c.json({ error: "Missing gelato signature" }, 400);
    }

    // Verify webhook signature
    const isValid = await verifyWebhookSignature(body, signature, process.env.GELATO_WEBHOOK_SECRET!);

    if (!isValid) {
      return c.json({ error: "Invalid signature" }, 400);
    }

    const event = JSON.parse(body);

    // Handle different webhook event types
    switch (event.event) {
      case "order_status_updated": {
        const { orderReferenceId, fulfillmentStatus, items } = event;

        // Extract tracking codes from items[].fulfillments[]
        const trackingInfos: OrderItemFulfillment[] = [];
        if (items && items.length > 0) {
          for (const item of items) {
            if (item.fulfillments && item.fulfillments.length > 0) {
              trackingInfos.push(...item.fulfillments);
            }
          }
        }

        await handleOrderStatusUpdate(orderReferenceId, fulfillmentStatus, undefined, trackingInfos);
        break;
      }

      case "order_item_status_updated": {
        const { orderReferenceId, status, comment } = event;
        await handleOrderStatusUpdate(orderReferenceId, status, comment);
        break;
      }

      case "order_item_tracking_code_updated": {
        const { orderReferenceId, trackingCode, trackingUrl, shipmentMethodName } = event;
        await handleTrackingCodeUpdate(orderReferenceId, trackingCode, trackingUrl, shipmentMethodName);
        break;
      }

      case "order_delivery_estimate_updated": {
        const { orderReferenceId, minDeliveryDate, maxDeliveryDate } = event;
        await handleDeliveryEstimateUpdate(orderReferenceId, minDeliveryDate, maxDeliveryDate);
        break;
      }
    }

    return c.json({ received: true });
  } catch (error) {
    console.error("Gelato webhook error:", error);
    return c.json({ error: "Webhook processing failed" }, 400);
  }
});

const handler = new RPCHandler(appRouter);

app.use('/rpc/*', async (c, next) => {
  const { matched, response } = await handler.handle(c.req.raw, {
    prefix: '/rpc',
    context: await createContext({ context: c })
  });

  if (matched) {
    return c.newResponse(response.body, response);
  }

  await next();
});

try {
  console.log("Migrating database...");
  migrate(db, {
    migrationsFolder: `${process.cwd()}/migrations`,
  });
} catch (error) {
  console.error(error);
}


export default app;
