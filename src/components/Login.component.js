// Landing Presentation Component

import React, { Component } from 'react';
import AuthService from '../utils/AuthService.util';

class Login extends Component {
	render() {
		return (
			<div className="login-wrapper">
				<button onClick={this.props.auth.login.bind(this)}>Login</button>
			</div>
		);
	}
}

export default Login;