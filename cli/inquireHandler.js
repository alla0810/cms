const inquirer = require('inquirer');
var process = require('process');

const {
    ViewAllDepartments,
    ViewAllRoles,
    ViewAllEmployees,
    ViewEmployeesByManager,
    ViewEmployeesByDepartment,
    ViewTotalBudgetDepartment
  } = require('./dbinterface/viewHandler');

  const {
    AddDepartment,
    AddRole,
    AddEmployee
  } = require('./dbinterface/addHandler');
  
  const {
    DeleteDepartment,
    DeleteRole,
    DeleteEmployee
  } = require('./dbinterface/deleteHandler');

  const {
    UpdateEmployeeRole,
    UpdateEmployeeManager
  } = require('./dbinterface/updateHandler');


function displaylogo()
{

    console.warn("-----------------------------------------------------------------");
    console.warn("|                                                               |");
    console.warn("|                      Employee Manager                         |");
    console.warn("|                                                               |");
    console.warn("-----------------------------------------------------------------\n")
    console.warn("\n");


}

function inquireHandler()
{
    console.log("\n\n");

    inquirer.registerPrompt("loop", require("inquirer-loop")(inquirer));

    inquirer
    .prompt([
      {
        type: 'list',
        message: 'What would you like to do?',        
        name: 'list',
        choices: [
            "View All Departments",
            "View All Roles",
            "View All Employees",
//            "View Employees by manager",
//            "View Employees by department",
//            "View the Total Utilized Budget of a Department",
            "Add a Department",
            "Add a Role",
            "Add an Employee",
            "Update Employee Role",
//            "Update an Employee Manager",
//            "Delete a Department",
//            "Delete a role",
//            "Delete an employee",
            "Quit"
        ]
      }   
    ])
    .then((response) =>{
        inquireHandler2(response);
        console.log("\n");

  });
}

function inquireHandler2(response)
{

    switch (response.list)
    {
        case "View All Departments":
                ViewAllDepartments(response);

            break;
        case "View All Roles":
                ViewAllRoles(response);

            break;

        case "View All Employees":
                ViewAllEmployees(response);

            break;

        case "View Employees by manager":
                ViewEmployeesByManager(response);

            break;

        case "View Employees by department":
                ViewEmployeesByDepartment(response);

            break;

        case "View the Total Utilized Budget of a Department":
                ViewTotalBudgetDepartment(response);

            break;

        case "Add a Department":
                AddDepartment(response);

            break;

        case "Add a Role":
                AddRole(response);

            break;

        case "Add an Employee":
                AddEmployee(response);

            break;

        case "Update Employee Role":
                UpdateEmployeeRole(response);

            break;

        case "Update an Employee Manager":
                UpdateEmployeeManager(response);

            break;

        case "Delete a Department":
                DeleteDepartment(response);

            break;

        case "Delete a role":
                DeleteRole(response);

            break;

        case "Delete an employee":
                DeleteEmployee(response);

            break;

        case "Quit":
                // do nothing
                process.exit(0);
            break;
    }
}



module.exports = {
    displaylogo,
    inquireHandler,
    inquireHandler2
};