const mongoose = require("mongoose")
const productStructure = new mongoose.Schema({
    title:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },

})

const Product = mongoose.model("Product",productStructure);

module.exports = Product;