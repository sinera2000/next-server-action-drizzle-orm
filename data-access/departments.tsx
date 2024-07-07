import { db } from "@/app/db";
import { departments } from "../modules/departments/schema";

export async function allDepartments() {
  return db.query.departments.findMany();
}
