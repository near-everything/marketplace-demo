import { db } from "../db";
import { order } from "../db/schema/orders";
import { eq } from "drizzle-orm";
import { ORDER_STATUS } from "../lib/constants";
import type { ShippingAddress } from "../lib/schemas";

// Gelato Webhook Event Types
export interface OrderItemFulfillment {
  trackingCode: string;
  trackingUrl: string;
  shipmentMethodName: string;
  shipmentMethodUid: string;
  fulfillmentCountry: string;
  fulfillmentStateProvince: string;
  fulfillmentFacilityId: string;
}

export interface OrderItem {
  itemReferenceId: string;
  fulfillmentStatus: string;
  fulfillments: OrderItemFulfillment[];
}

export interface OrderStatusUpdatedEvent {
  id: string;
  event: string;
  orderId: string;
  storeId: string | null;
  orderReferenceId: string;
  fulfillmentStatus: string;
  items: OrderItem[];
  created?: string;
}

export interface OrderItemStatusUpdatedEvent {
  id: string;
  event: string;
  itemReferenceId: string;
  orderReferenceId: string;
  orderId: string;
  storeId: string | null;
  fulfillmentCountry: string;
  fulfillmentStateProvince: string;
  fulfillmentFacilityId: string;
  status: string;
  comment?: string;
  created: string;
}

export interface OrderItemTrackingCodeUpdatedEvent {
  id: string;
  event: string;
  orderId: string;
  storeId: string | null;
  itemReferenceId: string;
  orderReferenceId: string;
  trackingCode: string;
  trackingUrl: string;
  shipmentMethodName: string;
  shipmentMethodUid: string;
  productionCountry: string;
  productionStateProvince: string;
  productionFacilityId: string;
  created: string;
}

export interface OrderDeliveryEstimateUpdatedEvent {
  id: string;
  event: string;
  orderId: string;
  storeId: string | null;
  orderReferenceId: string;
  minDeliveryDate: string;
  maxDeliveryDate: string;
  created: string;
}

export type GelatoWebhookEvent =
  | OrderStatusUpdatedEvent
  | OrderItemStatusUpdatedEvent
  | OrderItemTrackingCodeUpdatedEvent
  | OrderDeliveryEstimateUpdatedEvent;

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
  shippingAddress: ShippingAddress;
  returnAddress: ShippingAddress;
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

  if (!orderRecord.shippingAddress) {
    throw new Error("Shipping address is required but not provided");
  }

  // Prepare Gelato order data
  const gelatoOrderData: GelatoOrderData = {
    orderReferenceId: orderRecord.gelatoReferenceId,
    customerReferenceId: orderRecord.userId,
    currency: orderRecord.currency || "USD",
    items: [
      {
        itemReferenceId: `item_${orderRecord.id}`,
        productUid: orderRecord.productUid,
        fileUrl: orderRecord.fileUrl || "",
        quantity: orderRecord.quantity,
      },
    ],
    shipmentMethodUid: "express",
    shippingAddress: orderRecord.shippingAddress,
    returnAddress: {
      firstName: "Returns",
      lastName: "Department",
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
  // Gelato sends the webhook secret directly in the header
  return signature === secret;
}

export async function handleOrderStatusUpdate(
  orderReferenceId: string,
  status: string,
  comment?: string,
  trackingInfo?: OrderItemFulfillment[]
) {
  // Map Gelato status to our status
  let mappedStatus: typeof ORDER_STATUS[keyof typeof ORDER_STATUS] = ORDER_STATUS.PENDING;

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

  // Update order status and tracking info if provided
  const updateData: any = { status: mappedStatus };

  // Store tracking codes
  if (trackingInfo && trackingInfo.length > 0) {
    updateData.trackingCodes = trackingInfo;
  }

  // Update order using reference ID
  await db
    .update(order)
    .set(updateData)
    .where(eq(order.gelatoReferenceId, orderReferenceId));
}

export async function handleTrackingCodeUpdate(
  orderReferenceId: string,
  trackingCode: string,
  trackingUrl: string,
  shipmentMethodName: string
) {
  // Get current tracking codes to merge with new tracking info
  const orderRecord = await db
    .select()
    .from(order)
    .where(eq(order.gelatoReferenceId, orderReferenceId))
    .then((rows) => rows[0]);

  let trackingInfo: OrderItemFulfillment[] = [];

  if (orderRecord?.trackingCodes && Array.isArray(orderRecord.trackingCodes)) {
    trackingInfo = orderRecord.trackingCodes;
  }

  // Add or update tracking info
  const existingIndex = trackingInfo.findIndex(t => t.trackingCode === trackingCode);
  const newTracking: OrderItemFulfillment = {
    trackingCode: trackingCode,
    trackingUrl: trackingUrl,
    shipmentMethodName: shipmentMethodName,
    shipmentMethodUid: "unknown", // Not provided in this event
    fulfillmentCountry: "unknown", // Not provided in this event
    fulfillmentStateProvince: "unknown", // Not provided in this event
    fulfillmentFacilityId: "unknown" // Not provided in this event
  };

  if (existingIndex >= 0) {
    trackingInfo[existingIndex] = newTracking;
  } else {
    trackingInfo.push(newTracking);
  }

  // Update order with tracking information
  await db
    .update(order)
    .set({
      trackingCodes: trackingInfo,
      status: ORDER_STATUS.SHIPPED
    })
    .where(eq(order.gelatoReferenceId, orderReferenceId));
}

export async function handleDeliveryEstimateUpdate(
  orderReferenceId: string,
  minDeliveryDate: string,
  maxDeliveryDate: string
) {
  await db
    .update(order)
    .set({
      deliveryEstimate: {
        minDeliveryDate,
        maxDeliveryDate
      }
    })
    .where(eq(order.gelatoReferenceId, orderReferenceId));
}
