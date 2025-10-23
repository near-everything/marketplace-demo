import { sql } from "drizzle-orm";
import { sqliteTable, text, integer } from "drizzle-orm/sqlite-core";
import { user } from "./auth";

export const order = sqliteTable("order", {
  id: text("id").primaryKey().$defaultFn(() => crypto.randomUUID()),
  userId: text("user_id")
    .notNull()
    .references(() => user.id, { onDelete: "cascade" }),
  stripeSessionId: text("stripe_session_id").unique(),
  gelatoOrderId: text("gelato_order_id"),
  gelatoReferenceId: text("gelato_reference_id").notNull().unique(),
  productUid: text("product_uid").notNull(),
  status: text("status", { enum: ["pending", "paid", "processing", "printing", "shipped", "delivered", "cancelled"] }).default("pending").notNull(),
  shippingAddress: text("shipping_address", { mode: "json" }),
  fileUrl: text("file_url"),
  quantity: integer("quantity").default(1).notNull(),
  totalAmount: integer("total_amount"),
  currency: text("currency").default("USD"),
  createdAt: integer("created_at", { mode: "timestamp_ms" })
    .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
    .notNull(),
  updatedAt: integer("updated_at", { mode: "timestamp_ms" })
    .default(sql`(cast(unixepoch('subsecond') * 1000 as integer))`)
    .$onUpdate(() => new Date())
    .notNull(),
});
