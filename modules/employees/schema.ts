import { serial, varchar } from "drizzle-orm/pg-core";
import { pgTable } from "drizzle-orm/pg-core";

export const employees = pgTable("employees", {
  id: serial("id").primaryKey(),
  employeeName: varchar("employee_name").notNull(),
  employeeRole: varchar("employee_role").notNull(),
  employeeDepartment: varchar("employee_department").notNull(),
});

export type Employee = typeof employees.$inferSelect;
