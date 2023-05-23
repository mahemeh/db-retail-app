const route = require('express').Router() 

route.get('/', (req, res) => {
    res.json({
        message: 'this app has connected'
    })
})

module.exports = route