const connection = require("./connection.js");
const cTable = require("console.table");

//queries
const findAllEmployees = () => {
  const sql = `SELECT * FROM employee`;
  //query the connection between database and console
  connection.query(sql, (err, rows) => {
    if (err) {
      console.log(err.message);
      return;
    }
    console.table(rows);
  });
};

const findAllDepartments = () => {
  const sql = `SELECT * FROM department`;
  //query the connection between database and console
  connection.query(sql, (err, rows) => {
    if (err) {
      console.log(err.message);
      return;
    }
    console.table(rows);
  });
};

const findAllRoles = () => {
  const sql = `SELECT * FROM role`;
  //query the connection between database and console
  connection.query(sql, (err, rows) => {
    if (err) {
      console.log(err.message);
      return;
    }
    console.table(rows);
  });
};

const addDepartment = () => {
  const sql = `INSERT INTO department (name)
    VALUES (?)`;
  const params = [department];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: body,
    });
  });
};

const addRole = () => {
  const sql = `INSERT INTO role (title, salary department_id)
              VALUES (?,?,?)`;
  const params = [role, department, salary];

  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: body,
    });
  });
};

const addEmployee = () => {
  const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
              VALUES (?,?,?,?)`;
  const params = [firstName, lastName, role, manager];
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      return;
    }
    res.json({
      message: "success",
      data: body,
    });
  });
};

const updateRole = () => {
  const sql = `UPDATE employee SET role_id = ? 
                WHERE employee = ?`;
  const params = [employee, role];
  db.query(sql, params, (err, result) => {
    if (err) {
      res.status(400).json({ error: err.message });
      // check if a record was found
    } else if (!result.affectedRows) {
      res.json({
        message: "Employee not found",
      });
    } else {
      res.json({
        message: "success",
        data: req.body,
        changes: result.affectedRows,
      });
    }
  });
};

module.exports = {
  findAllEmployees,
  findAllDepartments,
  findAllRoles,
  addDepartment,
  addRole,
  addEmployee,
  updateRole,
};
