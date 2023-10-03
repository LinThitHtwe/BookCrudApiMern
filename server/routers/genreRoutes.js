const express = require("express");
const router = express.Router();
const cors = require("cors");
const genreController = require("../controllers/genreController");

router.use(
  cors({
    credentials: true,
    origin: "http://localhost:3000",
  })
);

router.get("/", genreController.show_all_genre);
router.post("/add", genreController.add_genre);
router.get("/update/:id", genreController.show_update_genre);
router.put("/update/:id", genreController.update_genre);
module.exports = router;
