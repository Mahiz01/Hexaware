const { error } = require("console");
const mongoose = require("mongoose");

const mongoCon = async()=>{
    try{
    mongoose.connect("mongodb+srv://shaikmahiz56:shaikmahiz56@cluster0.wxmke.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0");
    }
    catch(error){
        console.log(error)
    }
}
// mongoCon();
module.exports = mongoCon;