const express = require("express");
//routes all requests made to server
const router = express(); //retrieving external routes
const controller = require("../Controllers/UserController")

//signup
router.post("/signup", controller.SignupController)
//login
router.post("/login",controller.LoginUsingEmailPass );
//searching using ID
router.get("/user/:id", controller.SearchUsingId);
//updating a user with email
router.put("/update/user/:email", controller.UpdateUsingEmail);

//updating a user with id
// router.put("/update/:id", controller.UpdateUsingId);

// retrieving through path Queries
router.get("/get-User", controller.findUserbyfirstNameandlastName);

module.exports = router;

