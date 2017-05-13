// App actions

import * as types from '../constants/actions.constants';

// action handler for toggling the loader
export function loaderToggle() {
	return {
		type: 'LOADER_TOGGLE'
	};
}