// Importing packages to app.js file for instalation 

const express = require("express"); 
const mongoose = require("mongoose");
const dotenv = require("dotenv");

// Loading env variable like port and DBURL

dotenv.config({path:".env"});
const PORT = process.env.PORT;
const dbURI = process.env.DATABASE_URL;

//Importing models from models folder

const Tasks = require("./models/todo");

//Database connection 

const connect = mongoose.connect(dbURI,{
    useNewURLParser: true,
    useUnifiedTopology: true,
});