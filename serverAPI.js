/*
 * API Server File
 * Written By: Shikher Aatrey
 */

// Adding dependencies
var express = require('express');
var http = require('http');
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');


// Creating app instance and setting port variable
var app = express();
var router = express.Router();
var port = process.env.PORT || 5001;

// configuring the api to use bodyParser and look for JSON data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// enabling CORS for all routes
app.use(cors())

// Setting static content directory
app.use("/", express.static(__dirname + "/static/"));

// Connect to mongo database
mongoose.connect('mongodb://shikher:root@ds139801.mlab.com:39801/chattercom');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	// Fired when connection is successful
  	console.log('Connection successful');
});

// Routing

router.get('/', function(req, res) {
	res.json({ message: 'API Initialised' });
});


// API Route
app.use('/api', router);

// Firing up the server
var server = http.createServer(app).listen(port, function() {
	console.log('API server running on port ' + port);
});