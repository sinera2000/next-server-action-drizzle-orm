"use server";

import { db } from "@/app/db";

import { employees } from "../../../../modules/employees/schema";
import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";

export async function addEmployees(formData: FormData) {
  const employeeName = formData.get("employee_name") as string;
  const employeeRole = formData.get("employee_role") as string;
  const employeeDepartment = formData.get("employee_department") as string;

  console.log("Form Data:", { employeeName, employeeRole, employeeDepartment });

  try {
    await db.insert(employees).values({
      employeeName,
      employeeRole,
      employeeDepartment,
    });
    console.log("Employee inserted successfully");
    revalidatePath("/");
  } catch (error) {
    console.error("Error inserting employee:", error);
  }
}

export async function deleteEmployee(employeeId: number) {
  try {
    await db.delete(employees).where(eq(employees.id, employeeId));
    console.log("Employee deleted successfully");
    revalidatePath("/");
  } catch (error) {
    console.error("Error deleting employee:", error);
  }
}
