const connection = require("connection.js")
var orm = {
    selectAll: function(table) 
    {
      var queryString = "SELECT * FROM ??";
      connection.query(queryString, table, function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    insertOne: function(name)
    {
        var queryString = "INSERT INTO burgers (burger_name, devoured) VALUES (?, false)";
        connection.query(queryString, name, function(err, result){
            if(err) throw err;
            console.log(result)
        })
    },
    updateOne: function(name)
    {
        var queryString = "UPDATE burgers SET devoured WHERE burger_name = ?";
        connection.query(queryString, name, function(err, result){
            if(err) throw err;
            console.log(result)
        })
    }
}
module.exports = orm;