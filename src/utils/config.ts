import postgres from "postgres";
import { database, host, password, username } from "./options";

export const sql = postgres(
  `postgres://${username}:${password}@${host}:5432/${database}`,
  {
    host: host,
    port: 5432,
    database,
    username,
    password,
  }
);
