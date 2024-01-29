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

