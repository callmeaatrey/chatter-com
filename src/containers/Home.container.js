// Home Container Component

import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store';
import { loaderInit } from '../actions/user.actions';
import { loaderToggle, togglePostLoader } from '../actions/app.actions';
import { readProfileViaGoogle, searchUserAPI, getSuggestionsForUser } from '../apis/user.api';
import { createPost, getTimelinePosts, getOwnPosts } from '../apis/post.api';

// bringing in the presentation component
import Home from '../components/Home.component';
import AuthService from '../utils/AuthService.util';

class HomeContainer extends Component {
	constructor(props, context) {
    	super(props, context);

    	// called when emitted
    	props.auth.on('profile_incoming', (profile) => {
    		readProfileViaGoogle(profile);
    	});

 	}

 	// lifecycle methods
 	componentWillMount() {
 		(function(props) {
 			store.dispatch(loaderInit());
 			var timeout = setTimeout(function() {
 			if(JSON.stringify(props.auth.getProfile()) != JSON.stringify({})) {
 				var profile = props.auth.getProfile();
 				readProfileViaGoogle(profile);
 				getSuggestionsForUser(profile);
 				clearTimeout(timeout);
 			} else {
 				// console.log('waiting for the profile!');
 			}
 		}, 1000);

 		}(this.props));
 	}

 	// toggle post loader button
 	togglePostLoader() {
 		store.dispatch(togglePostLoader());
 	}

 	// initiating the save post process
 	createPost(data) {
 		createPost(data, this.props.user);
 	}

 	// searching a user
 	searchUser(str) {
 		searchUserAPI(str);
 	}

	render() {
		var { app, user, auth, post } = this.props;
		return (
			<Home
				email={user.email}
				name={user.name}
				nickname={user.nickname}
				picture={user.picture}
				followers={user.followers}
				following={user.following}
				id={user._id}
				meta={user.meta}
				suggestions={user.suggestions}
				loader={app.loader}
				logout={auth.logout}
				editorState={app.editorState}
				postLoader={app.postLoader}
				togglePostLoader={this.togglePostLoader}
				editorDisabled={app.editorDisabled}
				sendEditorData={this.createPost.bind(this)}
				posts={post.posts}
				searchDataSource={user.searchDataSource}
				searchUser={this.searchUser}/>
		);
	}
}

// to isolate which parts of the state this component need as it's props
const mapStateToProps = (store) => {
	return {
		app: store.appState,
		user: store.userState,
		post: store.postState
	}
};

export default connect(mapStateToProps)(HomeContainer);