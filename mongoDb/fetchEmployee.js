const mongoose = require("mongoose")
const mongDb = require("./mongo_connect");
const Employee = require("./employeeSchema");
 
const getEmployee =async ()=>{
    try{
        await mongDb();
        console.log("DB sconnected")
        const emp = await Employee.find();
        console.log(emp);
    }
    catch(error){
        console.log(error);
    }
    finally{
        console.log("DB disconnected");
        mongoose.connection.close();
    }
}
getEmployee();