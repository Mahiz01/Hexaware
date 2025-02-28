const Course = require("../models/courseSchema");


exports.addCourse= async (req,res)=>{
     try{
    const data  = req.body;
     
     const obj = new Course(data);
     await obj.save();
     console.log(obj);
     res.status(200).json(data);

     }
     catch(err){
        console.log("Not into the try block");
        console.log(err);
     }
}

exports.fetchAllCourse= async (req,res)=>{
   try{
    const data  =await Course.find();
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
exports.deleteCourse= async (req,res)=>{
    try{
        const data =await Course.deleteOne({"_id":req.params.id});
        if(!data){
            console.log("No such id");
        }
        else{
            res.status(200).json(data);
        }
    }
    catch(err){
        console.log(err);
    }
}

exports.deleteCourseNew= async (req,res)=>{
    try{
        const data =await Course.findOneAndDelete ({"_id":req.params.id});
       
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

exports.updateCourse=async (req,res)=>{
   try{
        // const data = await Course.updateOne
        const data = await Course.updateOne({"_id":req.params.id},{$inc:{price:50}});
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

exports.updateCourseNew=async (req,res)=>{
    try{
         // const data = await Course.updateOne
         let id =req.params.id;
         
         let d = req.body;
         console.log(d);
         let data = await Course.findByIdAndUpdate(id,d);
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
exports.fetchCourseById=async (req,res)=>{
   try{
    const id = req.params.id
    const data  =  await Course.find({"_id":id});
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
