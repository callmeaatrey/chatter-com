// Post actions

export function setNewPost(post) {
	return {
		type: 'NEW_POST',
		post: post
	};
}

export function setOwnPosts(posts) {
	return {
		type: 'USER_OWN_POSTS',
		posts: posts
	};
}

export function foreignUserPosts(posts) {
	return {
		type: 'FOREIGN_USER_POSTS',
		posts: posts
	};
}