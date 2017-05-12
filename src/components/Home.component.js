// Home Presentation Component

import React, { Component } from 'react';
import AuthService from '../utils/AuthService.util';

class Home extends Component {
	render() {
		return (
			<div>
				<h1>Home</h1>
				<button onClick={this.props.auth.logout}>Logout</button>
			</div>
		);
	}
}

export default Home;