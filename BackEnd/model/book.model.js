import mongoose from "mongoose";

const bookschema = mongoose.Schema({
  name: String,
  price: Number,
  title: String,
  image: String,
  category: String,
});
const Book = mongoose.model("book", bookschema);

export default Book;
