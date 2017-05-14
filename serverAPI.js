/*
 * API Server File
 * Written By: Shikher Aatrey
 */

// adding dependencies
var express = require('express');
var http = require('http');
var mongoose = require('mongoose');
var path = require('path');
var bodyParser = require('body-parser');
var cors = require('cors');

// bringing in the models
var User = require('./server/models/user');
var Post = require('./server/models/posts');

// creating app instance and setting port variable
var app = express();
var router = express.Router();
var port = process.env.PORT || 5001;

// configuring the api to use bodyParser and look for JSON data
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// enabling CORS for all routes
app.use(cors())

// setting static content directory
app.use("/", express.static(__dirname + "/static/"));

// sonnect to mongo database
mongoose.connect('mongodb://shikher:root@ds139801.mlab.com:39801/chattercom');

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
	// Fired when connection is successful
  	console.log('Connection successful');
});

// routing
router.get('/', function(req, res) {
	res.json({ message: 'API Initialised' });
});

// route for handling user queries
router.route('/user/:email')
	.get(function(req, res) {
		User.findOne({email: req.params.email}, function(err, doc) {
			if (err) {
				res.send(err);
			} else {
				res.json(doc);
			}
		});
	})

// register new users via social login
router.route('/register/google')
	.post(function(req, res) {
		var user = new User();
		user.email = req.body.email;
		user.name = req.body.name;
		user.nickname = req.body.nickname;
		user.picture = req.body.picture;

		user.save(function(err) {
			if(err) {
				res.send(err);
			} else {
				console.log(res);
				res.json({ message: 'User successfully added!' });
			}
		});
	})

// API Route
app.use('/api', router);

// firing up the server
var server = http.createServer(app).listen(port, function() {
	console.log('API server running on port ' + port);
});