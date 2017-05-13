/*
 * React Server File
 * Written By: Shikher Aatrey
 */

// Adding dependencies
var express = require('express');
var http = require('http');
var path = require('path');


// Creating app instance and setting port variable
var app = express();
var port = process.env.PORT || 5000;

// Setting static content directory
app.use("/", express.static(__dirname + "/static/"));

// Routing

// Index route
app.get('*', function(req, res) {
	res.sendFile(path.resolve(__dirname, 'static', 'index.html'));
});

// Firing up the server
var server = http.createServer(app).listen(port, function() {
	console.log('React App running on port ' + port);
});