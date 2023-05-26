const { Task, User } = require('../models')

class TaskControl {
    static async getAllTasks(req, res) {
        try {
            const user = await User.findOne({where: { id: req.params.userId }})
            const tasks = await Task.findAll({where: { user_id: req.params.userId }})
            if (!user) {
                res.status(403).send({
                    message: 'Forbidden Request'
                })    
            } else {
                res.status(200).send(tasks)
            }
        } catch (error) {
            res.status(500).send({
                message: 'Terjadi Kesalahan Server'
            })
        }
    }

    static async getOneTask(req, res) {
        try {
            const task = await Task.findOne(
                {where: {id: req.params.taskId, user_id: req.params.userId}}
            )
            if (!task) {
                res.status(404).send({
                    message: 'maaf Task yang anda cari tidak ditemukan'
                })
            } else {
                res.status(200).send(task)
            }
        } catch (error) {
            res.status(500).send({
                message: 'Terjadi Kesalahan Server'
            })
        }
    }

    static async addTask(req, res) {
        try {
            const newTask = req.body
            const user = await User.findOne({where: { id: req.params.userId }})
            if (!user) {
                res.status(403).send({
                    message: 'Forbidden Status'
                })
            } else {
                const task = await Task.create({
                    title: newTask.title,
                    description: newTask.description,
                    status: false,
                    createdAt: new Date(),
                    updatedAt: new Date(),
                    user_id: parseInt(user.id)
                })
                res.status(201).send(task)   
            }
        } catch (error) {
            res.status(500).send({
                message: 'Terjadi Kesalahan Server'
            })
        }
    }

    static async doneTask(req, res) {
        try {
            const updateTask = req.body
            const user = await User.findOne({where: { id: req.params.userId }})
            if (!user) {
                res.status(403).send({
                    message: 'Forbidden Status'
                })
            } else {
                await Task.update({
                    status: updateTask.status
                }, { where : {id: req.params.taskId} })
                res.status(200).send({
                    message: "Task Selesai"
                })   
            }
        } catch (error) {
            res.status(500).send({
                message: 'Terjadi Kesalahan Server'
            })
        }
    }

    static async deleteTask(req, res) {
        try {
            const user = await User.findOne({where: { id: req.params.userId }})
            if (!user) {
                res.status(403).send({
                    message: 'Forbidden Status'
                })
            } else {
                await Task.destroy({ where : {id: req.params.taskId} })
                res.status(200).send({
                    message: "Task Berhasil Dihapus"
                })   
            }
        } catch (error) {
            res.status(500).send({
                message: 'Terjadi Kesalahan Server'
            })
        }
    }
}

module.exports = TaskControl