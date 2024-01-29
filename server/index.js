const express = require('express')
const cors = require('cors')
const db = require('./database/index')
const usersRouter = require('./routes/usersRoute')
const postsRouter = require('./routes/postsRoute')

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extend: true}))
app.use(express.static(`${__dirname} '../client/dist'`))

app.use('/users', usersRouter)
app.use('/posts', postsRouter)

app.listen(PORT, ()=>{
    console.log(`listening on http://localhost:${PORT}`)
})
