const mysql = require("mysql2");

const connection = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "mysqlPassword1",
    database: "employee_db",
  },
  console.log("Connected to the election database.")
);

module.exports = connection;
