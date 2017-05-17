/*
* Suggestion user presentation component
* @props - email, picture, name, nickname
*/

import React, { Component } from 'react';
import { Card } from 'antd';
import { Link } from 'react-router';

class Suggestion extends Component {
	render() {
		return (
			<Link to={`/profile/${this.props.email}`} style={{ color: 'black', textDecoration: 'none' }}>
				{/* Suggestion profile card */}
				<Card style={{ width: '100%', marginTop: '1em' }}>
					<div className="row">
						<div className="col-md-2 col-lg-2 col-sm-2 col-xs-2">
							<img className="img-circle-md suggestion-picture" src={this.props.picture} height="48" />
						</div>
						<div className="col-md-10 col-lg-10 col-sm-10 col-xs-10">
	    					<p className="suggestion-name">{this.props.name}</p>
	    					<p className="suggestion-nickname">{this.props.nickname}</p>
	    				</div>
	    			</div>
				</Card>
			</Link>
		);
	}
}

export default Suggestion;