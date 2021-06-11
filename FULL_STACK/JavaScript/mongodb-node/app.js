const express = require("express");
const app = express();
const mongoose = require("mongoose");
//module with external requests
const userRoute = require("./Routes/UserRoutes")

app.use(express.urlencoded({extended: false}))
app.use(express.json());

mongoose
  .connect("mongodb://localhost:27017/test", {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  .then(() => {
    console.info("MongoDB connected successfully");
  })
  .catch(() => {
    console.error("MongoDB connection failed.");
  });

app.use(userRoute);
const PORT =8000;

app.listen(PORT,() =>{
    console.log(`The server is listening on ${PORT}`);
})