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
	}
	return state;
}

export default postReducer;