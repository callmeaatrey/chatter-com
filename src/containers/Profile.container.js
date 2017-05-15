// Profile container component

import React, { Component } from 'react';
import Profile from '../components/Profile.component';
import { connect } from 'react-redux';
import store from '../store';
import { searchUserAPI } from '../apis/user.api';
import AuthService from '../utils/AuthService.util';

class ProfileContainer extends Component {
	constructor(props, context) {
		super(props, context);
	}

	// searching a user
 	searchUser(str) {
 		searchUserAPI(str);
 	}

	render() {
		var { app, auth, post, user, params } = this.props;
		return (
			<Profile
				email={params.email}
				loader={false}
				searchDataSource={user.searchDataSource}
				searchUser={this.searchUser}
				picture={user.picture}
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