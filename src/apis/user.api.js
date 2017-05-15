// HTTP Accessible Functions

import axios from 'axios';
import { newLogin, populateDataSourceUser } from '../actions/user.actions';
import { getOwnPosts } from '../apis/post.api';
import store from '../store';

// checks if a profile already exists
export function readProfileViaGoogle(profile) {
	console.log(profile);

	if(typeof profile.email == undefined) {
		return;
	}
	// handling requests for fetching user profiles or adding new profiles
	axios.get(`http://localhost:5100/api/user/${profile.email}`)
		.then(res => {
			if(res.data == null) {

				createProfileViaGoogle(profile);
			} else {
				console.log(profile);
				store.dispatch(newLogin(profile, res.data));
    			getOwnPosts(profile.email);
			}
		})
		.catch(err => {
			console.log(err);
		});
}

// creates a new profile
export function createProfileViaGoogle(profile) {
	console.log(profile);
	// handling requests for creating new profile
	axios.post('http://localhost:5100/api/register/google', profile)
		.then(res => {
			readProfileViaGoogle(profile);
		})
		.catch(err => {
			console.log(err);
		});
}

// searches all possible users
export function searchUserAPI(str) {

	// handling requests for searching users
	axios.get(`http://localhost:5100/api/find/users/${str}`)
		.then(res => {
			store.dispatch(populateDataSourceUser(res.data));
		})
		.catch(err => {
			console.log(err);
		})
}