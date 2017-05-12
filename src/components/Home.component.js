// Home Presentation Component

import React, { Component } from 'react';
import AuthService from '../utils/AuthService.util';

class Home extends Component {
	constructor(props, context) {
    	super(props, context)
    	this.state = {
      		profile: props.auth.getProfile()
    	}

    	props.auth.on('profile_incoming', (profile) => {
    		console.log(profile);
    	});
 	}

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