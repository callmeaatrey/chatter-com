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