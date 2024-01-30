const model = require('../database/postsModel')

const getAllPosts = async (req, res) => {
    await model.getAll()
    .then((result)=>{
        res.status(200).json(result)
    })
    .catch((err)=>{
        res.status(500).json(err)
    })
}

const addOnePost = (req, res) => {
    const id = req.params.id
    const data = req.body
    model.add(id, data)
    .then((result)=>{
        res.status(201).json(result)
    })
    .catch((err)=>{
        res.status(500).json(err)
    })
}

const deletOnePost = (req, res) => {
    const id = req.params.id
    model.delet(id)
    .then((result)=>{
        res.status(200).json(result)
    })
    .catch((err)=>{
        res.status(500).json(err)
    })
}

const updateOnePost = (req, res) => {
    const id = req.params.id
    const data = req.body
    model.edit(id, data)
    .then((result)=>{
        res.status(201).json(result)
    })
    .catch((err)=>{
        res.status(500).json(err)
    })
}

module.exports = {getAllPosts, addOnePost, deletOnePost, updateOnePost}