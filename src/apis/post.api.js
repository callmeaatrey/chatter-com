/*
* HTTP Accessor Methods
* @methods - createPost, getSingleUserPosts, getOwnPosts, getSinglePost, getTimelinePosts
*/

import axios from 'axios';
import { setNewPost, setOwnPosts, foreignUserPosts, setTimelinePosts } from '../actions/post.actions';
import { createPostIncrement } from '../actions/user.actions';
import store from '../store';


// creates a new post
// @param {String} postData
// @param {Object} profile
export function createPost(postData, profile) {

	// handling requests for creating new profile
	axios.post('http://localhost:5100/api/post/new', {profile: profile, data: postData})
		.then(res => {
			store.dispatch(createPostIncrement());
			getSinglePost(res.data._id);
		})
		.catch(err => {
			console.log(err);
		});

}

// get user's personal posts
// @param {String} email
export function getSingleUserPosts(email) {
	axios.get(`http://localhost:5100/api/post/own/${email}`)
		.then(res => {
			store.dispatch(foreignUserPosts(res.data));
		})
		.catch(err => {
			console.log(err);
		})
}

// get all own posts [not to be used for production in this version]
// @param {String} email
export function getAllPosts(email) {

	// handling requests for fetching user's own posts
	axios.get(`http://localhost:5100/api/find/post/all`)
		.then(res => {
			store.dispatch(setOwnPosts(res.data));
		})
		.catch(err => {
			console.log(err);
		});
}

// get a single post
// @param {String} postId
export function getSinglePost(postId) {

	// handling requests for fetching a single post
	axios.get(`http://localhost:5100/api/post/single/${postId}`)
		.then(res => {
			if(res.data == null) {
				return;
			} else {
				store.dispatch(setNewPost(res.data));
			}
		})
		.catch(err => {
			console.log(err);
		});
}

// get user's timeline posts
// @param {String} email
export function getTimelinePosts(email) {

	// handling requests for fetching user's timeline posts
	axios.get(`http://localhost:5100/api/post/timeline/${email}`)
		.then(res => {
			store.dispatch(setTimelinePosts(res.data));
		})
		.catch(err => {
			console.log(err);
		});
}