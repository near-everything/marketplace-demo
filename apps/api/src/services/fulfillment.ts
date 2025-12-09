import { Effect } from 'every-plugin/effect';
import type { ShippingAddress, TrackingInfo, OrderStatus } from '../schema';

export interface FulfillmentOrderData {
  orderReferenceId: string;
  customerReferenceId: string;
  currency: string;
  items: Array<{
    itemReferenceId: string;
    productUid: string;
    files: Array<{
      type: string;
      url: string;
    }>;
    quantity: number;
  }>;
  shipmentMethodUid: string;
  shippingAddress: ShippingAddress;
  returnAddress: ShippingAddress;
}

export interface FulfillmentService {
  createOrder(data: FulfillmentOrderData): Effect.Effect<{ id: string }, Error>;
  verifyWebhookSignature(body: string, signature: string): Effect.Effect<boolean, Error>;
}

const ORDER_STATUS_MAP: Record<string, OrderStatus> = {
  passed: 'processing',
  completed: 'processing',
  printing: 'printing',
  shipped: 'shipped',
  delivered: 'delivered',
  cancelled: 'cancelled',
  canceled: 'cancelled',
};

export function mapFulfillmentStatus(status: string): OrderStatus {
  return ORDER_STATUS_MAP[status.toLowerCase()] || 'processing';
}

export function parseTrackingInfo(items: any[]): TrackingInfo[] {
  const trackingInfos: TrackingInfo[] = [];
  
  for (const item of items || []) {
    for (const fulfillment of item.fulfillments || []) {
      trackingInfos.push({
        trackingCode: fulfillment.trackingCode,
        trackingUrl: fulfillment.trackingUrl,
        shipmentMethodName: fulfillment.shipmentMethodName,
        shipmentMethodUid: fulfillment.shipmentMethodUid,
        fulfillmentCountry: fulfillment.fulfillmentCountry,
        fulfillmentStateProvince: fulfillment.fulfillmentStateProvince,
        fulfillmentFacilityId: fulfillment.fulfillmentFacilityId,
      });
    }
  }
  
  return trackingInfos;
}

export class GelatoFulfillmentService implements FulfillmentService {
  private apiKey: string;
  private webhookSecret: string;
  private baseUrl = 'https://order.gelatoapis.com/v4';

  constructor(apiKey: string, webhookSecret: string) {
    this.apiKey = apiKey;
    this.webhookSecret = webhookSecret;
  }

  createOrder(data: FulfillmentOrderData) {
    return Effect.tryPromise({
      try: async () => {
        const response = await fetch(`${this.baseUrl}/orders`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-API-KEY': this.apiKey,
          },
          body: JSON.stringify(data),
        });

        if (!response.ok) {
          const errorBody = await response.text();
          console.error('Gelato API error response:', errorBody);
          throw new Error(`Gelato API error: ${response.status} ${response.statusText}`);
        }

        const result = (await response.json()) as { id: string };
        return { id: result.id };
      },
      catch: (error: unknown) =>
        new Error(`Fulfillment order failed: ${error instanceof Error ? error.message : String(error)}`),
    });
  }

  verifyWebhookSignature(body: string, signature: string) {
    return Effect.sync(() => {
      return signature === this.webhookSecret;
    });
  }

  getReturnAddress(): ShippingAddress {
    return {
      firstName: 'Returns',
      lastName: 'Department',
      companyName: 'Demo Company',
      addressLine1: '456 Return Street',
      city: 'Return City',
      state: 'CA',
      postCode: '67890',
      country: 'US',
      email: 'returns@example.com',
      phone: '0987654321',
    };
  }

  buildOrderData(params: {
    orderId: string;
    userId: string;
    productUid: string;
    fileUrl: string;
    quantity: number;
    currency: string;
    shippingAddress: ShippingAddress;
    fulfillmentReferenceId: string;
  }): FulfillmentOrderData {
    return {
      orderReferenceId: params.fulfillmentReferenceId,
      customerReferenceId: params.userId,
      currency: params.currency,
      items: [
        {
          itemReferenceId: `item_${params.orderId}`,
          productUid: params.productUid,
          files: [
            {
              type: 'default',
              url: params.fileUrl,
            },
          ],
          quantity: params.quantity,
        },
      ],
      shipmentMethodUid: 'express',
      shippingAddress: params.shippingAddress,
      returnAddress: this.getReturnAddress(),
    };
  }
}
