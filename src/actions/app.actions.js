// App actions

import * as types from '../constants/actions.constants';

// action handler for toggling the loader
export function loaderToggle() {
	return {
		type: 'LOADER_TOGGLE'
	};
}

export function togglePostLoader(toggle) {
	return {
		type: 'POST_LOADER_TOGGLE',
		toggle: toggle
	};
}

export function editorDisable() {
	return {
		type: 'EDITOR_DISABLED'
	};
}