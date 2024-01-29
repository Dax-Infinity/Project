const { default: mongoose } = require("mongoose");
const userSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    }
})
const User = mongoose.model('user-Info', userSchema);
module.exports = User