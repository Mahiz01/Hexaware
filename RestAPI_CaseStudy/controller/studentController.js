
const Student = require("../models/studentSchema");


exports.addStudent= async (req,res)=>{
  try{
    const data = req.body;
    const student = new Student(data);
    await student.save();
    res.status(200).json({msg:"Added Successfully"});
    
  }
  catch(err){
    console.log(err)
  }
}

exports.fetchAllStudent= async (req,res)=>{
   try{
    const data  =await Student.find();
    if(!data){
        console.log("No such id");
    }
    else{
        res.status(200).json(data);
    }
    
   }
   catch(err){
    console.log({Message:err});
   }
    
}
exports.deleteStudent= async (req,res)=>{
    try{
        const data =await Student.deleteOne({"_id":req.params.id});
        if(!data==null){
            res.status(200).json(data);
           
        }
        else{
            console.log("No such id");
            res.status(400).json({msg:`no such id ${req.params.id}`})
        }
    }
    catch(err){
        console.log(err);
    }
}

exports.deleteStudentNew= async (req,res)=>{
    try{
        const data =await Student.findOneAndDelete ({"_id":req.params.id});
       
        if(!data){
            console.log("No such id");
            res.status(400).json({msg:`no such id ${req.params.id}`})
        }
        else{
            res.status(200).json(data);
        }
    }
    catch(err){
        console.log(err);
    }
}

exports.updateStudent=async (req,res)=>{
   try{
        // const data = await Course.updateOne
        const data = await Student.updateOne({"_id":req.params.id},{$inc:{age:2}});
        if(data.acknowledged==1){
            console.log("Updated")
            res.status(200).json(data);
        }
        else{
            console.log("Not updated");
            res.status(400).json({msg:`not found id ${req.params.id}`});
        }
        
   }
   catch(e){
    console.log("error");
    console.log(e);
   }
    
}

exports.updateStudentNew=async (req,res)=>{
    try{
         // const data = await Course.updateOne
         let id =req.params.id;
         
         let d = req.body;
         console.log(d);
         let data = await Student.findByIdAndUpdate(id,d);
         console.log(data);
         if(data){
             console.log("Updated")
             res.status(200).json(data);
         }
         else{
             console.log("Not updated");
             res.status(400).json({msg:`not found id ${req.params.id}`});
         }
         
    }
    catch(e){
     console.log("error");
     console.log(e);
    }
     
 }
exports.fetchStudentById=async (req,res)=>{
   try{
    const id = req.params.id
    const data  =  await Student.find({"_id":id});
    if(!data){
        console.log("No such id");
    }
    else{
        res.status(200).json(data);
    }
   }
   catch(err){
        console.log(err)
   }
    
}
