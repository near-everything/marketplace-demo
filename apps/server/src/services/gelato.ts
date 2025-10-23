import { createHmac } from "crypto";
import { db } from "../db";
import { order } from "../db/schema/orders";
import { eq } from "drizzle-orm";
import { ORDER_STATUS } from "../lib/constants";

export interface GelatoOrderData {
  orderReferenceId: string;
  customerReferenceId: string;
  currency: string;
  items: Array<{
    itemReferenceId: string;
    productUid: string;
    fileUrl: string;
    quantity: number;
  }>;
  shipmentMethodUid: string;
  shippingAddress: {
    companyName?: string;
    firstName: string;
    lastName: string;
    addressLine1: string;
    addressLine2?: string;
    state: string;
    city: string;
    postCode: string;
    country: string;
    email: string;
    phone: string;
  };
  returnAddress: {
    companyName: string;
    addressLine1: string;
    addressLine2?: string;
    state: string;
    city: string;
    postCode: string;
    country: string;
    email: string;
    phone: string;
  };
}

export async function createGelatoOrder(orderId: string) {
  // Get order from database
  const orderRecord = await db
    .select()
    .from(order)
    .where(eq(order.id, orderId))
    .then((rows) => rows[0]);

  if (!orderRecord) {
    throw new Error("Order not found");
  }

  // Prepare Gelato order data
  const gelatoOrderData: GelatoOrderData = {
    orderReferenceId: orderRecord.gelatoReferenceId,
    customerReferenceId: orderRecord.userId,
    currency: orderRecord.currency,
    items: [
      {
        itemReferenceId: `item_${orderRecord.id}`,
        productUid: orderRecord.productUid,
        fileUrl: orderRecord.fileUrl || "",
        quantity: orderRecord.quantity,
      },
    ],
    shipmentMethodUid: "express",
    shippingAddress: {
      firstName: "Demo",
      lastName: "User",
      addressLine1: "123 Demo Street",
      city: "Demo City",
      state: "CA",
      postCode: "12345",
      country: "US",
      email: "demo@example.com",
      phone: "1234567890",
    },
    returnAddress: {
      companyName: "Demo Company",
      addressLine1: "456 Return Street",
      city: "Return City",
      state: "CA",
      postCode: "67890",
      country: "US",
      email: "returns@example.com",
      phone: "0987654321",
    },
  };

  // Create Gelato order via API
  const response = await fetch("https://order.gelatoapis.com/v4/orders", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "X-API-KEY": process.env.GELATO_API_KEY!,
    },
    body: JSON.stringify(gelatoOrderData),
  });

  if (!response.ok) {
    throw new Error(`Gelato API error: ${response.status} ${response.statusText}`);
  }

  const gelatoResponse = await response.json();

  // Update order with Gelato order ID
  await db
    .update(order)
    .set({
      gelatoOrderId: gelatoResponse.id,
      status: ORDER_STATUS.PROCESSING,
    })
    .where(eq(order.id, orderId));

  return gelatoResponse;
}

export async function verifyWebhookSignature(
  body: string,
  signature: string,
  secret: string
): Promise<boolean> {
  // Simple signature verification - in production you'd want more robust verification
  // Gelato doesn't seem to provide detailed webhook signature docs, so this is basic
  const expectedSignature = createHmac("sha256", secret)
    .update(body)
    .digest("hex");

  return signature === expectedSignature;
}

export async function handleOrderStatusUpdate(
  orderId: string,
  status: string,
  comment?: string
) {
  // Map Gelato status to our status
  let mappedStatus = ORDER_STATUS.PENDING;

  switch (status.toLowerCase()) {
    case "passed":
    case "completed":
      mappedStatus = ORDER_STATUS.PROCESSING;
      break;
    case "printing":
      mappedStatus = ORDER_STATUS.PRINTING;
      break;
    case "shipped":
      mappedStatus = ORDER_STATUS.SHIPPED;
      break;
    case "delivered":
      mappedStatus = ORDER_STATUS.DELIVERED;
      break;
    case "cancelled":
    case "canceled":
      mappedStatus = ORDER_STATUS.CANCELLED;
      break;
    default:
      mappedStatus = ORDER_STATUS.PROCESSING;
  }

  // Update order status
  await db
    .update(order)
    .set({
      status: mappedStatus,
    })
    .where(eq(order.gelatoOrderId, orderId));
}
