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
        addDepartment();
        //
        break;
      case "Add a role":
        addRole();
        //
        break;
      case "Add an employee":
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
