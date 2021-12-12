const express = require("express");
//routes all requests made to server
const router = express(); //retrieving external routes
const userController = require("../controllers/UserController")

//signup
router.post("/signup", userController.SignupController)

//login
router.post("/login",userController.LoginUsingEmailPass );

//searching using emailPass
router.get("/user/:id", userController.SearchUsingId);

//searching blog
router.get("/user/blog/:userID", userController.getBlog)

// adding blog
router.post("/blog", userController.postBlog)

module.exports = router;

