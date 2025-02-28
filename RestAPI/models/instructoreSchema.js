const mongoose = require("mongoose");
const instructureStructure = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    city:{
        type:String,
        required:true
    }
})

const Instructor  = mongoose.model("Instructor",instructureStructure);
module.exports= Instructor;