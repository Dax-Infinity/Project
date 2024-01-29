const title = require('../Moduls/Moduls')
const postData = async (req, res) => {
    try {
        const userInfo = new title(req.body);
        const data = await userInfo.save();
        res.status(201).json({ data })
    }
    catch (error) {
        console.error(error)
    }
}
const getData = async (req, res) => {
    try {
        const data = await title.find();
        res.status(200).json(data)
    }
    catch (error) {
        console.error(error)
    }

}
const deleteData = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(req.params);
        const result = await title.findByIdAndDelete(id);
        res.status(201).json(result);
    }
    catch (error) {
        console.error(error)
    }

}
const putData = async (req, res) => {
    try {
        const { id } = req.params;
        console.log(req.body);
        await title.findByIdAndUpdate(id, req.body)
    }
    catch (error) {
        console.error(error)
    }

}


module.exports = { postData, getData, deleteData, putData }