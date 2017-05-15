var mongoose = require('mongoose');

// Defining Post Schema
var PostSchema = new mongoose.Schema({
	email: String,
	nickname: String,
	body: String,
	date: {
		type: String,
		default: Date.now()
	}
});

// Export Post Model
module.exports = Post = mongoose.model('Post', PostSchema);