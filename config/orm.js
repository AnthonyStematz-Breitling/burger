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
    insertOne: function(table, col1, col2, name, val)
    {
        var queryString = "INSERT INTO ?? (??, ??) VALUES (?, ?)";
        connection.query(queryString, {table, col1, col2, name, val}, function(err, result){
            if(err) throw err;
            console.log(result)
        })
    },
    updateOne: function(table, col1, col2,  name)
    {
        var queryString = "UPDATE ?? SET ?? WHERE ?? = ?";
        connection.query(queryString, {table, col2, col1, name}, function(err, result){
            if(err) throw err;
            console.log(result)
        })
    }
}
module.exports = orm;