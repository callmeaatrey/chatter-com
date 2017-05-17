var mongoose = require('mongoose');

// Defining Post Schema
var PostSchema = new mongoose.Schema({
	meta: {
		email: String,
		nickname: String,
		date: {
			type: String,
			default: Date.now()
		},
		picture: String
	},
	body: String
});

// Export Post Model
module.exports = Post = mongoose.model('Post', PostSchema);