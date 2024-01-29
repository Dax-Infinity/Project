const user = require("../Model/Model");
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');

const PostController = async (req, res, next) => {
    try {
        const oldData = await user.findOne({ email: req.body.email });
        if (oldData) {
            throw error;
        }
        const data = new user(req.body);
        const result = await data.save();
        res.status(201).json({ result });
    }
    catch (error) {
        res.status(401).json({ Meassage: 'something wrong ..!' })
    }
};
const logInPostController = async (req, res, next) => {
    const { email, password } = req.body
    const users = await user.findOne({ email });
    try {
        if (!users) {
            console.log("email is not registered");
            res.status(401).json({ Meassage: "Unauthorized email" })
        }
        else {
            const checkPassword = await bcrypt.compare(password, users.password)
            if (!checkPassword) {
                console.log("entered incorrect password");
                res.status(401).json({ Meassage: "Unauthorized password" })
            }
            else {
                var token = jwt.sign({ email }, 'token')
                res.status(200).json({ token })
                console.log("token------------->", token);
                console.log("pass");
            }
        }
    }
    catch (error) {
        throw error;
    }
};

module.exports = { PostController, logInPostController };
