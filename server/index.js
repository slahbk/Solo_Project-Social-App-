const express = require('express')
const cors = require('cors')

const app = express()
const PORT = 3000

app.use(cors())
app.use(express.json())
app.use(express.static(`${__dirname} '../client/dist'`))


app.listen(PORT, ()=>{
    console.log(`listening on http://localhost:${PORT}`)
})
