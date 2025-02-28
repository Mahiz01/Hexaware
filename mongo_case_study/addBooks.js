const { default: mongoose } = require("mongoose");
const bookStructure = require("./bookSchema");
const mongoCon = require("./mongo")

const addBooks = async() =>{
    try{
        await mongoCon();
    let book ={
        title:"Roll",
        author:"Sinh",
        price:10
    }
    const book1 = new bookStructure(book);
    await book1.save();
    }
    catch(error){
        console.log(error);
    }
    finally{
        mongoose.connection.close();
    }
};

addBooks();