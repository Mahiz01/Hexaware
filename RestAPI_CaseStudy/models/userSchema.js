const mongoose = require("mongoose");
const userStructure = new mongoose.Schema({
    name:{
        type:String
    },
    username:{
        type:String,
        required: true
    },
    password:{
        type:String,
        required:true
    },
    role:{
        type:String,
        default:"USER_ROLE",
        require:true
    }
})

const User = mongoose.model("User",userStructure);

module.exports = User;