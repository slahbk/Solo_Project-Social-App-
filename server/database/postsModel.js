const { DataTypes, Sequelize } = require('sequelize')
const db = require('./index')
// const {User} = require('./usersModel')

const postSchema = {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true
    },
    body: DataTypes.STRING,
    image: DataTypes.STRING
}

const Post = db.define('posts', postSchema)

const getAll = async () => {
    return await Post.findAll({order: [[("updatedAt"), 'DESC']]})
}

const getOne = async (id) => {
    return await Post.findOne({where:{userId: id}})
}

const add = async (id, data) => {
    return Post.create({userId: id , body: data.body, image: data.image})
}

const delet = (id) => {
    return Post.destroy({where:{id: id}})
}

const edit = (id, data) => {
    return Post.update(data, {where:{id: id}})
}

module.exports = {Post, getAll, getOne, add, delet, edit}