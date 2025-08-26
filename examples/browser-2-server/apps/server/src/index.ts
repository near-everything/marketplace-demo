import { trpcServer } from "@hono/trpc-server";
import "dotenv/config";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { proxy } from "hono/proxy";
import { auth } from "./lib/auth";
import { createContext } from "./lib/context";
import { appRouter } from "./routers";
import { migrate } from "drizzle-orm/postgres-js/migrator";
import { db } from "./db";

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

// Reverse proxy for frontend requests
app.all('/proxy/*', (c) => {
  const path = c.req.path.replace('/proxy/', '') || '';
  const frontendDomain = process.env.FRONTEND_DOMAIN || "https://better-near-auth.near.page";
  
  return proxy(`${frontendDomain}/${path}`, {
    ...c.req, // Forward all request data including credentials
    headers: {
      ...c.req.header(),
      'X-Forwarded-For': c.req.header('x-forwarded-for') || c.req.header('x-real-ip') || '127.0.0.1',
      'X-Forwarded-Host': c.req.header('host'),
    },
  });
});

app.on(["POST", "GET"], "/api/auth/**", (c) => auth.handler(c.req.raw));

app.use(
  "/trpc/*",
  trpcServer({
    router: appRouter,
    createContext: (_opts, context) => {
      return createContext({ context });
    },
  })
);

try {
  console.log("Migrating database...");
  migrate(db, {
    migrationsFolder: `${process.cwd()}/migrations`,
  });
} catch (error) {
  console.error(error);
}


export default app;
