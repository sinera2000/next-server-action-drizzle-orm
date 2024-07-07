import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import { employees } from "../../../modules/employees/schema";
import { departments } from "../../../modules/departments/schema";
import { userRoles } from "../../../modules/roles/schema";

const pool = new Pool({
  connectionString: "postgres://postgres:postgres@localhost:5432/test_db",
});

const db = drizzle(pool, {
  schema: {
    employees,
    departments,
    userRoles,
  },
});

export { db };
