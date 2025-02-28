const { default: mongoose, trusted } = require("mongoose");

const bookStore = new mongoose.Schema({
        title:{
            type:String,
            required:true,
            unique:true
        },
        author:{
            type:String,
            required:true

        },
        price:{
            type:Number,
            required:true
        }
})

const bookStructure = mongoose.model("bookStructure",bookStore);
module.exports = bookStructure;