// const mongoDb = require("./mongo_connect");
// const Employee = require("./employeeSchema");
// const mongoose  = require("mongoose");
//  const addEmployees = async() =>{
//     try{
//       await mongoDb();
//       let emp ={
//          fname:"sk",
//          lname:"masthan",
//          city:"Nellore",
//          salary:"$$$"
//       }
//       const emp1 = new Employee(emp);
//       await emp1.save();
//       console.log("Employee added successfully..")
//     }
//     catch(error){
//       console.log(error);
//     }
//     finally{
//       mongoose.connection.close();
//       console.log("Disconnected to DB");
//     }

//  }
//  addEmployees();

const dbConnect=require("./mongo_connect");
const mongoose=require('mongoose');
const Employee=require("./employeeSchema");
async function addEmployee(){
    try{
     await dbConnect();
     let emp1={                     
        fname:'parvathareddy',
        lname:'jhansi',
        city:'us',
        salary:93000
     }
     const empobj=new Employee(emp1);//object creation 
     await empobj.save();
     console.log("employee added in DB...")

    }
    catch(err){
        console.log(err)
    }
    finally{
        mongoose.connection.close();
        console.log('DB connection closed......')
    }
}
addEmployee();