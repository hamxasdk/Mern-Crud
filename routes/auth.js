const express = require("express");
const router = express.Router();
const { login } = require("../controllers/auth");
// we can move the 2nd argument (arrow function to other folder and we call it controllers)
//post endpoint(route)
router.post("/login", login);

module.exports = router;
