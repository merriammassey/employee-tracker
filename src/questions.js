const departmentChoices = require("../db/queries.js");

const deptQuestion = [
  {
    type: "input",
    name: "name",
    message: "What is the name of the department? (Required)",
    validate: (name) => {
      if (name) {
        return true;
      } else {
        console.log("Please enter the department name.");
        return false;
      }
    },
  },
];
/*
const roleQuestions = [
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
    //make this *select* department not enter department
    type: "list",
    name: "department",
    message: "Choose the department for this role. (Required)",
    choices: [${connection.query(
        `SELECT CONCAT("ID: ", id, " Department: ", name) FROM department`),
        (err, res) => {
          if (err) reject(err);
          resolve(res);
          //return departmentChoices;
        },
  }],
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
];

const employeeQuestions = 

const UpdateRoleQuestions = [
  {
    type: "list",
    name: "chooseEmployee",
    message: "What is the name of the employee? (Required)",
    choices: [
      //list employees
    ],
  },
  {
    type: "list",
    name: "chooseRole",
    message: "What is the name of the role? (Required)",
    choices: [
      //list employees
    ],
  },
];
*/
const menuQuestion = {
  type: "list",
  name: "nextStep",
  message: "What would you like to do?",
  choices: [
    "View all departments",
    "View all roles",
    "View all employees",
    "Add a department",
    "Add a role",
    "Add an employee",
    "Update an employee role",
  ],
};

module.exports = {
  menuQuestion,
  //employeeQuestions,
  deptQuestion,
  //roleQuestions,
};
