const inquirer = require('inquirer');
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



function UpdateEmployeeRole(response)
{
    console.log("UpdateEmployeeRole");

    console.log("\n");
    
    let sql = 'select * from employees;';
    let employee_list = [];

    db.query(sql, function (err, results) {
        console.log(results);

        for (let i=0; i<results.length; i++)
        {
            let first_name = results[i].first_name;
            let last_name = results[i].last_name;
            employee_list[i] = first_name.concat(" ", last_name);
        }

//        console.log(employee_list);

        let sql2 = 'select * from roles;';
        let role_list = [];

        db.query(sql2, function (err, result2) {
            for (let i=0; i<result2.length; i++)
            {
                role_list[i] = result2[i].title;
            }

//            console.log(role_list);

            inquirer
            .prompt([
                {
                    type: 'list',
                    name: 'employee',
                    message: "Which employee's role do you want to update?",
                    choices: employee_list 
                },
                {
                    type: 'list',
                    name: 'role',
                    message: "Which role do you want to assign the selected employee?",
                    choices: role_list 
                },
    
            ])
            .then( (response) => {    
//                console.log(response);

                let employee_name = response.employee;
                let employee_name_array = employee_name.split(" ");
                let first_name = employee_name_array[0];
                let last_name = employee_name_array[1];

                let employee_obj = results.filter(entry => entry.first_name === first_name && entry.last_name === last_name);
                let employee_id = employee_obj[0].employee_id;

                let role = response.role;
                let role_obj = result2.filter(entry => entry.title === role);
                let role_id = role_obj[0].role_id;

                let sql3 = 'update employees set role_id = ' + role_id + ' where employee_id = ' + employee_id + ';';

                db.query(sql3, function (err, result3) {
                    console.log("Updated ", employee_name, "'s role");
                });
            });
        });
    });
}

function UpdateEmployeeManager(response)
{

}


module.exports = {
    UpdateEmployeeRole,
    UpdateEmployeeManager
};