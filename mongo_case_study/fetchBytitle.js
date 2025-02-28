const bookStructure = require("./bookSchema");
const mongoCon = require("./mongo");
const mongoose = require("mongoose");

const fetchByauthor = async (auth) => {
  try {
    const book1 = await bookStructure.find({ author: auth });
    console.log(book1);
  } catch (error) {
    console.log(error);
  }
};

const fetchBytitle = async (na) => {
  try {
    const book1 = await bookStructure.find({ title: na });
    console.log(book1);
  } catch (error) {
    console.log(error);
  }
};

const fetchByid = async (id) => {
  try {
    const book1 = await bookStructure.find({ _id: id });
    console.log(book1);
  } catch (err) {
    console.log(err);
  }
};

const runQueries = async () => {
  try {
    await mongoCon();
    // promise is a interface(Structure of methods) where we have methods to run multiple functions into a async order
    await Promise.all([
      fetchByauthor("Tanh"),
      fetchBytitle("Moon"),
      fetchByid("67b5bdf3ee2875a248209642"),
    ]);
  } catch (e) {
    console.log(e);
  } finally {
    mongoose.connection.close();
  }
};

runQueries();
