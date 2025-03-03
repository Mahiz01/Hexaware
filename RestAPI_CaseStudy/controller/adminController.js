const bcrypt = require("bcryptjs");
const Admin = require("../models/adminSchema")
const jwt = require("jsonwebtoken")
exports.addAdmin = async(req,res)=>{
    try{
        const { username,password } = req.body;
        const salt = 10;
        const hashedPassword =await  bcrypt.hash(password,salt);
        const obj = {
            "username":username,
            "password":hashedPassword
        }
        const admin = new Admin(obj);
        await admin.save();
        return res.status(200).json(admin);
    }
    catch(e){
        console.log(e);
    }
}


exports.loginAdmin = async(req,res)=>{
    try{

        const{username,password}= req.body;
        const user = await Admin.findOne({username:username});  
        const out = await bcrypt.compare(password,user.password);
        if(out){
            return res.status(400).json("invalid creditinals");
        }
        const Secrete_key = "15141245151";
        const token = jwt.sign({username:user.username,password:user.password},Secrete_key,{expiresIn:"10h"});

        res.status(200).json(token);
    }
    catch(e){
        console.log(e);
    }
}