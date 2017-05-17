/*
* Skeleton component
* @props - route
*/

import React, { Component } from 'react';

class Skeleton extends Component {
	render() {
		let children = null;
		if(this.props.children) {
			children = React.cloneElement(this.props.children, {
				auth: this.props.route.auth
			});
		}

		return (
			<div className="skeleton">
				{children}
			</div>
		);
	}
}

export default Skeleton;