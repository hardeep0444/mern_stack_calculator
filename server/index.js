const express = require("express");
const app = express();
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv/config");

app.use(cors());
app.use(express.json());
mongoose
  .connect(process.env.DB_CONNECTION_URL)
  .then((res) => {
    console.log("Successfully connected database");
  })
  .catch((error) => {
    console.log(error);
  });

app.get("/", (req, res) => {
  res.send("Welcome to the world of programming!");
});

app.use("/api", require("./routes/sum"));

app.listen(5000, () => {
  console.log("Connected to server");
});
