const express = require('express')
const app = express()
const routes = require('./routes/index')
const port = 3030

app.use(express.static('public'))
app.use(express.json())
app.use(express.urlencoded({ extended: true }))
app.use(routes)

app.listen(port, () => {
    console.log(`app connected on localhost:${port}`)
})