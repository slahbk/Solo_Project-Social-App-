const router = require('express').Router()
const controller = require('../controller/postsController')


router.get('/fetch', controller.getAllPosts)

router.post('/add/:id', controller.addOnePost)

module.exports = router