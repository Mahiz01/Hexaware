const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config();
const mongoURI = process.env.MONGO_URI;
useUnifoedTopology : true
const mongoDb = async ()=>{
    try{
       await mongoose.connect("mongodb+srv://shaikmahiz56:shaikmahiz56@cluster0.wxmke.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
    
    }
    catch(err){
        console.log(err);
    }
    
}
module.exports = mongoDb;
mongoDb();