const Course = require("../models/courseSchema");
const Faculty = require("../models/FacultySchema");

const Instructor = require("../models/instructoreSchema");

exports.addFaculty = async(req,res)=>{
    try{
        const {instructor,course}= req.body;
        const Inst = await Instructor.findById(instructor);
        if(!Inst){
            return res.status(400).json("Invalid instructor id")
        }
        const Cour = await Course.findById(course);
        if(!Cour){
            return res.status(400).json("Invalid instructor id")
        }
        let obj = {
            instructor:instructor,
            course:course
        }
        const faculty1 = new Faculty(obj);
        await faculty1.save();

        res.status(200).json(faculty1);
    }
    catch(e){
        console.log(e);
    }
}

exports.getCourseByInstructor = async(req,res) =>{
    try{
        const data = await Faculty.find({"instructor":req.params.id}).populate("course");

        if(data.length==0){
           return res.status(404).json("No data for the id");
        }
        else{
            return res.status(200).json(data);
        }
    }
    catch(e){
        console.log(e);
    }
}

exports.getInstructorByCourse = async(req,res) =>{
    try{
        const data = await Faculty.find({course:req.params.id}).populate("instructor");
        const fac = data.map((e)=>({e,e:e.instructor}))
        if(data.length!=0){
           return res.status(200).json(fac);
        }
        else{
            return res.status(400).json("No data for the id");
        }
    }
    catch(e){
        console.log(e);
    }
}

exports.deleteFaculty = async(req,res) =>{
    try{
        const {instructor,course} = req.query;
        const Ins = await Faculty.find({instructor:instructor});
        if(!Ins){
            return res.status(404).json({msg:'invalid instructor id'});
        }
        const Cour = await Faculty.find({course:course});
        if(!Cour){
            return res.status(404).json({msg:'invalid Course id'});
        }

        const fac = await Faculty.deleteOne({"instructor":instructor,"course":course});
        if(fac.deletedCount==1){
            res.status(200).json({msg:"Deleted Sucessfully"});
        }
        else{
            res.status(404).json({msg:"No Such file"});
        }
    }
    catch(e){
        console.log(e);
    }
}