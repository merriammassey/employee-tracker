const connection = require("./connection.js");
const cTable = require("console.table");
const inquirer = require("inquirer");
const {
  employeeQuestions,
  deptQuestion,
  roleQuestions,
} = require("../src/questions");

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

const addDepartment = async () => {
  const name = await inquirer.prompt(deptQuestion);
  console.log(name.name);
  const sql = `INSERT INTO department (name)
    VALUES (?)`;
  const params = name.name;
  connection.query(sql, params, (err, result) => {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log("You have successfully added this department to the database.");
  });
};

//make a list of departments and dept IDs by concating those columns from department table
let listDepartments = () => {
  /*return new Promise((resolve, reject) => {
    connection.query(
      `SELECT CONCAT("ID: ", id, " Department: ", name) as Department FROM department`,
      (err, res) => {
        if (err) reject(err);
        resolve(res);
      }
    ); 
  }); */
  return connection.query(
    `SELECT department.name, department.id FROM department`
  );
};

//use list of departments and dept IDs in inquirer questions for adding a role
const runRoleQuestions = async () => {
  let choices = await listDepartments();
  console.log(choices);
  let departmentChoices = choices.map(({ id, name }) => ({
    name: name,
    value: id,
  }));
  //return new Promise((resolve, reject) => {
  inquirer
    .prompt([
      {
        type: "input",
        name: "title",
        message: "What is the name of the role? (Required)",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter the role name.");
            return false;
          }
        },
      },
      {
        type: "list",
        name: "department",
        message: "Choose the department for this role. (Required)",
        choices: departmentChoices,
      },
      {
        type: "input",
        name: "salary",
        message: "What is the salary for this role? (Required)",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter the salary.");
            return false;
          }
        },
      },
    ])
    .then((answers) => {
      const sql = `INSERT INTO role (title, salary, department_id)
              VALUES (?,?,?)`;
      const params = [answers.title, answers.salary, answers.department];
      connection.query(sql, params, (err, result) => {
        if (err) {
          console.log(err.message);
          return;
        }
        console.log("You have successfully added this role to the database.");
      });
      console.log(answers);
      return answers;
      //resolve();
      //});
    });
};

const addRole = async () => {
  //let { title, department, salary } =
  await runRoleQuestions();
  //const department_id = Number.parseInt(department.split(" ")[1]);
  //console.log(department_id);
  //department_id = department;
  /* const sql = `INSERT INTO role (title, salary, department_id)
              VALUES (?,?,?)`;
  const params = [title, salary, department_id];
  connection.query(sql, params, (err, result) => {
    if (err) {
      console.log(err.message);
      return;
    }
    console.log("You have successfully added this role to the database.");
  }); */
};

const addEmployee = () => {
  const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
              VALUES (?,?,?,?)`;
  const params = [firstName, lastName, role, manager];
  connection.query(sql, params, (err, result) => {
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
  //listEmployees,
  //listRoles,
  //listDepartments,
};
//module.exports = departmentChoices;
