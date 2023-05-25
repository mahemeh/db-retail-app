const route = require('express').Router() 
const todos = require('./routes-todos')
const users = require('./routes-users')

route.get('/', (req, res) => {
    res.json({
        message: 'This is Home'
    })
})

route.use(todos)
route.use(users)

module.exports = route