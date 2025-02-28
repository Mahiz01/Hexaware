const { validationResult } = require("express-validator");
const User = require("../models/userSchema");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');
exports.userLogin = async(req,res) =>{
    try{
        const errors = validationResult(req);

        if(!errors.isEmpty()){
            return res.status(404).json({errors});
        }
        const { username,password} = req.body;
        const user = await User.findOne({username:username});
        if(!user){
            return res.status(404).json("Invalid Credentials");
        }

        const out = bcrypt.compare(password,user.password);

        if(!out){
            return res.status(404).json("Invalid Password");
        }

        let SECRET_KEY = '15141245151';
        
        const token = jwt.sign({username:user.username},SECRET_KEY,{expiresIn:'1h'});
        res.status(200).json(token);
       
       
        jwt.verify(token,SECRET_KEY,(err,decoded)=>{
            if(err){
                console.log("Expired");
                // res.status(404).json("Expired");
            }
            else{
                console.log("Decoded payload",decoded);
            }
        }) 
    }
    catch(e){
        console.log(e);
    }
}

exports.userSignup = async(req,res) =>{
    try{

        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(404).json({errors});
        }

        const {name,username,password} = req.body;
        const user = await User.findOne({username:username});
        if(user){
            return res.status(404).json('username already exist');
        }
        const salt =10;
        const hashedPassword  = await bcrypt.hash(password,salt);

        const obj ={
            name:name,
            username:username,
            password:hashedPassword
        }
        const new_user = new User(obj);
        await new_user.save();
        res.status(200).json(new_user);
    }
    catch(e){
        console.log(e);
    }
}