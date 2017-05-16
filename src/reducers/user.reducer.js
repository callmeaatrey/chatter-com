// User reducer

import * as types from '../constants/actions.constants';
import _ from 'lodash';

const initialUserState = {
	searchDataSource: []
};

const userReducer = function(state=initialUserState, action) {
	switch(action.type) {
		case types.LOGIN:
			return Object.assign({}, state, {
				loader: !state.loader,
				email: action.profile.email,
				name: action.profile.name,
				picture: action.profile.picture,
				nickname: action.profile.nickname,
				followers: action.profile.followers,
				following: action.profile.following,
				meta: action.profile.meta,
				_id: action.profile._id
			});

		case types.POPULATE_DATA_SOURCE_USER:
			console.log(action.users);
			return Object.assign({}, state, {
				searchDataSource: action.users
			});

		case types.FOREIGN_USER_SUCCESS:
			return Object.assign({}, state, {
				foreignUserProfile: action.profile
			});

		case types.DESTROY_FOREIGN_PROFILE:
			return Object.assign({}, state, {
				foreignUserProfile: undefined
			});
	}
	return state;
}

export default userReducer;