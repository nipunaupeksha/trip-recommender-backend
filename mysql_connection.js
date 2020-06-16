const mysql = require('mysql');

var connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "nadeguraf"
});

connection.connect(function(err) {
  if (err) throw err;
  console.log("Connected to NadeGura!");
});

module.exports = connection;