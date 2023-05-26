const { User } = require('../models')
const jwt = require('jsonwebtoken')

class UserControl {
    static async login(req, res) {
        try {
            const data = req.body
            const user = await User.findOne({ where: {email: data.email} })

            if (!user || data.password !== user.password) {
                res.status(401).send({
                    message: 'Email atau Password Salah!'
                })
            } else {
                let payload = { user_id: user.id }
                let access_token = jwt.sign(payload, process.env.SECRET_KEY)
                res.status(201).send({
                    token: access_token
                })

            }
        } catch (error) {
            console.log(error)
            res.status(500).send({
                message: 'Terjadi Kesalahan Server'
            })
        }
    }

    static async register(req,res) {
        try {
            const { name, email, password } = req.body
            const newUser = await User.create({ name, email, password })
            res.status(201).send({
                message: 'Akun berhasil dibuat!',
                data: { name: newUser.name, email: newUser.email }
            })   
        } catch (error) {
            res.status(500).send({
                message: 'Terjadi Kesalahan Server'
            })
        }
    }
}

module.exports = UserControl