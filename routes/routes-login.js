const router = require("express").Router();
const auth = require("../services/users-controller");

router.post("/login", auth.login);
router.post("/register", auth.register);

module.exports = router;
