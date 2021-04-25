const connection = require("./connection.js");
const cTable = require("console.table");

const findAllEmployees = () => {
  const sql = `SELECT * FROM employee`;
  //query the connection between database and console
  //return a promise
  return connection.query(sql);
};

const findAllDepartments = () => {
  const sql = `SELECT * FROM department`;
  return connection.query(sql);
};

const findAllRoles = () => {
  const sql = `SELECT * FROM role`;
  //query the connection between database and console
  return connection.query(sql);
};

const addDepartment = () => {
  const sql = `INSERT INTO department (name)
    VALUES (?)`;
  const params = [department];
  db.query(sql, params, (err, result) => {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log("You have successfully added this department to the database.");
  });
};

const addRole = () => {
  const sql = `INSERT INTO role (title, salary, department_id)
              VALUES (?,?,?)`;
  const params = [role, department, salary];

  db.query(sql, params, (err, result) => {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log("You have successfully added this role to the database.");
  });
};

const addEmployee = () => {
  const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
              VALUES (?,?,?,?)`;
  const params = [firstName, lastName, role, manager];
  db.query(sql, params, (err, result) => {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log("You have successfully added this employee to the database.");
  });
};

const listEmployees = () => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT CONCAT("ID: " id " Name: " first_name, " ", last_name) FROM employee`,
      (err, res) => {
        if (err) reject(err);
        resolve(res);
      }
    );
  });
};

const listRoles = () => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT CONCAT("ID: " id " Title: " title") FROM role`,
      (err, res) => {
        if (err) reject(err);
        resolve(res);
      }
    );
  });
};

const updateRole = async () => {
  let choices = await connection.query.listEmployees();
  console.log(choices);
  return new Promise((resolve, reject) => {
    inquirer
      .prompt([
        {
          type: "list",
          name: "chooseEmployee",
          message: "Select an employee to update. (Required)",
          choices: choices,
        },
      ])
      .then(({ chooseEmployee }) => {
        const id = Number.parseInt(chooseEmployee.split(" ")[1]);
        console.log(id);
        resolve();
      });
    //ask which role
    //split to get role id
    const sql = `UPDATE employee SET role_id = ? 
                    WHERE id = ?`;
    const params = [id, chooseRole];
    db.query(sql, params, (err, result) => {
      if (err) {
        console.log(err.message);
        // check if a record was found
      } else if (!result.affectedRows) {
        console.log("Employee not found");
      } else {
        console.log("You have successfully updated this employee's role.");
      }
    });
  });
};

module.exports = {
  findAllEmployees,
  findAllDepartments,
  findAllRoles,
  addDepartment,
  addRole,
  addEmployee,
  //updateRole,
};
