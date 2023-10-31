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



function AddDepartment(response)
{
    console.log("\n\n");

    inquirer
    .prompt({
        type: 'input',
        name: 'newDepartment',
        message: 'What is the name of the department?',
    })
    .then( (response) => {        
        let sql = "insert into departments (department_name) values ('" + response.newDepartment + "');";

        console.log(sql);

        db.query(sql, function (err, results) {
            console.log("Added ", response.newDepartment, " to the database");

            return;
        });
    });

}

function AddRole(response)
{
    console.log("\n\n");
    let sql = 'select * from departments;';
    let department_list = [];

    db.query(sql, function (err, results) {
//        console.log(results);

        for (let i=0; i<results.length; i++)
        {
            department_list[i] = results[i].department_name;
        }

        inquirer
        .prompt([
            {
                type: 'input',
                name: 'role',
                message: 'What is the name of the role?',
            },
            {
                type: 'input',
                name: 'salary',
                message: 'What is the salary of the role?'
            },

            {
                type: 'list',
                name: 'department',
                message: 'Which department does the role belong to?',
                choices: department_list 
            }

        ])
        .then( (response) => {        

//            console.log(response);

            let title = response.role;
            let salary = response.salary;
            let department = response.department;
            let department_obj = results.filter(entry => entry.department_name === department);
            let department_id = department_obj[0].department_id;

//            console.log(department_id);

            let sql2 = "insert into roles (title, department_id, salary) values ('" + title + "', " + department_id + ", " + salary + ");";
    
//            console.log(sql2);

            db.query(sql2, function (err, results) {
                console.log("Added ", title, " to the database");
    
                return;
            });

        });
    });

}

function AddEmployee(response)
{
    console.log("\n\n");
    let sql = 'select * from roles;';
    let role_list = [];

    db.query(sql, function (err, results) {
//       console.log(results);
        
       for (let i=0; i<results.length; i++)
        {
            role_list[i] = results[i].title;
        }
//        console.log(role_list);

        let sql2 = 'select * from employees';
        let manager_list = [];
        db.query(sql2, function (err, result2) {
//            console.log(result2);

            for (let i=0; i<result2.length; i++)
            {
                let first_name = result2[i].first_name;
                let last_name = result2[i].last_name;

                manager_list[i] = first_name.concat(" ", last_name);
            }

//            console.log(manager_list);

            inquirer
            .prompt([
                {
                    type: 'input',
                    name: 'first_name',
                    message: "What is the employee's first name?",
                },
                {
                    type: 'input',
                    name: 'last_name',
                    message: "What is the employee's last name?"
                },
    
                {
                    type: 'list',
                    name: 'role',
                    message: "What is the employee's role?",
                    choices: role_list 
                },
                {
                    type: 'list',
                    name: 'manager',
                    message: "Who is the employee's manager?",
                    choices: manager_list 
                },
    
            ])
            .then( (response) => {    
                console.log(response);

                let first_name = response.first_name;
                let last_name = response.last_name;
                let role = response.role;
                let role_obj = results.filter(entry => entry.title === role);
                let role_id = role_obj[0].role_id;
    
                let manager_name = response.manager;
                let manager_name_array = manager_name.split(" ");
                let manager_first_name = manager_name_array[0];
                let manager_last_name = manager_name_array[1];

                let manager_obj = result2.filter(entry => entry.first_name === manager_first_name && entry.last_name === manager_last_name);
                let manager_id = manager_obj[0].employee_id;

                // console.log("first name", first_name);
                // console.log("last_name", last_name);
                // console.log("manager_id", manager_id);
                // console.log("role_id", role_id);


                let sql3 = "insert into employees (first_name, last_name, manager_id, role_id) values (" 
                            + "'" + first_name + "', '" + last_name + "', " + manager_id + ", " + role_id + ");"; 
                
//                console.log(sql3);

                db.query(sql3, function (err, results) {
                    console.log("Added ", first_name, " ", last_name, " to the database");                    
                });
            });
        });
    });
}


module.exports = {
    AddDepartment,
    AddRole,
    AddEmployee
};