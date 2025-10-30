import Stripe from "stripe";
import { db } from "../db";
import { order } from "../db/schema/orders";
import { TSHIRT_PRODUCT } from "../lib/constants";
import { eq } from "drizzle-orm";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  apiVersion: "2025-09-30.clover",
});

export interface CreateCheckoutParams {
  userId: string;
  userEmail: string;
  successUrl: string;
  cancelUrl: string;
}

export async function createCheckoutSession({
  userId,
  userEmail,
  successUrl,
  cancelUrl,
}: CreateCheckoutParams) {
  // Create order record first
  const orderRecord = await db
    .insert(order)
    .values({
      userId: userId,
      gelatoReferenceId: `order_${Date.now()}_${userId}`,
      productUid: TSHIRT_PRODUCT.productUid,
      status: "pending",
      fileUrl: TSHIRT_PRODUCT.fileUrl,
      quantity: 1,
      totalAmount: TSHIRT_PRODUCT.price,
      currency: TSHIRT_PRODUCT.currency,
    })
    .returning()
    .then((rows) => rows[0]);

  // Create Stripe checkout session
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    shipping_address_collection: {
      allowed_countries: ['US', 'CA', 'GB', 'AU', 'DE', 'FR', 'IT', 'ES', 'NL', 'SE', 'NO', 'FI', 'DK', 'BE', 'AT', 'CH', 'PT', 'IE', 'NZ', 'SG', 'JP'],
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: "fixed_amount",
          fixed_amount: {
            amount: 0,
            currency: TSHIRT_PRODUCT.currency.toLowerCase(),
          },
          display_name: "Free Shipping",
          delivery_estimate: {
            minimum: {
              unit: "business_day",
              value: 5,
            },
            maximum: {
              unit: "business_day",
              value: 10,
            },
          },
        },
      },
    ],
    line_items: [
      {
        price_data: {
          currency: TSHIRT_PRODUCT.currency.toLowerCase(),
          product_data: {
            name: TSHIRT_PRODUCT.name,
            description: TSHIRT_PRODUCT.description,
            images: [TSHIRT_PRODUCT.fileUrl],
          },
          unit_amount: TSHIRT_PRODUCT.price,
        },
        quantity: 1,
      },
    ],
    mode: "payment",
    success_url: `${successUrl}?session_id={CHECKOUT_SESSION_ID}`,
    cancel_url: cancelUrl,
    customer_email: userEmail,
    metadata: {
      orderId: orderRecord.id,
      userId,
    },
  });

  // Update order with Stripe session ID
  await db
    .update(order)
    .set({
      stripeSessionId: session.id,
    })
    .where(eq(order.id, orderRecord.id));

  return {
    sessionId: session.id,
    url: session.url!,
  };
}

export async function verifyWebhookSignature(
  body: string,
  signature: string,
  secret: string
) {
  return stripe.webhooks.constructEventAsync(body, signature, secret);
}
