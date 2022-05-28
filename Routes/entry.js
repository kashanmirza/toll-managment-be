let express = require('express');
var app = require('express').Router();
var auth = require('../MiddleWares/auth');

let entryController = require('../Controllers/entry');
let loginController = require('../Controllers/login');

app.post(
	'/',
	// loginController.checkLogin,
    entryController.entry
);

module.exports = app;