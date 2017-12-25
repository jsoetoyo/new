//To load express library to the variable express
const express=require("express");
//TO initiate express, so () asks node.js to execute the library
const app=express();
// To tell index.js to go to the path folder of public and run it. First create the constant
const path = require('path');

const bodyParser= require ('body-parser');

// Use native Node promises
//mongoose.Promise = global.Promise;
// connect to database
var mongoose = require('mongoose');
mongoose.connect("mongodb://Jeth:12345678@localhost:37017/new")
.then(res => {
console.log('connection succesful')
})
.catch((err) => console.error(err));

//to open up the folder by joinng the main directory name and the public folder
app.use(express.static(path.join(__dirname, '/public')));
app.use(bodyParser.json({ limit: '10mb' }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }));

var tx= require('./routes/tx');
app.use("/tx",tx)
//test
// Start the server by connecting to the port:
const server = app.listen(3000);
//console.log(server.address().port);
