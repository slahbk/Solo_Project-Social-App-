const model = require('../database/usersModel')

const getAll = async (req, res) => {
    await model.fetchAllUsers()
    .then((result)=>{
        res.status(200).json(result)
    })
    .catch((err)=>{
        res.status(500).json(err)
    })
}


module.exports = {getAll}