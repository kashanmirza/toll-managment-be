var express = require('express');
var path = require('path');
var app = express();
var port = process.env.PORT || 9000;
var http = require('http');
var server = http.Server(app);
var bodyParser = require("body-parser");

require("dotenv").config();

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(express.static(path.join(__dirname,'/public')))

app.use(express.urlencoded({extended: true}))
app.use(express.json())


app.use('/',require('./Routes/'));

app.get('/', function(req,res) {
  res.render('login');
})

server.listen(port, () => {
	console.log('Running on port ' +port);
});