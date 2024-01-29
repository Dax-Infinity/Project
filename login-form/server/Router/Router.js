const express = require("express");
const { PostController, logInPostController } = require("../Controller/Controller");
const app = express();


app.post("/register", PostController)
app.post("/login", logInPostController)


module.exports = app