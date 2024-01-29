const express = require("express");
const { controller, get } = require("../controller/controller");
const app = express();
const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/post", upload.single("image"), controller);
app.get("/get", get);

module.exports = app;
