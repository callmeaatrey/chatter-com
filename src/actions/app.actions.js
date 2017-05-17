/*
* App actions
* @methods - loaderToggle, togglePostLoader, editorDisable
*/

import * as types from '../constants/actions.constants';

// action handler for toggling the loader
export function loaderToggle() {
	return {
		type: 'LOADER_TOGGLE'
	};
}

// action handler for toggling post loader
// @param {bool} toggle
export function togglePostLoader(toggle) {
	return {
		type: 'POST_LOADER_TOGGLE',
		toggle: toggle
	};
}

// action handler for disabling editor while posting
export function editorDisable() {
	return {
		type: 'EDITOR_DISABLED'
	};
}