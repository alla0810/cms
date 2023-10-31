// Import and require mysql2
const mysql = require('mysql2');
require('dotenv').config();

// Connect to database
const db = mysql.createConnection(
    {
      host: 'localhost',
      // MySQL username,
      user: process.env.DB_USER,
      // MySQL password
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME
    },
//    console.log(`Connected to the cms_db database.`)
  );
  


function ViewAllDepartments(response)
{
  // Query database
  db.query('SELECT * FROM departments;', function (err, results) {

//    console.log("\n\n");
    console.table(results);    
  });

    console.log("\n\n");

}

function ViewAllRoles(response)
{
    const sql = 'select * from roles join departments on roles.department_id = departments.department_id order by roles.role_id;';

    db.query(sql, function (err, results) {
//        console.log("\n\n");
//        console.log(results);
        console.table(results, ["role_id", "title", "department_name", "salary"]);
      });
    
        console.log("\n\n");
    

}


function ViewAllEmployees(response)
{
  const sql1 = 'select * from employees join roles on employees.role_id = roles.role_id join departments on roles.department_id = departments.department_id order by employees.employee_id;';
  let employee_list = [];

//  console.log(sql1);


  db.query(sql1, (err, results) => {
//    console.table(results);    

    for (let i=0; i<results.length; i++)
    {
      let id = results[i].employee_id;
      let first_name = results[i].first_name;
      let last_name = results[i].last_name;
      let title = results[i].title;
      let department = results[i].department_name;
      let salary = results[i].salary;
      let manager_name = null;
      
      if (results[i].manager_id != null)
      {
        let manager_id = results[i].manager_id;
        let manager_obj = results.filter(entry => entry.employee_id === manager_id);
        let manager_first_name = manager_obj[0].first_name;
        let manager_last_name = manager_obj[0].last_name;
        manager_name = manager_first_name.concat(" ", manager_last_name);
      }

      employee_list[i] = {
        "id": id,
        "first_name": first_name,
        "last_name": last_name,
        "title": title,
        "department": department,
        "salary": salary,
        "manager": manager_name
      }
    }
//      console.log("\n\n");
      console.table(employee_list);
  });  

}




function ViewEmployeesByManager(response)
{

}

function ViewEmployeesByDepartment(response)
{

}

function ViewTotalBudgetDepartment(response)
{

}

module.exports = {
    ViewAllDepartments,
    ViewAllRoles,
    ViewAllEmployees,
    ViewEmployeesByManager,
    ViewEmployeesByDepartment,
    ViewTotalBudgetDepartment
};