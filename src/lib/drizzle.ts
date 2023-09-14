import { drizzle } from 'drizzle-orm/vercel-postgres';
import { sql } from '@vercel/postgres';
import { integer, pgTable, serial, text, timestamp, varchar } from 'drizzle-orm/pg-core';
import { InferModel } from 'drizzle-orm';

export const cartTableDrizzle = pgTable("cart", {
    product_id: varchar("product_id", { length: 255 }).notNull(),
    quantity: integer("quantity"),
    user_id: varchar("user_id", { length: 255 }).notNull(),
    price: integer("price"),
});

export type typeOfCartTable = InferModel<typeof cartTableDrizzle>

export const db = drizzle(sql);