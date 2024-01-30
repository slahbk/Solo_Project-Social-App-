const router = require('express').Router()
const controller = require('../controller/usersController')

router.get('/fetch', controller.getAllUsers)

router.get('/fetch/:id', controller.getOneUser)

router.get('/fetchone', controller.getOneUserByName)

router.post('/add', controller.addOneUser)

router.put('/update/:id', controller.editUser)

router.delete('/delete/:id', controller.deletOneUser)

module.exports = router