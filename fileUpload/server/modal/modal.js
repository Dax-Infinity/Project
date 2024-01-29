const { default: mongoose } = require("mongoose");

const UserSchema = new mongoose.Schema({
  title: String,
  discription: String,
  imagePath: String,
});

const User = mongoose.model("imagetable", UserSchema);
module.exports = User;
