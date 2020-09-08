const connection = require("connection.js")
var orm = {
    selectWhere: function(//stuff goes here 
        ) 
    {
      var queryString = "SELECT * FROM ?? WHERE ?? = ?";
      connection.query(queryString, [//stuff goes here
    ], function(err, result) {
        if (err) throw err;
        console.log(result);
      });
    },
    insertOne: function()
    {
        var queryString = "";
        connection.query(queryString, [], function(err, result){
            if(err) throw err;
            console.log(result)
        })
    },
    updateOne: function()
    {
        var queryString = "";
        connection.query, [], function(err, result){
            if(err) throw err;
            console.log(result)
        }
    }
}
module.exports = orm;