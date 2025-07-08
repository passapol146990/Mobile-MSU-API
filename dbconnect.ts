import mysql from "mysql";

export const conn = mysql.createPool({
  connectionLimit: 10,
  host: "202.28.34.197",
  user: "tripbooking",
  password: "tripbooking",
  database: "tripbooking",
});