const express = require("express");
const router = express();
const adminController = require("../controllers/AdminController");

//signup
router.post("/admin/signup", adminController.SignupController)

//login
router.post("/admin/login",adminController.LoginUsingEmailPass);

module.exports = router;