/*
* User actions
* @methods - newLogin, populateDataSourceUser, loaderInit, foreignUserSearch, destroyProfile,
*          followSuccess, unfollowSuccess, createPostIncrement, setProfileFollowers, setProfileFollowing,
*          setSuggestions
*/

import * as types from '../constants/actions.constants';

// action handler for toggling the loader
// @param {Object} profile
// @param {Object} dbData
export function newLogin(profile, dbData) {
	return {
		type: 'LOGIN',
		profile: dbData
	};
}

// action handler for populating the search user dataSource
// @param {Object} users
export function populateDataSourceUser(users) {
	return {
		type: 'POPULATE_DATA_SOURCE_USER',
		users: users
	};
}

// action handler for initialising loader
export function loaderInit() {
	return {
		type: 'LOADER_INIT'
	};
}

// action handler for storing not your profile
// @param {Object} profile
export function foreignUserSearch(profile) {
	return {
		type: 'FOREIGN_USER_SUCCESS',
		profile: profile
	};
}

// action handler for destroying profile page on unmount
export function destroyProfile() {
	return {
		type: 'DESTROY_FOREIGN_PROFILE'
	};
}

// action handler for modifying state on successful follow
// @param {String} follower
// @param {String} followee
export function followSuccess(follower, followee) {
	return {
		type: 'FOLLOW_SUCCESS',
		follower: follower,
		followee: followee
	};
}

// action handler for modifying state on successful unfollow
// @param {String} unfollower
// @param {String} unfollowee
export function unfollowSuccess(unfollower, unfollowee) {
	return {
		type: 'UNFOLLOW_SUCCESS',
		unfollower: unfollower,
		unfollowee: unfollowee
	};
}

// action handler for incrementing post counter
export function createPostIncrement() {
	return {
		type: 'CREATE_POST_INCREMENT'
	};
}

// action handler for modifying state on successfull followers data fetch
// @param {Object} data
export function setProfileFollowers(data) {
	return {
		type: 'SET_PROFILE_FOLLOWERS',
		followers: data,
	};
}

// action handler for modifying state on successful following data fetch
// @param {Object} data
export function setProfileFollowing(data) {
	return {
		type: 'SET_PROFILE_FOLLOWING',
		following: data
	}
}

// action handler for modifying state on successful suggestion data fetch
// @param {Object} sugg
export function setSuggestions(sugg) {
	return {
		type: 'SET_SUGGESTIONS_USER',
		suggestions: sugg
	};
}