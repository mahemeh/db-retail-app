const route = require('express').Router() 

route.post('/login', (req, res) => {
    res.json({
        message: 'User Login Success'
    })
})

route.post('/register', (req, res) => {
    res.json({
        message: 'Registration Success'
    })
})

module.exports = route