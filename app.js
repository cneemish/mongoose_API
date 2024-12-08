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

connect.then(
    (db) => {
        console.log("Connected Successfullt to Mongo Server");

// Creating records 

let newTask ={
    description: "testing new data",
    completed: true,
    ranking: 2,
    date:"",
};

Tasks.create(newTask)
.then((data) =>{
    console.log(data);
})
.catch((err) =>{
    console.log(err);
});

// updating records

/* Tasks.findByIdAndUpdate({_id: req.params.id},{
    $set: {completed: false},
},
{new: true, useFindAndModify: false})
.then((data) =>{
    console.log('Updated todo data',data);
})
.catch((err) =>{
    console.log(err);
}); */

    },
    (err) =>{
        console.log(err);
    }
);


// Creating express app

const app = express();
app.use(express.json());

// Creating listner to accept incoming request on a spectif port

app.listen(PORT, () =>{
    console.log('Server is running on http://localhost:${PORT}')
});

// Find all the task 

Tasks.find({})
.then((data)=>{
    console.log("All tasks", data);
})
.catch((err)=>{
    console.log(err);
});