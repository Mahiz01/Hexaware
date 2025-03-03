const Course = require("../models/courseSchema");
const Enrollment = require("../models/enrollmentSchema");
const Student = require("../models/studentSchema");

exports.addEnrollment =async (req,res) =>{
    try{
        const {sid,cid} = req.body;
        console.log(sid);
        console.log(cid);
        let student = await Student.findById(sid);
        if(!student){
            
            res.status(400).json({msg:"No such sId found"});
        }
        
        let course = await Course.findById(cid);
        
        if(!course){
           
            res.status(400).json({msg:"No such cId found"});
        }
            const obj ={
                student:sid,
                course:cid
            }
            const enrollment = new Enrollment(obj);
            await enrollment.save();

            res.status(200).json(enrollment);
    
    }
    catch(e){
        console.log(e);
    }
}

exports.getEnrollment = async(req,res) =>{
    try{
        const object = await Enrollment.find().populate("student").populate("course");
        
        res.status(200).json(object);
    }
    catch(e){
console.log(e);
    }
}

exports.getStudentsByCourseId = async(req,res) =>{
    try{
        let Cid = req.params.id;
        let enroll = await Enrollment.find({"course":Cid}).populate("student","_id name email");
        let stu = enroll.map((e)=>(e.student));
        res.status(200).json(stu);
    }
    catch(e){
        console.log(e);
    }
}

exports.getCourseByStudentId = async(req,res) =>{
    try{
        const enroll = await Enrollment.find({"student":req.params.id}).populate("course");
        if(enroll){
            let stu = enroll.map((e)=>(e.course));
            res.status(200).json(stu);
        }
        else{
            res.status(400).json({msg:"No record"})
        }
        
    }
    catch(e){
            console.log(e);

    }
}
exports.deleteByIds = async(req,res) =>{
    try{
        let student = req.params.student;
        let course = req.params.course;

        const enroll = await Enrollment.findOneAndDelete({"student":student,"course":course})
       if(enroll){
        res.status(200).json({msg:"Deleted Successfully"});
       }
       else{
        res.status(400).json({msg:enroll});
       }
    }
    catch(e){
        console.log(e);
    }
}


exports.getEnrollmentByDates = async(req,res) =>{
    try{

        const{fDate,tDate} = req.query;
        console.log(fDate);
        console.log(tDate);
        const fromDate = new Date(fDate);
        const toDate = new Date(tDate);
        console.log(fromDate);
        console.log(toDate);
        if(isNaN(fromDate)){
            return res.status(400).json({msg:"Incorrect From date Format"})
        }
        if(isNaN(toDate)){
            return res.status(400).json({msg:"Incorrect To date Format"})
        }

        const enroll = await Enrollment.find({"date_of_enrollment":{$gt:fromDate,$lt:toDate}});

        res.status(200).json(enroll);

    }
    catch(e){
        console.log(e);
    }
}