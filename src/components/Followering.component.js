/*
* Follower and Following presentation component
* @props - email, picture, name, nickname
*/

import React, { Component } from 'react';
import { Card } from 'antd';
import { Link } from 'react-router';

class Followering extends Component {
	render() {
		return (
			<Link to={`/profile/${this.props.email}`} style={{ color: 'black', textDecoration: 'none' }}>
				{/* Followering profile card */}
				<Card style={{ width: '100%', marginBottom: '1.5em' }}>
					<div className="row">
						<div className="col-md-2 col-lg-2 col-sm-2 col-xs-4">
							<img className="img-circle-lg followering-picture" src={this.props.picture} height="48" />
						</div>
						<div className="col-md-6 col-lg-6 col-sm-6 col-xs-8">
	    					<p className="followering-name">{this.props.name}</p>
	    					<p className="followering-nickname">{this.props.nickname}</p>
	    				</div>
	    			</div>
				</Card>
			</Link>
		);
	}
}

export default Followering;
