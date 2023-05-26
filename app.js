const express = require('express')
const app = express()
const routes = require('./routes/index')
const bodyParser = require('body-parser')
const port = 6937

require('dotenv').config()

app.use(express.static('public'))
app.use(bodyParser.urlencoded( { extended: true } ))
app.use(bodyParser.json())
app.use(routes)
app.listen(port, () => {
    console.log(`app connected on localhost:${port}`)
})