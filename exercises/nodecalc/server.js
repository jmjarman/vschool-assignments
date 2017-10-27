const express = require("express");
const app = express();
const bodyParser = require("body-parser")
//const uuid = require("uuid/v4")

const tacos =[
    {name: "Chicken Taco", price: 2.95},
    {name: "Fish Taco", price: 2.95}

];


app.get("/tacos", (req, res) => {
    res.send("tacos");
});

app.post("/tacos", (req, res)=>{
    req.body._
    tacos.push(req.body);
    res.send(req.body);


})

app.listen(8000,() =>{
    console.log("Server is running");
});
