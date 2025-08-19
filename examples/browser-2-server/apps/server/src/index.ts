import "dotenv/config";
import { auth } from "./lib/auth";
import { Hono } from "hono";
import { cors } from "hono/cors";
import { logger } from "hono/logger";
import { serveStatic } from "hono/bun";

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

export default app;
