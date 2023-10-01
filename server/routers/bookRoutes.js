const express = require("express");
const router = express.Router();
const cors = require("cors");
const bookController = require("../controllers/bookController");

router.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

router.get("/", bookController.show_all_book);
router.post("/add", bookController.add_book);
router.get("/update/:id", bookController.show_update_book);
router.put("/update/:id", bookController.update_book);

module.exports = router;
