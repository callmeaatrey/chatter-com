// User reducer

import * as types from '../constants/actions.constants';
import _ from 'lodash';

const initialUserState = {

};

const userReducer = function(state=initialUserState, action) {
	switch(action.type) {
		case types.LOGIN:
			console.log(action.profile);
			return Object.assign({}, state, {
				loader: !state.loader,
				email: action.profile.email,
				name: action.profile.name,
				picture: action.profile.picture,
				nickname: action.profile.nickname,
				followers: action.profile.followers,
				following: action.profile.following,
			});
	}
	return state;
}

export default userReducer;