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

export function destroyProfile() {
	return {
		type: 'DESTROY_FOREIGN_PROFILE'
	};
}