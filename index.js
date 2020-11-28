const express = require("express");
const app = express();
const port = 5000;
const db_config = require("./config/db-config.json");

const mongoose = require("mongoose");

mongoose
  .connect(db_config.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log("MongoDB Connected!"))
  .catch((err) => console.log(err));

app.get("/", (req, res) => res.send("Hello world!!"));

app.listen(port, () => console.log(`Example app listening on port ${port}`));
