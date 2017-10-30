const express = require("express")
const app = express();
const mongoose = require("mongoose")
const bodyParser = require("body-parser")
const port =process.env.PORT||8080;

app.use(bodyParser.json());

mongoose.connect("mongodb://localhost/skis", (err)=>{
    if (err) throw err;
    console.log("Connected to database");
});





constSchema = mongoose.Schema

app.listen(port, ()=>{
    console.log(`App is listening on port ${port}`);
});
