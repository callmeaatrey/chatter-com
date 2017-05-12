/*
 * Main Server File
 * Written By: Shikher Aatrey
 */

// Adding dependencies
var express = require('express');
var http = require('http');
var mongoose = require('mongoose');
var path = require('path');


// Creating app instance and setting port variable
var app = express();
var port = process.env.PORT || 5000;

// Setting static content directory
app.use("/", express.static(__dirname + "/static/"));

// Connect to mongo database
mongoose.connect('mongodb://localhost/chatter-com');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	// Fired when connection is successful
  	console.log('Connection successful');
});

// Routing

// Index route
app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'static', 'index.html'));
});

// Firing up the server
var server = http.createServer(app).listen(port, function() {
	console.log('Express server listening on port ' + port);
});