const route = require('express').Router() 

route.get('/todos', (req, res) => {
    res.json({
        message: 'All Todos Here'
    })
})

route.get('/todos/:id', (req, res) => {
    res.json({
        message: 'Select Todo'
    })
})

route.post('/todos', (req, res) => {
    res.json({
        message: 'Add Todo'
    })
})

route.put('/todos/:id', (req, res) => {
    res.json({
        message: 'Edit Todo'
    })
})

route.delete('/todos/:id', (req, res) => {
    res.json({
        message: 'Delete Todo'
    })
})

module.exports = route