/*
* HTTP Accessor Methods
* @methods - readProfileViaGoogle, createProfileViaGoogle, searchUserAPI, getNewUserProfile,
*          setPassword, follow, unfollow, getUserFollowers, getUserFollowing, getSuggestionsForUser
*/

import axios from 'axios';
import { newLogin, populateDataSourceUser, foreignUserSearch, followSuccess, unfollowSuccess,
		setProfileFollowers, setProfileFollowing, setSuggestions } from '../actions/user.actions';
import { getOwnPosts, getTimelinePosts } from '../apis/post.api';
import store from '../store';
import { browserHistory } from 'react-router';

// checks if a profile already exists; if not then creates one
// @param {Object} profile
export function readProfileViaGoogle(profile) {

	if(typeof profile.email == undefined) {
		return;
	}

	axios.get(`http://localhost:5100/api/user/${profile.email}`)
		.then(res => {
			if(res.data == null) {
				createProfileViaGoogle(profile);
			} else {
				store.dispatch(newLogin(profile, res.data));
    			getTimelinePosts(profile.email);
			}
		})
		.catch(err => {
			console.log(err);
		});
}

// creates a new profile
// @param {Object} profile
export function createProfileViaGoogle(profile) {

	axios.post('http://localhost:5100/api/register/google', profile)
		.then(res => {
			readProfileViaGoogle(profile);
		})
		.catch(err => {
			console.log(err);
		});
}

// searches all possible users corresponding to the argument string
// @param {String} str
export function searchUserAPI(str) {

	axios.get(`http://localhost:5100/api/find/users/${str}`)
		.then(res => {
			store.dispatch(populateDataSourceUser(res.data));
		})
		.catch(err => {
			console.log(err);
		})
}

// gets foreign user's profile
// @param {String} email
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

// sets password for a user
// @param {String} pwd
// @param {String} email
export function setPassword(pwd, email) {
	axios.post(`http://localhost:5100/api/setpwd/${email}`, pwd)
		.then(res => {
			console.log(res.data);
		})
		.catch(err => {
			console.log(err);
		})
}

// follow a user
// @param {String} follower
// @param {String} followee
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

// unfollow a user
// @param {String} unfollower
// @param {String} unfollowee
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

// gets followers profiles for a user
// @param {String} email
export function getUserFollowers(email) {
	axios.get(`http://localhost:5100/api/user/followers/${email}`)
		.then(res => {
			store.dispatch(setProfileFollowers(res.data));
		})
		.catch(err => {
			console.log(err);
	})
}

// gets following profiles for a user
// @param {String} email
export function getUserFollowing(email) {
	axios.get(`http://localhost:5100/api/user/following/${email}`)
		.then(res => {
			store.dispatch(setProfileFollowing(res.data));
		})
		.catch(err => {
			console.log(err);
		})
}

// gets suggestions for a user
// @param {Object} profile
export function getSuggestionsForUser(profile) {
	axios.get(`http://localhost:5100/api/user/suggestion/${profile.email}`)
		.then(res => {
			store.dispatch(setSuggestions(res.data));
		})
		.catch(err => {
			console.log(err);
		})
}