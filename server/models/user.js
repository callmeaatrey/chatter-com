var mongoose = require('mongoose');

// Defining User Schema
var UserSchema = new mongoose.Schema({
	email: {
		type: String,
		unique: true
	},

	name: String,

	nickname: {
		type: String,
		unique: true
	},

	picture: String,

	password: {
		type: String,
		default: 'thisisastrangepassword'
	},

	followers: [],

	following: [],

	meta: {
		followers: {
			type: Number,
			default: 0
		},
		following: {
			type: Number,
			default: 0
		},
		posts: {
			type: Number,
			default: 0
		}
	},
});

// Export User Model
module.exports = User = mongoose.model('User', UserSchema);