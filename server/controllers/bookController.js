const Book = require("../models/book");
const errorMessage = "Something went wrong";
const notFoundMessage = "Cannot Find This";
const show_all_book = (req, res) => {
  Book.find()
    .sort({ createdAt: -1 })
    .then((result) => {
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ message: errorMessage });
    });
};

const add_book = (req, res) => {
  const book = new Book(req.body);
  book
    .save()
    .then((result) => res.status(200).json(result))
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: errorMessage });
    });
};

const show_update_book = (req, res) => {
  const id = req.params.id;
  console.log("This is id " + id);
  Book.findById(id)
    .then((result) => {
      if (!result) {
        return res.status(404).json({ error: notFoundMessage });
      }
      res.status(200).json(result);
    })
    .catch((err) => {
      console.log(err);
      res.status(500).json({ error: errorMessage });
    });
};

const update_book = (req, res) => {
  const id = req.params.id;
  console.log("This is the param id" + id);
  const { title, author, genre, price } = req.body;
  Book.findByIdAndUpdate(id, { title, author, genre, price })
    .then((result) => {
      if (!result) {
        return res.status(404).json({ error: notFoundMessage });
      }
      res.status(200).json({ book: result });
    })
    .catch((err) => {
      res.status(500).json({ error: errorMessage });
      console.log(err);
    });
};

const delete_book = (req, res) => {
  const id = req.params.id;
};

module.exports = {
  show_all_book,
  add_book,
  show_update_book,
  update_book,
};
