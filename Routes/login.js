let express = require('express');
var app = require('express').Router();
var auth = require('../MiddleWares/auth');

let loginController = require('../Controllers/login');

app.use(
	'/',
	loginController.checkLogin
);

app.get('/logout',auth.checkSession, function(req,res) {
    req.session.isLogin = 0;
    req.session.destroy();
})

module.exports = app;