// Post actions

export function newPost(post) {
	return {
		type: 'NEW_POST',
		post: post
	};
}