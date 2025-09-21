const express = require("express");
const { register, login, getMe } = require("../controllers/auth");
const router = express.Router();

const { isAuth } = require("../middleware/auth");

router.post("/register", register);

router.post("/login", login);

router.get("/me", isAuth, getMe);

module.exports = router;
