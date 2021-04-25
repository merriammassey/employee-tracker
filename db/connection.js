const mysql = require("mysql2");
const util = require("util");

const connection = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    password: "mysqlPassword1",
    database: "employee_db",
  },
  console.log("Connected to the employee_db database.")
);
//allows async await
connection.query = util.promisify(connection.query);
module.exports = connection;
