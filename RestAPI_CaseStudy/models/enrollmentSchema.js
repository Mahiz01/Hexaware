const mongoose= require("mongoose");
// const Student = require("./studentSchema");
// const Course = require("./courseSchema");

const enrollmentStructure = new mongoose.Schema({
    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Student",
        required:true
    },
    course:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course",
        required:true
    },
    date_of_enrollment:{
        type:Date,
        default:Date.now
    },
    
})

const Enrollment = mongoose.model("Enrollment",enrollmentStructure);
module.exports= Enrollment;