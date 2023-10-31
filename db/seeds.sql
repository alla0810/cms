INSERT INTO departments (department_name)
VALUES ("Sales"),
       ("Legal"),
       ("Finance"),
       ("Engineering");

INSERT INTO roles (title, department_id, salary)
VALUES ("Sales Lead", 1, 100000),           
       ("Salesperson", 1, 80000),
       ("Lead Engineer", 4, 150000),
       ("Software Engineer", 4, 120000),
       ("Account Manager", 3, 160000),
       ("Accountant", 3, 125000),
       ("Legal Team Lead", 2, 250000),
       ("Lawyer", 2, 190000);

       
INSERT INTO employees (first_name, last_name, manager_id, role_id)
VALUES ("John", "Doe", NULL, 1),
       ("Mike", "Chan", 1, 2),
       ("Ashley", "Rodriguez", NULL, 3),
       ("Kevin", "Tupik", 3, 4),
       ("Kunal", "Singh", NULL, 5),
       ("Malia", "Brown", 5, 6),
       ("Sarah", "Lourd", NULL, 7),
       ("Tom", "Allen", 7, 8);

