// User actions

import * as types from '../constants/actions.constants';

// action handler for toggling the loader
export function newLogin(profile, dbData) {
	return {
		type: 'LOGIN',
		profile: dbData
	};
}