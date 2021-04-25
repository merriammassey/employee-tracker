const {
  findAllEmployees,
  findAllDepartments,
  findAllRoles,
  addDepartment,
  addRole,
  addEmployee,
  //updateRole,
} = require("./db/queries.js");
const inquirer = require("inquirer");
const {
  menuQuestion,
  employeeQuestions,
  deptQuestion,
  roleQuestions,
} = require("./src/questions");

const showAllEmployees = async () => {
  const employees = await findAllEmployees();
  console.table(employees);
  chooseQuery();
};

const showAllDepartments = async () => {
  const departments = await findAllDepartments();
  console.table(departments);
  chooseQuery();
};

const showAllRoles = async () => {
  const roles = await findAllRoles();
  console.table(roles);
  chooseQuery();
};

const chooseQuery = () => {
  inquirer.prompt(menuQuestion).then((menuData) => {
    console.log(menuData);
    switch (menuData.nextStep) {
      case "View all employees":
        return showAllEmployees();
      case "View all departments":
        return showAllDepartments();
      case "View all roles":
        return showAllRoles();
      case "Add a department":
        return addDepartment();
      case "Add a role":
        return addRole();
      case "Add an employee":
        return addEmployee();
      //case "Update an employee role":
      //return updateRole();
    }
  });
};

chooseQuery();
