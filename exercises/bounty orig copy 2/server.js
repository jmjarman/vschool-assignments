const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const uuid = require("uuid/v4")

const bounties = [
    {
        firstName: "Luke",
        lastName: "Skywalker",
        living: true,
        bounty: 5000,
        type: "Jedi",
        id: uuid()

},
    {
        firstName: "Hans",
        lastName:  "Solo",
        living: true,
        bounty:  4000,
        type: "Jedi",
        id: uuid()
},
    {
        firsName: "Princess",
        lastName: "Leia",
        living: true,
        bounty: 5000,
        type: "Jedi",
        id: uuid()
}
]


app.use(bodyParser.json())

app.get("/bounties", (req, res) =>{
    res.send(bounties);
});

app.post("/bounties", (req, res)=>{
        req.body._id = uuid()
        bounties.push(req.body);
        res.send(req.body);
});

app.delete("/bounties/:id", (req, res)=>{
    bounties = bounties.filter((bounties)=>{
        return bounties._id !== req.params.id

        res.send({
            message: "ITEM REMOVED SUCCESSFULLY"
        })
    });
    });
app.put("/bounties/:id", (req,res) =>{
    let newBounty = req.body
    bounties = bounties.map((bounties)=>{
        if(bounties._id === req.params.id){
            return Object.assign(bounties, newBounty);
        }else{
            return bounties

        }
    });

})


app.listen(8000,()=>{
    console.log("Server is running")
}) ;
