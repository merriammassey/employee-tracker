const { findAllEmployees } = require("./db/queries.js");
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
    if (menuData.nextStep === "View all employees") {
      findAllEmployees();
    }
  });
};
/*
    if (menuData.nextStep === "View all departments") {
    if (menuData.nextStep === "View all roles") {
    if (menuData.nextStep === "View all employees") {
    if (menuData.nextStep === "Add a department") {
    if (menuData.nextStep === "Add a role") {
    if (menuData.nextStep === "Add an employee") {
    if (menuData.nextStep === "Update an employee role") {

    
  });
};
*/
chooseQuery();
