const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
// const user = require("./Router/Route");
const user = require("./Router/Route");
const { default: mongoose } = require("mongoose");

const PORT = 5000;

app.use("/main", user);
app.use("/uploads", express.static("uploads"));

mongoose.connect("mongodb://127.0.0.1:27017/imageGallery").then(() => {
  console.log("database connected ....!");
});

app.listen(PORT, () => {
  console.log("start"); 
});
