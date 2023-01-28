const express = require("express");

const showUsers = require("../controller/user.js");

const router = express.Router();

router.get("/users", showUsers);

module.exports = router;