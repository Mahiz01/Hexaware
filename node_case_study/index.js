
const express = require("express")
const dotenv = require('dotenv');
const { default: mongoose } = require("mongoose");
const router = require("./routes/productrouter");

dotenv.config();
const PORT = process.env.PORT;
const URI = process.env.MONGO_URI;

const app = express();
app.use(express.json());
app.use("/products",router);
app.listen((PORT),()=>console.log(`Listening on Port ${PORT}`));

mongoose.connect("mongodb+srv://shaikmahiz56:shaikmahiz56@cluster0.wxmke.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0").then(()=>{console.log("DB Connected Successfully")});

