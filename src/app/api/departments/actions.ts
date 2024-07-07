"use server";

import { db } from "@/app/db";

import { eq } from "drizzle-orm";
import { revalidatePath } from "next/cache";
import { departments } from "../../../../modules/departments/schema";

export async function addDepartment(formData: FormData) {
  const departmentName = formData.get("department_name") as string;
  const departmentCode = formData.get("department_code") as string;

  console.log("Form Data:", { departmentName, departmentCode });

  try {
    await db.insert(departments).values({
      departmentName,
      departmentCode,
    });
    console.log("department inserted successfully");
    revalidatePath("/");
  } catch (error) {
    console.error("Error inserting department:", error);
  }
}
