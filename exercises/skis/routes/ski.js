const express = require("express");
const skiRoutes = express.Router();
const Ski = require("../models/skis")

skiRoutes.get("/", (req, res)=>

Ski.find((err, skis)=> {
    if (err) return res.status(500).send(err);
    return res.send(skis);
)}
skiRoutes.post("/", (req, res)=>{
    const ski = new Ski(req.body);
    brandNewSkis.save((err, ski)=>{
    if (err) return res.status(500).send(err)
    return res.send(skis)

)}
module.exports = skiRoutes
