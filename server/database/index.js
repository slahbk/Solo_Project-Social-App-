const {Sequelize} = require('sequelize')

const sequelize = new Sequelize('social_app', 'root', 'root', {
    host:'localhost',
    dialect:'mysql'
})

sequelize.authenticate().then(()=>{
    console.log('database successfully connected ');
})
.catch((err)=>{
    console.log(err);
})

module.exports = sequelize