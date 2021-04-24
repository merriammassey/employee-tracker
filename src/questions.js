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
