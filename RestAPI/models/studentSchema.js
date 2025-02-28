
const mongoose = require("mongoose");
const studentStructure = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    city:{
        type:String,
        required:true
    },
})

const Student = mongoose.model("Student",studentStructure);
module.exports=Student;