// HTTP Accessible Functions

import axios from 'axios';
import { newPost } from '../actions/post.actions';
import store from '../store';


// creates a new post
export function createPost(postData, profile) {

	// handling requests for creating new profile
	axios.post('http://localhost:5100/api/post/new', {profile: profile, data: postData})
		.then(res => {
			getSinglePost(res.data._id);
		})
		.catch(err => {
			console.log(err);
		});

}

// fetches user's own posts
export function getOwnPosts(email) {

}

// fetches a single post
export function getSinglePost(postId) {

	// handling requests for fetching a single post
	axios.get(`http://localhost:5100/api/post/single/${postId}`)
		.then(res => {
			if(res.data == null) {
				return;
			} else {
				store.dispatch(newPost(res.data));
			}
		})
		.catch(err => {
			console.log(err);
		});
}

// fetches user's timeline posts
export function getTimelinePosts(email) {

}