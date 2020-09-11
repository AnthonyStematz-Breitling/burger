var orm = require("../config/orm.js")

var burgers = {
    selectAll: function(cb){
        orm.selectAll("burgers", function(res){
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb){
        orm.insertOne("burgers", cols, vals, function(res){
            cb(res);
        });
    },
    updateOne: function(colsValueobj, col, val, cb){
        orm.updateOne("burgers", colsValueobj, col, val, function(res){
            cb(res);
        });
    }

};
module.exports = burgers;
