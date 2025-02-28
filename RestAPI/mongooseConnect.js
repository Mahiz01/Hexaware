const { default: mongoose } = require("mongoose")
const dotenv = require("dotenv")
dotenv.config()
const URL = process.env.MONGO_URI;
const mongo_connect = async() =>{
    mongoose.connect(URL);
    console.log("Connected");
}
module.exports = mongo_connect;