/*
* Post actions
* @methods - setNewPost, setOwnPosts, foreignUserPosts, setTimelinePosts
*/

// action handler for setting new post
// @param {Object} post
export function setNewPost(post) {
	return {
		type: 'NEW_POST',
		post: post
	};
}

// action handler for setting user own posts
// @param {Object} posts
export function setOwnPosts(posts) {
	return {
		type: 'USER_OWN_POSTS',
		posts: posts
	};
}

// action handler for setting foreign user posts
// @param {Object} posts
export function foreignUserPosts(posts) {
	return {
		type: 'FOREIGN_USER_POSTS',
		posts: posts
	};
}

// action handler for setting timeline posts
// @param {Object} posts
export function setTimelinePosts(posts) {
	return {
		type: 'USER_TIMELINE_POSTS',
		posts: posts
	};
}