import { drizzle } from 'drizzle-orm/libsql';
import { createClient } from '@libsql/client';
import * as authSchema from './schema/auth';
import * as orderSchema from './schema/orders';

const client = createClient({
  url: process.env.DATABASE_CONNECTION_URL || "file:./database.db",
  authToken: process.env.DATABASE_AUTH_TOKEN,
});

export const db = drizzle(client, {
  schema: {
    ...authSchema,
    ...orderSchema,
  },
});
