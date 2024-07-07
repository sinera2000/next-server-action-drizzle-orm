import { serial, varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";

export const departments = pgTable("departments", {
  id: serial("id").primaryKey(),
  departmentName: varchar("department_name").notNull().unique(),
  departmentCode: varchar("department_code").notNull().unique(),
});

export type Department = typeof departments.$inferSelect;
