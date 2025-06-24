import mysql from "mysql";

export const conn = mysql.createPool({
  connectionLimit: 10,
  host: "localhost",
  user: "passapol",
  password: "123456",
  database: "app_db",
});