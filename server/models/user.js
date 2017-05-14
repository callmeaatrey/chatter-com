var mongoose = require('mongoose');

// Defining User Schema
var UserSchema = new mongoose.Schema({
	email: {
		type: String,
		unique: true
	},

	name: String,

	handle: {
		type: String,
		unique: true
	},

	password: String,

	followers: [],

	following: [],

	meta: {
		followers: Number,
		following: Number,
		posts: Number
	},
});

// Export User Model
module.exports = User = mongoose.model('User', UserSchema);