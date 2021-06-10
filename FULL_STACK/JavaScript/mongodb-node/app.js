const express = require("express");
const app = express();

app.use(express.urlencoded({extended: true}))
app.use(express.json());

mongoose
.connect("" ,{
    useUnifiedTopology: true
})



const PORT =8000;

app.listen(PORT,() =>{
    console.log(`The server is listening on ${PORT}`);
})