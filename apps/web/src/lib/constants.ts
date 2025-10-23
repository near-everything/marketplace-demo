export const TSHIRT_PRODUCT = {
  name: "Demo T-Shirt",
  productUid: "apparel_product_gca_t-shirt_gsc_crewneck_gcu_unisex_gqa_classic_gsi_s_gco_white_gpr_4-4",
  price: 2999, // $29.99 in cents
  currency: "USD",
  fileUrl: "https://cdn-origin.gelato-api-dashboard.ie.live.gelato.tech/docs/sample-print-files/logo.png",
  description: "Classic white unisex t-shirt with custom print",
  size: "S",
  color: "white",
};

export const ORDER_STATUS = {
  PENDING: "pending",
  PAID: "paid",
  PROCESSING: "processing",
  PRINTING: "printing",
  SHIPPED: "shipped",
  DELIVERED: "delivered",
  CANCELLED: "cancelled",
} as const;

export type OrderStatus = typeof ORDER_STATUS[keyof typeof ORDER_STATUS];
