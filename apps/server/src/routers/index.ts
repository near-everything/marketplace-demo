import {
  protectedProcedure,
  publicProcedure,
} from "../lib/orpc";
import { createCheckoutSession } from "../services/stripe";
import { db } from "../db";
import { order } from "../db/schema/orders";
import { eq } from "drizzle-orm";
import { z } from "zod";

export const appRouter = publicProcedure.router({
  healthCheck: publicProcedure.handler(() => {
    return "OK";
  }),
  privateData: protectedProcedure.handler(({ context }) => {
    return {
      message: "hello world! this is data coming from a protected procedure on your server",
      user: context.session.user,
    };
  }),
  createCheckout: protectedProcedure
    .input(
      z.object({
        successUrl: z.string().url(),
        cancelUrl: z.string().url(),
      })
    )
    .handler(async ({ input, context }) => {
      const { successUrl, cancelUrl } = input;
      const { session } = context;

      if (!session.user?.email) {
        throw new Error("User email is required");
      }

      return await createCheckoutSession({
        userId: session.user.id,
        userEmail: session.user.email,
        successUrl,
        cancelUrl,
      });
    }),
  getOrders: protectedProcedure
    .input(
      z.object({
        limit: z.number().optional().default(10),
        offset: z.number().optional().default(0),
      })
    )
    .handler(async ({ input, context }) => {
      const { session } = context;
      const { limit, offset } = input;

      const orders = await db
        .select()
        .from(order)
        .where(eq(order.userId, session.user.id))
        .limit(limit)
        .offset(offset)
        .orderBy(order.createdAt);

      return orders;
    }),
  getOrder: protectedProcedure
    .input(z.object({ orderId: z.string() }))
    .handler(async ({ input, context }) => {
      const { session } = context;
      const { orderId } = input;

      const orderRecord = await db
        .select()
        .from(order)
        .where(eq(order.id, orderId))
        .then((rows) => rows[0]);

      if (!orderRecord) {
        throw new Error("Order not found");
      }

      // Check if order belongs to user
      if (orderRecord.userId !== session.user.id) {
        throw new Error("Unauthorized");
      }

      return orderRecord;
    }),
});

export type AppRouter = typeof appRouter;
