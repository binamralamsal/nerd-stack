import { pgTable, serial, text } from "drizzle-orm/pg-core";

export const messageTable = pgTable("message", {
  id: serial("id").primaryKey(),
  message: text("message"),
});
