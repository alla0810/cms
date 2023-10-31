const express = require('express');
//const inquirer = require('inquirer');
// Import and require mysql2
//const mysql = require('mysql2');

const {
  displaylogo,
  inquireHandler
} = require('./cli/inquireHandler');

//const CliHandler = require('./cli/inquireHandler.js');

const PORT = process.env.PORT || 3001;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});
  
app.listen(PORT, () => {
   console.log(`Server running on port ${PORT}`);
});  

displaylogo();
inquireHandler();