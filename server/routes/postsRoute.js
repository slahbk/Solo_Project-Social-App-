const router = require('express').Router()
const controller = require('../controller/postsController')


router.get('/fetch', controller.getAllPosts)

router.get('/fetch/:id', controller.getOnePost)

router.post('/add/:id', controller.addOnePost)

router.put('/edit/:id', controller.updateOnePost)

router.delete('/delete/:id', controller.deletOnePost)

module.exports = router