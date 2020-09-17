const express = require("express")
const burgers = require("../models/burger.js")

var router = express.Router();

// Basic route that sends the user first to the AJAX Page
router.get("/", function(req, res) {
    burgers.selectAll(function(result){
        res.render("index", {burgers: result});
    })
});

router.get("/create", function( req, res){
    res.render(path.join(__dirname,"create")) 
})

router.post("/api/new-burger", function(req, res) {
    burgers.insertOne(["burger_name", "devoured"], [req.body.burger_name, false], function(result){
        res.json(true);
    })
});

router.put("/api/burgers/:id", function(req, res) {
    burgers.updateOne({devoured: req.body.devour}, req.params.id, function(result){
        res.json(true);
    }) 
});

module.exports = router;