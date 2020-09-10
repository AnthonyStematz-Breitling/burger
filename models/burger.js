var orm = require("../config/orm.js")

var burgers = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insertOne: function(name, cb){
        orm.insertOne("burgers", "burger_name", "devoured", name, "false", function(res){
            cb(res);
        });
    },
    updateOne: function(name, cb){
        orm.updateOne("burgers", "devour", "burger_name", name, function(res){
            cb(res);
        });
    }

};
module.exports = burgers;
