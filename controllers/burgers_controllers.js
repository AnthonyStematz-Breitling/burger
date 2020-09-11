const express = require("express")
const burgers = require("../models/burger.js")

var router = express.Router();

// Basic route that sends the user first to the AJAX Page
router.get("/", function(req, res) {
    burgers.selectAll(function(result){
        res.render("index", {burgers: result});
    })
    //starting page
});

router.get("/api/:new-burger", function(req, res) {
    burgers.insertOne(["burger_name", "devoured"], [req.params.name, false], function(result){
        res.render("index",{burgers: result});
    })
   //create button 
});

router.post("/api/:eaten-burger", function(req, res) {
    burgers.updateOne({devoured: true}, "burger_name", req.params.name, function(result){
        res.render("index", {burgers: result});
    })
    //update button 
});

module.exports = router;