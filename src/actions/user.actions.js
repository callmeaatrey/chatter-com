// User actions

import * as types from '../constants/actions.constants';

// action handler for toggling the loader
export function newLogin(profile, dbData) {
	return {
		type: 'LOGIN',
		profile: dbData
	};
}

// action handler for populating the search user dataSource
export function populateDataSourceUser(users) {
	return {
		type: 'POPULATE_DATA_SOURCE_USER',
		users: users
	};
}

export function loaderInit() {
	return {
		type: 'LOADER_INIT'
	};
}

// action handler for storing not your profile
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
export function followSuccess(follower, followee) {
	return {
		type: 'FOLLOW_SUCCESS',
		follower: follower,
		followee: followee
	};
}

// action handler for modifying state on successful unfollow
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

// action handler for modifying state on successfull followering data fetch
export function setProfileFollowers(data) {
	return {
		type: 'SET_PROFILE_FOLLOWERS',
		followers: data,
	};
}

export function setProfileFollowing(data) {
	return {
		type: 'SET_PROFILE_FOLLOWING',
		following: data
	}
}