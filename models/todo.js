const mongoose = require('mongoose'); //referencing the mongoose
const Schema = mongoose.Schema; // creating a reference to a schema class
const toDoSchema = new Schema(
    {
        description:{
            type: String,
            required: [true,"Please enter all the require details"],
        },
        completed:{
            type: Boolean,
            default: false,
        },
        ranking:{
            type: Number,
            default: null,
        },
        date:{
            type: Date,
            default: Date.now
        },
    },
        {
            timestamps: true,
        },
); //defining the schema and type of fields 

var toDos = mongoose.model("toDos", toDoSchema); //calling the model constructor and referencing it to toDoSchema

module.exports = toDos; // exporting to utlize it across the project
 