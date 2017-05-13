// Login Container Component

import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store';
import AuthService from '../utils/AuthService.util';

// bringing in the presentation component
import Login from '../components/Login.component';

class LoginContainer extends Component {
	render() {
		var { auth, app } = this.props;
		return (
			<Login
				login={auth.login.bind(this)}/>
		);
	}
}

// to isolate which parts of the state this component need as it's props
const mapStateToProps = (store) => {
	return {
		app: store.appState
	};
}

export default connect(mapStateToProps)(LoginContainer);