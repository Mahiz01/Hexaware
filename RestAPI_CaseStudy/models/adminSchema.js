const mongoose = require("mongoose");
const adminStructure = new mongoose.Schema({

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

const Admin = mongoose.model("Admin",adminStructure);

module.exports= Admin;