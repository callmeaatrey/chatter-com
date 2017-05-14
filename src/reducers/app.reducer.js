// Main application reducer

import * as types from '../constants/actions.constants';
import _ from 'lodash';

const initialAppState = {
	loader: true
};

const appReducer = function(state=initialAppState, action) {
	switch(action.type) {
		case types.LOGIN:
			return Object.assign({}, state, {
				loader: !state.loader
			});
	}
	return state;
}

export default appReducer;