/*
* Loader presentation component
* @props - active
*/

import React, { Component } from 'react';

class Loader extends Component {
	render() {
		return (
			<div className="intro-loader"
				style={ (this.props.active) ? {display: "inline"}  : {display: "none"}}>
			  	<div className="load-line"></div>
			  	<div className="load-line"></div>
			  	<div className="load-line"></div>
			  	<div className="load-line"></div>
			</div>
		);
	}
}

export default Loader;