var mysql = require('mysql');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();

app.use(bodyParser.urlencoded({ extended: true })); 

app.post('/contactdb', (req, res) => {
	var name=req.body.name;
	var eid=req.body.eid;
	var pnm=req.body.pnnum;
	var sub=req.body.subject;
	var mes=req.body.message;

  res.send('Name is:'+name+'&nbsp &nbsp &nbsp &nbsp &nbsp'+'Email:'+eid+'&nbsp &nbsp &nbsp &nbsp &nbsp'+'Phone:'+pnm+'&nbsp &nbsp &nbsp &nbsp &nbsp'+'Subject:'+sub+'&nbsp &nbsp &nbsp &nbsp &nbsp'+'Message:'+mes+'&nbsp &nbsp &nbsp &nbsp &nbsp'+'Message Recorded');

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
  var sql = "INSERT INTO contact (Name,Email-Id,Phone,Subject,Message) VALUES ('"+name+"','"+eid+"','"+pnm+"','"+sub+"','"+mes+"')";
  con.query(sql, function (err, result) {
    if (err){
    	console.log(err);
    }
    console.log("1 record inserted");
  });
});
});

const port = 8080;
app.listen(port, () => {
  console.log(`Server running on port${port}`);
});