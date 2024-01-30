const { DataTypes } = require('sequelize')
const db = require('./index')
const  {Post}  = require('./postsModel')

const userSchema = {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    username: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
}

const User = db.define('users', userSchema)

User.hasMany(Post, {
    foreignKey: 'userId'
})

User.sync()
Post.sync()

const fetchAllUsers = async () => {
    return await User.findAll()
}

const fetchOneUser = async (id) => {
    return await User.findByPk(id, {
        include: Post
    })
}

const fetchOneUseByName = async (name) => {
    return await User.findOne({where:{username: name}, include: Post})
}

const addUser = (data) => {
    return User.create(data)
}

const deletUser = (id) => {
    return User.destroy({where:{id: id}})
}

const updateUser = (id, data) => {
    return User.update(data, {where:{id: id}})
} 

module.exports = {User, fetchAllUsers, addUser, deletUser, updateUser, fetchOneUser, fetchOneUseByName}