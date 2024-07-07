"use server";

import { db } from "@/app/db";
import { tasks } from "../../../../modules/tasks/schema";

export async function addTasks(formData: FormData) {
  const taskName = formData.get("task_name") as string;

  console.log("Form Data:", { taskName });

  try {
    await db.insert(tasks).values({
      taskName,
    });
    console.log("Task inserted successfully");
  } catch (error) {
    console.error("Error inserting task:", error);
  }
}
