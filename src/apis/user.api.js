// HTTP Accessible Functions

import axios from 'axios';
import { newLogin, populateDataSourceUser, foreignUserSearch, followSuccess, unfollowSuccess } from '../actions/user.actions';
import { getOwnPosts } from '../apis/post.api';
import store from '../store';
import { browserHistory } from 'react-router';

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

export function getNewUserProfile(email) {
	axios.get(`http://localhost:5100/api/user/${email}`)
		.then(res => {
			if(res.data == null) {
				browserHistory.replace('/404');
			} else {
				store.dispatch(foreignUserSearch(res.data));
			}
		})
		.catch(err => {
			console.log(err);
		})
}

export function setPassword(pwd, email) {
	axios.post(`http://localhost:5100/api/setpwd/${email}`, pwd)
		.then(res => {
			console.log(res.data);
		})
		.catch(err => {
			console.log(err);
		})
}

export function follow(follower, followee) {
	axios.put(`http://localhost:5100/api/follow/from/${follower}/to/${followee}`, {})
		.then(res => {
			console.log(res.data);
			store.dispatch(followSuccess(follower, followee));
		})
		.catch(err => {
			console.log(err);
		})
}

export function unfollow(unfollower, unfollowee) {
	axios.put(`http://localhost:5100/api/unfollow/from/${unfollower}/to/${unfollowee}`, {})
		.then(res => {
			console.log(res.data);
			store.dispatch(unfollowSuccess(unfollower, unfollowee));
		})
		.catch(err => {
			console.log(err);
		})
}