//create express server
const express = require("express");
const app = express();

//cors for origins
const cors = require('cors');

//cors middlware
app.use(cors());

//data decoded middelware
app.use(express.json());
app.use(express.urlencoded());


//database connection
const mongoose = require('mongoose');

mongoose.connect("mongodb://localhost:27017/myprj")
.then(()=>{
    console.log("database connected");
})
.catch()
{
    console.log("error occure");
}


//redirect to routes
//ex1 route
app.use('/ex1',require('./Routes/ex1.routes'));




app.listen(8000,()=>{
    console.log("Server Start and Up");
});