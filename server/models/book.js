const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema(
  {
    title: { type: String },
    author: { type: String },
    genre: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Genre",
    },

    price: { type: Number },
  },
  { timestamps: true }
);

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;
