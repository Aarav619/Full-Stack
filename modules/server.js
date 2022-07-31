const express = require("express");
const app = express(); // by calling express() function it created an applicaion which allows us to setup our server
app.set("view engine", "ejs"); // setting the view engine to ejs, set() is used to set the value of a property
app.use(logger); // using the middleware logger at top to be used by entire application globally

// middleware that allows us to access body in request object
app.use(express.urlencoded({ extended: true })); // extended: true is used to allow us to use nested objects in the request body
// extended: false is used to prevent us from using nested objects in the request body

app.use(express.json()); // middleware that allows us to access json from the body

// pretty much every http method is available in express such as GET, POST, PUT, DELETE, etc.
// Sturcture of every http method is same as below:
// first parameter is the path of the route, second parameter is the callback function which is executed when the route is hit by the client and third parameter is the middleware function which is executed before the callback function
// callback function takes two parameters: req and res which are request and response object respectively
// callback function also takes next as a parameter which is a function which allows us to call the next middleware function

// GET method is used to retrieve data from a server
// app.get("/", logger, (req, res) => {
// 	console.log("here");
// res.send("Hello World"); // we should always use more specific thing such as status code instead of using send for it being more generic
// res.sendStatus(500); // it's a good practice to send a message along with the status code
// res.status(200).send("Hello World"); // we can also use status code along with send
// res.status(500).json({ message: "Error" }); // sending a json object containing error message with status code
// sending a file from the server as a response to the client
// res.sendFile("index.html", { root: __dirname });
// sending a file from the server as a response to the client to download it
// res.download("index.html", { root: __dirname });

// rendering a view from the server to the client
// best thing about letting your server render a view is that you can send data to the view
// some of the view engines like ejs, handlebars, pug, etc. can be used to render views
// res.render("index", { text: "World" });
// });

// router is a way used create another instance of express application which is used to handle a specific route or group of routes also can be refferd as sub application
const userRouter = require("./routes/Users");
app.use("/users", userRouter); // linking the userRouter to the main application using the parent route /users

// logger middleware
// we could also make this logger function to run on a specific route by passing it before the callback function
// such as:
// app.get("/", logger, (req, res) => {
// 	res.send("Hello World");
// });
// we could use n number of middleware functions to run on a specific route by passing them before the callback function

function logger(req, res, next) {
	console.log(`${req.method} ${req.path}`);
	next();
}

// inbuilt middlewares
// express.static() is used to serve static files from the server
app.use(express.static("public")); // it will serve the files from the public folder

// our app or server is listening on port 7000 for bunch of different requests
app.listen(7000, () => console.log("Server is running on port 7000"));
