var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "princ",
  password: "",
  database: "contactdb"
});

con.connect(function(err) {
  if (err) {
      console.log(err);
    }
  console.log("Connected!");
  var sql = "CREATE TABLE contact (Name VARCHAR(255), Email-Id VARCHAR(255),Phone VARCHAR(255),Subject VARCHAR(255),Message VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) {
      console.log(err);
    }
    console.log("Table created");
  });
});