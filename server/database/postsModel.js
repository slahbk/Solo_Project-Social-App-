const { DataTypes } = require('sequelize')
const db = require('./index')

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

const getAllPosts = async () => {
    return await Post.findAll()
}



module.exports = Post