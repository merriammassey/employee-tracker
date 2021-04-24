const {
  findAllEmployees,
  findAllDepartments,
  findAllRoles,
  addDepartment,
  addRole,
  addEmployee,
  updateRole,
} = require("./db/queries.js");
const inquirer = require("inquirer");
const {
  menuQuestion,
  employeeQuestions,
  deptQuestion,
  roleQuestions,
} = require("./src/questions");

const chooseQuery = () => {
  inquirer.prompt(menuQuestion).then((menuData) => {
    console.log(menuData);
    switch (menuData.nextStep) {
      case "View all employees":
        findAllEmployees();
        //
        break;
      case "View all departments":
        findAllDepartments();
        //
        break;
      case "View all roles":
        findAllRoles();
        //
        break;
      case "Add a department": 
        inquirer.prompt(deptQuestion).then((menuData) => 
        addDepartment();
        //
        break;
      case "Add a role":
        inquirer.prompt(roleQuestions).then((menuData) => 
        addRole();
        //
        break;
      case "Add an employee":
        inquirer.prompt(employeeQuestions).then((menuData) => 
        addEmployee();
        //
        break;
      case "Update an employee role":
        updateRole();
        //
        break;
    }
  });
};

chooseQuery();
