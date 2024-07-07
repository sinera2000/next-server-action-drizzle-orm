import { db } from "@/app/db";
import { employees } from "../modules/employees/schema";

export async function allEmployees() {
  return db.query.employees.findMany();
}
