const router = require('express').Router()
const controller = require('../controller/usersController')

router.get('/fetch', controller.getAllUsers)

router.get('/fetch/:id', controller.getOneUser)

router.post('/add', controller.addOneUser)

router.put('/update', controller.editUser)

router.delete('/delete', controller.deletOneUser)