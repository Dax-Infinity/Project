const { default: mongoose } = require("mongoose");
const bcrypt = require('bcrypt')
const UserSchema = mongoose.Schema({
    firstName: String,
    lastName: String,
    email: String,
    password: String,
});
UserSchema.pre("save", async function (next) {
    try {
        const salt = await bcrypt.genSalt(10);
        const hashedpasssword = await bcrypt.hash(this.password, salt);
        this.password = hashedpasssword;
        next();
    } catch (error) {
        console.log(error);
    }
});
const User = mongoose.model("User-Data", UserSchema);
module.exports = User;
