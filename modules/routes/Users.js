const express = require("express");
const router = express.Router();

// router is sub appllication which is independent of the main application
// we can nest the router inside the main application using the parent route

router.get("/", (req, res) => {
	// query is a property of the request object which is used to store the query string
	console.log(req.query.name);
	res.send("Users List");
});

router.get("/new", auth, (req, res) => {
	res.render("users/new", { name: "Type your name" });
});

router.post("/", (req, res) => {
	const isValid = req.body.name.length > 0;
	if (isValid) {
		users.push({ id: users.length + 1, name: req.body.name });
		res.redirect(`/users/${users.length}`);
	} else res.render("users/new", { name: req.body.name });

	// by default express will not allow you to access the body of the request
	// res.send(`Create user with name ${req.body.name}`);
});

// always put the dynamic route at the end of the router it will mess up with the static routes,
// here above /new is static route which will not be triggered if we make particular request to /new,
// instead /:id will be triggered if below dynamic route is place at top

// router.get("/:id", (req, res) => {
// 	// dynamically determined by the url
// 	const id = req.params.id;
// 	res.send(`User with id ${id}`);
// });

// also many times we would be creating different routes such as post, put, delete, etc. with same path
// instead of creating all different routes with same path we can chain the routes together
router
	.route("/:id/")
	.get((req, res) => {
		console.log(req.user);
		res.send(`Get user with id ${req.params.id}`);
	})
	.post((req, res) => {
		res.send(`Update user with id ${req.params.id}`);
	})
	.delete((req, res) => {
		res.send(`Delete user with id ${req.params.id}`);
	});

// router.param() this will run whenever the it matches the param we passed in the url
// being a middleware function it contains next & will be executed before the callback function and it will be executed for every route which matches the param
// it also takes value of the param as the 4th parameter after next

// Middleware function is a function which is executed between the request been sent to the server and the actual response been retured to the client
// all contoller actions such as get, post, put, delete are also middleware functions but we didn't call next() within these as there is no such piece of code we want to run after these actions

const users = [
	{ id: 1, name: "John" },
	{ id: 2, name: "Sara" },
	{ id: 3, name: "James" },
];
router.param("id", (req, res, next, id) => {
	req.user = users.filter((user) => user.id === parseInt(id))[0];
	next();
});

function auth(req, res, next) {
	if (req.query.admin == "true") next();
	else res.send("Unauthorized");
}

// misconception associated with next()
// function auth(req, res, next) {
// 	if (req.query.admin == "true") next();
// 	res.send("Unauthorized"); // this line here will throw as next() soon as next() is called and
// code after next() is executed control will passed to line just below from where next() is being called so in order
// to avoid getting into this situation we should use return keyword to return from the middleware function
// }

module.exports = router;
