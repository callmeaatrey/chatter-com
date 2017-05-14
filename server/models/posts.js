var mongoose = require('mongoose');

// Defining Post Schema
var PostSchema = new mongoose.Schema({
	handle: String,
	body: String,
	date: {
		type: Date,
		default: Date.now
	}
});

// Export Post Model
module.exports = Post = mongoose.model('Post', PostSchema);