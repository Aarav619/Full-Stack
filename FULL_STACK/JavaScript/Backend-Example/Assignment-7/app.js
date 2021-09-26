const express = require("express");
const app = express();
const mongoose = require("mongoose");
//module with external requests
const userRoute = require("./routes/UserRoutes")
const adminRoute = require("./routes/AdminRoutes")

app.use(express.urlencoded({extended: false}))
app.use(express.json());
app.use(userRoute);
app.use(adminRoute);

mongoose
  .connect("mongodb://localhost:27017/testcase", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.info("MongoDB connected successfully");
  })
  .catch(() => {
    console.error("MongoDB connection failed.");
  });


const PORT =7000;

app.listen(PORT,() =>{
    console.log(`The server is listening on ${PORT}`);
})