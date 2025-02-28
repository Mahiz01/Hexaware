const { default: mongoose } = require("mongoose");
const Employee = require("./employeeSchema");
const mongoDb = require("./mongo_connect");


const deleteByID =async (id)=>{
try{
await mongoDb();
const emp = await Employee.deleteOne({_id:id});
if(emp.deletedCount==1){
    console.log("Deleted");
}
else{
    console.log("No Such id");
}

}
catch(err){
console.log(err);
}
finally{
mongoose.connection.close();
}
}

deleteByID("67b5ac2c9201489271d2c53b")