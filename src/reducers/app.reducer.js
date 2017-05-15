// Main application reducer

import * as types from '../constants/actions.constants';
import _ from 'lodash';

const initialAppState = {
	loader: true,
	postLoader: false,
	loggedIn: false,
	editorDisabled: false,
};

const appReducer = function(state=initialAppState, action) {
	switch(action.type) {
		case types.LOGIN:
			return Object.assign({}, state, {
				loader: !state.loader,
				loggedIn: true
			});

		case types.POST_LOADER_TOGGLE:
			return Object.assign({}, state, {
				postLoader: action.toggle
			});

		case types.EDITOR_DISABLED:
			return Object.assign({}, state, {
				editorDisabled: true,
				postLoader: true
			});

		case types.NEW_POST:
			return Object.assign({}, state, {
				editorDisabled: false,
			});
	}
	return state;
}

export default appReducer;