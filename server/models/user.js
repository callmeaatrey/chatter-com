import mongoose, { Schema } from 'mongoose';

// Defining User Schema
var UserSchema = new Schema({
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
export default mongoose.model('User', UserSchema);