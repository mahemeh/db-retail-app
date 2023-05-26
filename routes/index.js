const router = require('express').Router() 
const todos = require('./routes-task')
const users = require('./routes-login')

router.get('/', (req, res) => {
    res.json({
        message: 'Selamat Datang Di ToDo Apps'
    })
})

router.use(todos)
router.use(users)

module.exports = router