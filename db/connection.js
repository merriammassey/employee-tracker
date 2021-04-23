const mysql = require("mysql2");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "mysqlPassword1",
  database: "employee_db",
});

connection.connect(function (err) {
  if (err) {
    throw err;
  } else {
    console.log(`succesfully connected at ${connection.threadId}`);
  }
});
