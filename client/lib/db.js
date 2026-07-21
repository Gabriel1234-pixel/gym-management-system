import mysql from "mysql2/promise";

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Ian2004kenya@",
  database: "gym_management",
  waitForConnections: true,
  connectionLimit: 10,
});

export default db;
