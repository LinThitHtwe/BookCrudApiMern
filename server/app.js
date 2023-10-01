const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const bookRoutes = require("./routers/bookRoutes");

const app = express();
const env = require("dotenv").config();
const port = 8000;
app.use(bodyParser.json());

//const dbURL = `mongodb+srv://${process.env.DBUSERNAME}:${process.env.DBPASSWORD}@testmongo.ghtm1ao.mongodb.net/`;
const dbURL = "mongodb://127.0.0.1:27017/test";
mongoose
  .connect(dbURL)
  .then(() => {
    console.log("connected");
    app.listen(port);
  })
  .catch((err) => console.log(err));

app.use("/", bookRoutes);
