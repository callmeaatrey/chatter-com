// Home Presentation Component

import React, { Component } from 'react';
import AuthService from '../utils/AuthService.util';

class Home extends Component {
	constructor(props, context) {
    	super(props, context)
    	this.state = {
    		loader: true,
      		profile: props.auth.getProfile()
    	}

    	if(this.state.profile) {
    		console.log(this.state);
    	}

    	props.auth.on('profile_incoming', (profile) => {
    		console.log(profile);
    		this.setState({
    			loader: false
    		});
    	});
 	}

	render() {
		console.log(this.state);
		return (
			<div>
				<div className="intro-loader"
					style={ (this.state.loader) ? {display: "inline"}  : {display: "none"}}>
				  	<div className="load-line"></div>
				  	<div className="load-line"></div>
				  	<div className="load-line"></div>
				  	<div className="load-line"></div>
				</div>
				<div className="home-main"
					style={ (!this.state.loader) ? {display: "inline"}  : {display: "none"}}>
					<h1>Home</h1>
					<button onClick={this.props.auth.logout}>Logout</button>
				</div>
			</div>
		);
	}
}

export default Home;