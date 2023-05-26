const router = require("express").Router();
const check = require("../middlewares/check");
const TaskController = require("../services/tasks-controller");

router.get("/users/:userId/tasks", check, TaskController.getAllTasks);
router.get("/users/:userId/tasks/:taskId", check, TaskController.getOneTask);
router.post("/users/:userId/tasks", check, TaskController.addTask);
router.put("/users/:userId/tasks/:taskId", check, TaskController.doneTask);
router.delete("/users/:userId/tasks/:taskId", check, TaskController.deleteTask);

module.exports = router;
