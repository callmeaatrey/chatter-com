// Profile container component

import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store';
import { readProfileViaGoogle , searchUserAPI, getNewUserProfile, setPassword } from '../apis/user.api';
import { getSingleUserPosts } from '../apis/post.api';
import { loaderInit, destroyProfile } from '../actions/user.actions';
import AuthService from '../utils/AuthService.util';
import Profile from '../components/Profile.component';

class ProfileContainer extends Component {
	constructor(props, context) {
		super(props, context);
	}

	// lifecycle methods
 	componentWillMount() {
 		(function(props) {
 			store.dispatch(loaderInit());
 			var timeout = setTimeout(function() {
 			if(JSON.stringify(props.auth.getProfile()) != JSON.stringify({})) {
 				var profile = props.auth.getProfile();
 				readProfileViaGoogle(profile);
 				getNewUserProfile(props.params.email);
 				getSingleUserPosts(props.params.email);
 				clearTimeout(timeout);
 			} else {
 				console.log('still waiting!');
 			}
 		}, 1000);

 		}(this.props));
 	}

 	componentWillReceiveProps(nextProps) {
 		if(nextProps.params.email !== this.props.params.email) {
 			console.log('new props came');
 			store.dispatch(loaderInit());
 			getNewUserProfile(nextProps.params.email);
 		}
 	}

 	componentWillUnmount() {
 		store.dispatch(destroyProfile());
 	}

	// searching a user
 	searchUser(str) {
 		searchUserAPI(str);
 	}

 	// setting user password
 	setPassword(pwd, email) {
 		setPassword(pwd, email);
 	}

	render() {
		var { app, auth, post, user, params } = this.props;
		return (
			<Profile
				foreignUser={user.foreignUserProfile}
				foreignUserPosts={post.foreignUserPosts}
				foreignEmail={params.email}
				loggedInEmail={user.email}
				loggedInName={user.name}
				loggedInNickname={user.nickname}
				loggedInPicture={user.picture}
				loggedInFollowers={user.followers}
				loggedInFollowing={user.following}
				loggedInId={user._id}
				loggedInMeta={user.meta}
				loader={app.loader}
				searchDataSource={user.searchDataSource}
				searchUser={this.searchUser}
				logout={auth.logout}
				setPassword={this.setPassword}
			/>
		);
	}
}

const mapStateToProps = (store) => {
	return {
		app: store.appState,
		user: store.userState,
		post: store.postState
	};
}

export default connect(mapStateToProps)(ProfileContainer);