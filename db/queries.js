const connection = require("./connection.js");
const cTable = require("console.table");
const inquirer = require("inquirer");

const findAllEmployees = () => {
  const sql = `SELECT employee.id, employee.first_name, employee.last_name, title, department.name, role.salary, manager.first_name, manager.last_name FROM employee
  LEFT JOIN role ON employee.role_id = role.id
  LEFT JOIN department ON role.department_id = department.id 
  LEFT JOIN employee as manager ON employee.manager_id = manager.id;`;
  return connection.query(sql);
};

const findAllDepartments = () => {
  const sql = `SELECT * FROM department`;
  return connection.query(sql);
};

const findAllRoles = () => {
  const sql = `SELECT * FROM role`;
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

let listRoles = () => {
  return connection.query(`SELECT role.id, role.title FROM role`);
};

let listEmployees = () => {
  return connection.query(
    `SELECT employee.id, employee.first_name, employee.last_name FROM employee`
  );
};

let listDepartments = () => {
  return connection.query(
    `SELECT department.name, department.id FROM department`
  );
};

const runEmployeeQuestions = async () => {
  let roleChoices = await listRoles();
  let managerChoices = await listEmployees();
  roleChoices = roleChoices.map(({ id, title }) => ({
    name: title,
    value: id,
  }));
  managerChoices = managerChoices.map(({ id, first_name, last_name }) => ({
    name: first_name + " " + last_name,
    value: id,
  }));
  inquirer
    .prompt([
      {
        type: "input",
        name: "firstName",
        message: "What is the first name? (Required)",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter the first name.");
            return false;
          }
        },
      },
      {
        type: "input",
        name: "lastName",
        message: "What is the last name? (Required)",
        validate: (idInput) => {
          if (idInput) {
            return true;
          } else {
            console.log("Please enter the last name.");
            return false;
          }
        },
      },
      {
        type: "list",
        name: "role",
        message: "What is the employee's role? (Required)",
        choices: roleChoices,
      },
      {
        type: "list",
        name: "manager",
        message: "Who is the employee's manager?",
        choices: managerChoices,
      },
    ])
    .then((answers) => {
      const sql = `INSERT INTO employee (first_name, last_name, role_id, manager_id)
              VALUES (?,?,?,?)`;
      const params = [
        answers.firstName,
        answers.lastName,
        answers.role,
        answers.manager,
      ];
      connection.query(sql, params, (err, result) => {
        if (err) {
          console.log(err.message);
          return;
        }
        console.log(
          "You have successfully added this employee to the database."
        );
      });
      console.log(answers);
      return answers;
    });
};

const runRoleQuestions = async () => {
  let choices = await listDepartments();
  //console.log(choices);
  let departmentChoices = choices.map(({ id, name }) => ({
    name: name,
    value: id,
  }));
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
    });
};

const addRole = async () => {
  await runRoleQuestions();
};

const addEmployee = async () => {
  await runEmployeeQuestions();
};

const updateRole = async () => {
  let employeeChoices = await listEmployees();
  let roleChoices = await listRoles();
  roleChoices = roleChoices.map(({ id, title }) => ({
    name: title,
    value: id,
  }));
  employeeChoices = employeeChoices.map(({ id, first_name, last_name }) => ({
    name: first_name + " " + last_name,
    value: id,
  }));
  inquirer
    .prompt([
      {
        type: "list",
        name: "chooseEmployee",
        message: "What is the name of the employee? (Required)",
        choices: employeeChoices,
      },
      {
        type: "list",
        name: "chooseRole",
        message: "What is the name of the role? (Required)",
        choices: roleChoices,
      },
    ])
    .then((answers) => {
      const sql = `UPDATE employee SET role_id = ? 
                    WHERE id = ?`;
      const params = [answers.chooseRole, answers.chooseEmployee];
      connection.query(sql, params, (err, result) => {
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
  updateRole,
};
