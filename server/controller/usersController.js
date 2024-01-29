const model = require('../database/usersModel')

const getAllUsers = async (req, res) => {
    await model.fetchAllUsers()
    .then((result)=>{
        res.status(200).json(result)
    })
    .catch((err)=>{
        res.status(500).json(err)
    })
}

const addOneUser = (req, res) => {
    const data = req.body
    model.addUser(data)
    .then((result)=>{
        res.status(201).json(result)
    })
    .catch((err)=>{
        res.status(500).json(err)
    })
}

const editUser = (req, res) => {
    const id = req.params.id
    const data = req.body
    model.updateUser(id, data)
    .then((result)=>{
        res.status(201).json(result)
    })
    .catch((err)=>{
        res.status(500).json(err)
    })
}

const deletOneUser = (req, res) => {
    const id = req.params.id
    model.deletUser(id)
    .then((result)=>{
        res.status(200).json(result)
    })
    .catch((err)=>{
        res.status(500).json(err)
    })
}

const getOneUser = async (req, res) => {
    const id = req.params.id
    await model.fetchOneUser(id)
    .then((result)=>{
        res.status(200).json(result)
    })
    .catch((err)=>{
        res.status(500).json(err)
    })
}

module.exports = {getAllUsers, addOneUser, editUser, deletOneUser, getOneUser}