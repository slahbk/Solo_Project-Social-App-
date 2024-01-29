const express = require('express')
const cors = require('cors')
const db = require('./database/index')
const router = require('./routes/usersRoute')

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())
app.use(express.static(`${__dirname} '../client/dist'`))

app.use('/', router)

app.listen(PORT, ()=>{
    console.log(`listening on http://localhost:${PORT}`)
})
