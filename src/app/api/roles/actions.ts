"use server";

import { db } from "@/app/db";

import { userRoles } from "../../../../modules/roles/schema";

export async function addRoles(formData: FormData) {
  const roleName = formData.get("role_name") as string;
  const roleTag = formData.get("role_tag") as string;

  console.log("Form Data:", { roleName, roleTag });

  try {
    await db.insert(userRoles).values({
      roleName,
      roleTag,
    });
    console.log("Employee inserted successfully");
  } catch (error) {
    console.error("Error inserting employee:", error);
  }
}
