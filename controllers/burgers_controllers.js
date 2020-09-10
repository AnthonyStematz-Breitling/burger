const express = require("express")
const burgers = require("../model/burgers.js")

var app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
    //starting page
});
app.get("/:new-burger", function(req, res) {
   //insert button 
});
app.post("/:eaten-burger", function(req, res) {
    //update button 
});

//module.exports = router