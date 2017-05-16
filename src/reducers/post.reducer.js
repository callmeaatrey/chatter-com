// Post reducer

import * as types from '../constants/actions.constants';
import _ from 'lodash';

const initialPostState = {
	posts: [],
	foreignUserPosts: []
};

const postReducer = function(state=initialPostState, action) {
	switch(action.type) {
		case types.NEW_POST:
			var post = state.posts;
			post.unshift(action.post);
			return Object.assign({}, state, {
				posts: post
			});

		case types.USER_OWN_POSTS:
			return Object.assign({}, state, {
				posts: action.posts
			});

		case types.USER_TIMELINE_POSTS:
			return Object.assign({}, state, {
				posts: action.posts
			});

		case types.FOREIGN_USER_POSTS:
			return Object.assign({}, state, {
				foreignUserPosts: action.posts
			});
	}
	return state;
}

export default postReducer;