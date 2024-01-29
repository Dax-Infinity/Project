const express = require("express");
const app = express();
const cors = require("cors");
const PORT = 4000;
app.use(cors());
app.use(express.json());
const user = require("./Router/Router");
const { default: mongoose } = require("mongoose");


app.use("/", user);
mongoose.connect("mongodb://127.0.0.1:27017/LoginInfo").then(() => {
    console.log("server successfully connected ...!");
});

app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
