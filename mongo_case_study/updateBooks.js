const { default: mongoose } = require("mongoose");
const bookStructure = require("./bookSchema");
const mongoCon = require("./mongo")


const bookUpdate = async(a,p) =>{
    try{
        await mongoCon();

        const upBooks = await bookStructure.updateOne(
    { author:a, price:p},
        {$inc:{price:24}}
        
    )
    console.log(upBooks);
    }
    catch(e){
        console.log(e);
    }
    finally{
        mongoose.connection.close();
    }


}

bookUpdate("Tanh",10)