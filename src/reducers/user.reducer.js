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

		case types.FOLLOW_SUCCESS:
			var followers = _.concat(state.foreignUserProfile.followers, action.follower);
			var metaFollowers = state.meta.followers += 1;

			var copyForeignProfile = Object.assign({}, state.foreignUserProfile, {
				followers: followers,
				meta: {
					followers: state.foreignUserProfile.meta.followers += 1,
					posts: state.foreignUserProfile.meta.posts,
					following: state.foreignUserProfile.meta.following
				}
			});

			var updatedFollowingLocal = _.concat(state.following, action.followee);
			var copyMeta = state.meta;
			copyMeta.followers += 1;

			console.log('new following' + updatedFollowingLocal);
			console.log('new followers' + copyForeignProfile);
			return Object.assign({}, state, {
				following: updatedFollowingLocal,
				meta: copyMeta,
				foreignUserProfile: copyForeignProfile
			});

		case types.UNFOLLOW_SUCCESS:
			var followers = _.filter(state.foreignUserProfile.followers, (follower, index) => {
				return follower !== action.unfollower
			});

			var copyForeignProfile = Object.assign({}, state.foreignUserProfile, {
				followers: followers,
				meta: {
					followers: state.foreignUserProfile.meta.followers -= 1,
					posts: state.foreignUserProfile.meta.posts,
					following: state.foreignUserProfile.meta.following
				}
			});

			var updatedFollowingLocal = _.filter(state.following, (followee, index) => {
				return followee !== action.unfollowee
			});
			var copyMeta = state.meta;
			copyMeta.followers -= 1;

			console.log('new following' + updatedFollowingLocal);
			console.log('new followers' + copyForeignProfile.followers);
			return Object.assign({}, state, {
				following: updatedFollowingLocal,
				meta: copyMeta,
				foreignUserProfile: copyForeignProfile
			});
	}
	return state;
}

export default userReducer;