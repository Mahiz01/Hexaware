const { default: mongoose } = require("mongoose");
const bookStructure = require("./bookSchema");
const mongoCon = require("./mongo")

const deleteId = async(id)=>{
    try{
        await mongoCon();
        const book1 =await bookStructure.deleteOne({"_id":id});
        if(book1.deletedCount==1){
            console.log("Deleted");
        }
        else{
            console.log("id not found ");
        }
    }
    catch(err){
        console.log("we got an error");
        console.log(err);
    }
    finally{
        mongoose.connection.close();

    }
}

deleteId('67b5be149ed108573620edef');