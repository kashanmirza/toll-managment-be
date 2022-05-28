let express = require('express');
var app = require('express').Router();

app.use('/login',require('./login.js'));
app.use('/entry',require('./entry.js'));
app.use('/exit',require('./exit.js'));

module.exports = app;