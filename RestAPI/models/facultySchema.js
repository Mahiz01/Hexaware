const { default: mongoose } = require("mongoose");


const facultyStructure = new mongoose.Schema({
    instructor:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Instructor",
        required:true
    },
    course:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Course",
        required:true
    }

})

const Faculty = mongoose.model("Faculty",facultyStructure);
module.exports= Faculty;
