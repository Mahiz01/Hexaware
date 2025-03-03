const Instructor = require("../models/instructoreSchema");

exports.addInstructor = async(req,res) =>{
    try{
        const teacher = new Instructor(req.body);
        await teacher.save();
        res.status(200).json(teacher);
    }
    catch(e){
        console.log(e);
    }
}

exports.fetchInstructors = async(req,res) =>{
    try{
        const teacher = await Instructor.find();
        if(teacher){
            return res.status(200).json(teacher);
        }
        else{
            return res.status(400).json("No reacords");
        }
    }
    catch(e){
        console.log(e);
    }
}
