// Post reducer

import * as types from '../constants/actions.constants';
import _ from 'lodash';

const initialPostState = {
	posts: []
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
			console.log(action.posts);
			return Object.assign({}, state, {
				posts: action.posts
			});
	}
	return state;
}

export default postReducer;