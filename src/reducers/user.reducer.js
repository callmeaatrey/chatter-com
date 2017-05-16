// User reducer

import * as types from '../constants/actions.constants';
import _ from 'lodash';

const initialUserState = {
	searchDataSource: [],
	suggestions: []
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

			var updatedForeignProfile = Object.assign({}, state.foreignUserProfile, {
				followers: followers,
				meta: {
					followers: state.foreignUserProfile.meta.followers += 1,
					posts: state.foreignUserProfile.meta.posts,
					following: state.foreignUserProfile.meta.following
				}
			});

			var updatedFollowingLocal = _.concat(state.following, action.followee);

			var followerProfile = {
				name: state.name,
				email: state.email,
				nickname: state.nickname,
				picture: state.picture
			}
			var updatedMeta = state.meta;

			updatedMeta.followers += 1;

			var updatedFollowersProfiles = _.concat(state.followersProfiles, followerProfile);

			return Object.assign({}, state, {
				following: updatedFollowingLocal,
				meta: updatedMeta,
				foreignUserProfile: updatedForeignProfile,
				followersProfiles: updatedFollowersProfiles
			});

		case types.UNFOLLOW_SUCCESS:
			var followers = _.filter(state.foreignUserProfile.followers, (follower, index) => {
				return follower !== action.unfollower
			});

			var updatedForeignProfile = Object.assign({}, state.foreignUserProfile, {
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
			var updatedMeta = state.meta;
			updatedMeta.followers -= 1;

			var updatedFollowersProfiles = _.filter(state.followersProfiles, (follower, index) => {
				return follower.email !== action.unfollower
			});

			return Object.assign({}, state, {
				following: updatedFollowingLocal,
				meta: updatedMeta,
				foreignUserProfile: updatedForeignProfile,
				followersProfiles: updatedFollowersProfiles
			});

		case types.CREATE_POST_INCREMENT:
			return Object.assign({}, state, {
				meta: {
					posts: state.meta.posts += 1,
					followers: state.meta.followers,
					following: state.meta.following
				}
			});

		case types.SET_PROFILE_FOLLOWERS:
			console.log(action.followers);
			return Object.assign({}, state, {
				followersProfiles: action.followers
			});

		case types.SET_PROFILE_FOLLOWING:
			return Object.assign({}, state, {
				followingProfiles: action.following
			});

		case types.SET_SUGGESTIONS_USER:
			return Object.assign({}, state, {
				suggestions: action.suggestions
			});
	}
	return state;
}

export default userReducer;