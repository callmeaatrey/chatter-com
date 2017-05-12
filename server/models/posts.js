import mongoose, { Schema } from 'mongoose';

// Defining Post Schema
var PostSchema = new Schema({
	handle: String,
	body: String,
	date: {
		type: Date,
		default: Date.now
	}
});

// Export Post Model
export default mongoose.model('Post', PostSchema);