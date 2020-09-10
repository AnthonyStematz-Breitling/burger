const express = require("express")
const burgers = require("../model/burgers.js")

var router = express.Router();

// Basic route that sends the user first to the AJAX Page
router.get("/", function(req, res) {
    burgers.selectAll()
    //starting page
});

router.get("/api/:new-burger", function(req, res) {
    burgers.insertOne()
   //insert button 
});

router.post("/api/:eaten-burger", function(req, res) {
    burgers.updateOne()
    //update button 
});

module.exports = router