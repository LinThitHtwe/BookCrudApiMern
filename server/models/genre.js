const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const genreSchema = new Schema(
  {
    name: { type: String },
    // description: { type: String },
    // book: {
    //   type: mongoose.Schema.Types.ObjectId,
    //   ref: "Book",
    // },
  },
  { timestamps: true }
);

const Genre = mongoose.model("Genre", genreSchema);

module.exports = Genre;
