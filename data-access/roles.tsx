import { db } from "@/app/db";

export async function allRoles() {
  return db.query.userRoles.findMany();
}
