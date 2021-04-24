const connection = require("./connection.js");
const cTable = require("console.table");

//queries
const findAllEmployees = () => {
  const sql = `SELECT * FROM employee`;
  //query the connection between database and console
  connection.query(sql, (err, rows) => {
    if (err) {
      console.log(err.message);
      return;
    }
    console.table(rows);
  });
};

/*
async findAllDepartments() {
    return await this.
}
if (menuData.nextStep === "View all departments") {
if (menuData.nextStep === "View all roles") {
if (menuData.nextStep === "View all employees") {

*/
if (menuData.nextStep === "Add a department") {
    //
    //database call
    const sql = `INSERT INTO candidates (first_name, last_name, industry_connected)
    VALUES (?,?,?)`;
    const params = [body.first_name, body.last_name, body.industry_connected];

    db.query(sql, params, (err, result) => {
    if (err) {
        res.status(400).json({ error: err.message });
        return;
  }
  res.json({
    message: 'success',
    data: body
  });
});

if (menuData.nextStep === "Add a role") {
if (menuData.nextStep === "Add an employee") {
if (menuData.nextStep === "Update an employee role") {

//
const sql = `UPDATE candidates SET party_id = ? 
                 WHERE id = ?`;
    const params = [req.body.party_id, req.params.id];
    db.query(sql, params, (err, result) => {
      if (err) {
        res.status(400).json({ error: err.message });
        // check if a record was found
      } else if (!result.affectedRows) {
        res.json({
          message: 'Candidate not found'
        });
      } else {
        res.json({
          message: 'success',
          data: req.body,
          changes: result.affectedRows
        });
      }
    });
    
UPDATE candidates
SET industry_connected = 1
WHERE id = 3;

INSERT INTO candidates (first_name, last_name, industry_connected)
VALUES
*/
module.exports = { findAllEmployees };
//db
//db.findAllEmployees()
