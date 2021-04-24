/*

WHEN I choose to add a department
THEN I am prompted to enter the name of the department and that department is added to the database

WHEN I choose to add a role
THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database

WHEN I choose to add an employee
THEN I am prompted to enter the employee’s first name, last name, role, and manager and that employee is added to the database

WHEN I choose to update an employee role
THEN I am prompted to select an employee to update and their new role and this information is updated in the database 
*/

const deptQuestion = [
  {
    type: "input",
    name: "department",
    message: "What is the name of the department? (Required)",
    validate: (idInput) => {
      if (idInput) {
        return true;
      } else {
        console.log("Please enter the department name.");
        return false;
      }
    },
  },
];

const roleQuestions = [
  {
    type: "input",
    name: "role",
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
    type: "input",
    name: "department",
    message: "What is the name of the department? (Required)",
    validate: (idInput) => {
      if (idInput) {
        return true;
      } else {
        console.log("Please enter the department name.");
        return false;
      }
    },
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
];

const employeeQuestions = [
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
    type: "input",
    name: "role",
    message: "What is the employee's role? (Required)",
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
    type: "input",
    name: "manager",
    message: "What is the employee's manager? (Required)",
    validate: (idInput) => {
      if (idInput) {
        return true;
      } else {
        console.log("Please enter the manager name.");
        return false;
      }
    },
  },
];

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
  employeeQuestions,
  deptQuestion,
  roleQuestions,
};
