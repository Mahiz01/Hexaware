const mongoose = require("mongoose")
const employeetable = new mongoose.Schema({
    fname:{
        type: String,
        required: true
    },
    lname:{
        type: String,
        // required: true
    },
    city:{
        type: String,
        required: true
    },
    salary:{
        type: String,
        default:0
    }
})

const Employee = mongoose.model("Employee",employeetable);
module.exports=Employee;