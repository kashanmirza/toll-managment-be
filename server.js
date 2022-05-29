var express = require('express');
var path = require('path');
const cors = require('cors')
var app = express();
var session = require('express-session');
var port = process.env.PORT || 9000;
var http = require('http');
var server = http.Server(app);
var bodyParser = require("body-parser");
var mongoStore = require("connect-mongo")(session);


require("dotenv").config();

app.use(cors());

app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true
  })
);

app.use(express.static(path.join(__dirname,'/public')))

// DB //
require("./config/db");

/* Mongoose Connectopn */
var mongoose = require("mongoose");
var db = mongoose.connection;

app.use(express.urlencoded({extended: true}))
app.use(express.json())                 /*include express*/
app.use(session({
    secret: "xYzUCAchitkara",
    resave: false,
    saveUninitialized: false,
    store: new mongoStore({
      mongooseConnection: db
    })
}))


app.use('/',require('./Routes/'));

app.get('/', function(req,res) {
  res.render('login');
})

server.listen(port, () => {
	console.log('Running on port ' +port);
});