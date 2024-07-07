import { serial, varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";

export const userRoles = pgTable("roles", {
  id: serial("id").primaryKey(),
  roleName: varchar("role_name").notNull(),
  roleTag: varchar("role_tag").notNull(),
});
