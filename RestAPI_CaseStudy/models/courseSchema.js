const { default: mongoose } = require("mongoose");

const courseStructure = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    credits:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    }

})

const Course = mongoose.model("Course",courseStructure);
module.exports= Course;