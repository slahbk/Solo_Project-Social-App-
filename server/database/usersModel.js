const { DataTypes } = require('sequelize')
const db = require('./index')

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

User.sync()

const fetchAllUsers = async () => {
    return await User.findAll()
}

const fetchOneUser = async (id) => {
    return await User.findOne({where:{id: id}})
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

module.exports = {fetchAllUsers, addUser, deletUser, updateUser, fetchOneUser}