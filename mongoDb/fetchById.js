const { default: mongoose } = require("mongoose");
const mongoDb = require("./mongo_connect")
const Employee = require("./employeeSchema");

const getByID = async(id) =>{
    try{
        await mongoDb();
    const emp = await Employee.find({"_id":id});
    console.log(emp);
    }
    catch(err){
        console.log(err);
    }
    finally{
        mongoose.connection.close();
    }
}

const getByName = async(name) =>{
    try{
        
        await mongoDb();
        fn = name.split(" ")[0]
        ls = name.split(" ")[1]
        const emp = await Employee.findOne({"fname":fn,"lname":ls});
        console.log(emp);
    }
    catch(err){
        console.log(err);
    }
    finally{
         mongoose.connection.close();
    }
}

getByID("67b5ac2c9201489271d2c53b");
getByName("sk masthan");

