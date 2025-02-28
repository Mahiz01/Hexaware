const { default: mongoose } = require("mongoose");
const bookStructure = require("./bookSchema");
const mongoCon = require("./mongo");

const fetchAllBooks =async(a,p)=>{
    try{
        await mongoCon();

    let book11 =await bookStructure.find();

    let copyBook = book11.filter((e)=>e.author==a&&e.price==p).map((e)=>({...e._doc,price:e.price+24}))
    //(...e._doc or .toObject() is used coz directly fetching from mongo may cause extra features to avoid them we should use left ones)
    console.log(copyBook);
    }
    catch(error){
        console.log(error);
    }
    finally{
        mongoose.connection.close();
    }
}

fetchAllBooks('Sinh',10);


