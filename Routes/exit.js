let express = require('express');
var app = require('express').Router();
var auth = require('../MiddleWares/auth');

let exitController = require('../Controllers/exit');
let loginController = require('../Controllers/login');

app.get(
	'/',
	// loginController.checkLogin,
    exitController.exit
);

module.exports = app;