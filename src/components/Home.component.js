// Home Presentation Component

import React, { Component } from 'react';
import Loader from './Loader.component';

class Home extends Component {
	render() {
		return (
			<div>
				<Loader active={this.props.loader} />
				<div className="home-main"
					style={ (!this.props.loader) ? {display: "inline"}  : {display: "none"}}>
					<h1>Home</h1>
					<button onClick={this.props.logout}>Logout</button>
				</div>
			</div>
		);
	}
}

export default Home;