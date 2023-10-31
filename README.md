# CMS (Content Management System ) 
  * Author: Kyosook Shin
  * Author's Email: kyosook.shin@gmail.com  
  * GitHub: https://github.com/alla0810/cms
  * screenshot  

<img src='./images/screen1.png' width="400">  
<img src='./images/screen2.png' width="600">
<img src='./images/screen3.png' width="300">  


## Source Code References
  This project has used some reference codes from the following sites

   * https://git.bootcampcontent.com/University-of-Texas-at-Austin/UTA-VIRT-FSF-PT-07-2023-U-LOLC.git   

   
## User Story

AS a business owner
I WANT to be able to view and manage the departments, roles, and employees in my company
SO THAT I can organize and plan my business


## Acceptance Criteria

GIVEN a command-line application that accepts user input

* WHEN I start the application, THEN I am presented with the following options: view all roles, view all employees, add a department, add a role, add an employee, and update an employee role

* WHEN I choose to view all departments, THEN I am presented with a formatted table showing department names and department ids

* WHEN I choose to view all roles, THEN I am presented with the job title, role id, the department that role belongs to, and the salary for that role.

* WHEN I choose to view all employees, THEN I am presented with a formatted table showing employee data, including employee ids, first names, last names, job titles, departments, salaries, and managers that the employees report to.

* WHEN I choose to add a department, THEN I am prompted to enter the name of the department and that department is added to the database.

* WHEN I choose to add a role, THEN I am prompted to enter the name, salary, and department for the role and that role is added to the database.

* WHEN I choose to add an employee, THEN I am prompted to enter the employee's first name, last name, role, and manager, and that employee is added to the database

* When I choose to update an employee role, THEN I am prompted to select an employee to update and their new role and this information is updated in the database.


## Mock-Up
The following animation shows the web application's appearance and functionality

<img src='./public/assets/images/11-express-homework-demo.gif' width="600" >

## Getting Started
You'll need to use the MySQL2 package to connect to your MySQL database and perform queries, and the Inquirer package to interact with the user via the command line.

You might also want to make your queires asynchronous.  MySQL2 exposes a `.promise()` function on Connections to upgrade an exisiting non-Promise connection to use Promises.

Design the database schema as shown in the following image:

<img src='./images/12-sql-homework-demo-01.png' width="600" >

As the image illustrates, your schema should contain the following three tables:

* `department`  
  * `id`: `INT PRIMARY KEY`
  * `name`: `VARCHAR(30)` to hold department name

* `role`  
  * `id`: `INT PRIMARY KEY`
  * `title`: `VARCHAR(30)` to hold role title
  * `salary`: `DECIMAL` to hold role salary
  * `department_id`: `INT` to hold reference to department role belongs to

* `emplyee`  
  * `id`: `INT PRIMARY KEY`
  * `first_name`: `VARCHAR(30)` to hold employee first name
  * `last_name`: `VARCHAR(30)` to hold employee last name
  * `role_id`: `INT` to hold reference to employee role
  * `manager_id`: `INT` to hold reference to another employee that is the manager of the current employee (`null` if the employee has no manager)

  You might want to use a separate file that contains functions for performing specific SQL queries you'll need to use.  A constructor function or class could be helpful for organizing these.  You might also want to include a `seeds.sql` file to pre-populate your database, making the development of individual features much easier.

## Bonus
Try to add some additional functionality to your application, such as the ability to do the following:
* Update employee managers
* View employees by manager
* View employees by department
* Delete departments, roles, and employees
* View the total utilized budget of a department - in other words, the combined salaries of all employees in that department.

## Delierables: 10%
* Your GitHub repository containing your application code.

## Walkthrough Video: 27%
* A walkthrough video that demonstrates the functionality of the employee tracker must be submitted, and a link to the video should be included in your README file
* The walkthrough video must show all of the technical acceptance criteria being met.
* The walkthrough video must demonstrate how a user would invoke the application from the command line.
* The walkthrough video must demonstrate a functional menu with the options outlined in the acceptance criteria.

## Technical Acceptance Criteria: 40%
* Satisfies all of the preceding acceptance criteria plus the following:  
  * Uses the Inquirer package
  * Uses the MySQL2 package to connect to a MySQL database
* Follows the table schema outlined in the homework instructions.

## Repository Quality: 13%
* Repository has a unique name.
* Repository follows best practices for file structure and naming conventions.
* Repository follows best practices for class/id naming conventions, indentation, high-quality comments, etc.
* Repository contains multiple descriptive commit messages.
* Repository contains a high-quality README file with description, a link to walkthrough video.

## Application Quality: 10%
* The application user experience is intuitive and easy to navigate.

## Bonus
Fulfilling any of the following can add up to 20 points to your grade.  Note that the highest grade you can achieve is still 100:
* Application allows users to update employee managers (2 points).
* Application allows users to view employees by manager (2 points).
* Application allows users to view employees by department (2 points).
* Application allows users to delete departments, roles, and employees (2 points for each).
* Application allows users to view the total utilized budget of a department - in other words, the combined salaries of all employees in that department (8 points).