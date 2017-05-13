// Login Container Component

import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store';

// bringing in the presentation component
import Login from '../components/Login.component';

class LoginContainer extends Component {
	render() {
		return (
			<Login />
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