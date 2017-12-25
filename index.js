//To load express library to the variable express
const express=require("express");
//TO initiate express, so () asks node.js to execute the library
const app=express();
// To tell index.js to go to the path folder of public and run it. First create the constant
const path = require('path');

//to open up the folder by joinng the main directory name and the public folder
app.use(express.static(path.join(__dirname, '/public')));
//test
// Start the server by connecting to the port:
const server = app.listen(3000);
//console.log(server.address().port);
