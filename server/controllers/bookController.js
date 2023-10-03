const Book = require("../models/book");
const errorMessage = "Something went wrong";
const notFoundMessage = "Cannot Find This";
const show_all_book = (req, res) => {
  Book.find()
    .sort({ createdAt: -1 })
    .populate("genre", ["name"])
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
  Book.findByIdAndDelete(id)
    .then((result) => {
      if (!result) {
        return res.status(404).json({ error: notFoundMessage });
      }
      res.status(200).json(result);
    })
    .catch((err) => {
      return res.status(500).json({ error: errorMessage });
    });
};

module.exports = {
  show_all_book,
  add_book,
  show_update_book,
  update_book,
  delete_book,
};
