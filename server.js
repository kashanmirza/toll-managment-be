var express = require('express');
var port = process.env.PORT || 3000;
var http = require('http');
var app = express();
var server = http.Server(app);

server.listen(port, () => {
	console.log('Running on port ' +port);
});