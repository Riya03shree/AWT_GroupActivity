var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "princ",
  password: ""
});

con.connect(function(err) {
  if (err) {
  	console.log(err);
  }
  console.log("Connected!");
  con.query("CREATE DATABASE contactdb", function (err, result) {
    if (err) {
    	console.log(err);
    }
    console.log("Database created");
  });
});