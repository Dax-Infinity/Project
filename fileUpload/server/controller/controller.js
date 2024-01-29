const users = require("../modal/modal");

const controller = async (req, res, next) => {
  const { title, discription } = req.body;
  const imagePath = req.file.path;
  const newImage = new users({ title, discription, imagePath });
  const result = await newImage.save();
  res.status(201).json({ result });
};
const get = async (req, res, next) => {
  try {
    const data = await users.find();
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
  }
};
module.exports = { controller, get };
