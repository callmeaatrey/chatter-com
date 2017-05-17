/*
* Post presentation component
* @props - index, picture, nickname, email, date, body
*/

import React, { Component } from 'react';
import { Card } from 'antd';
import { Link } from 'react-router';
import TimeSince from '../utils/TimeSince.util';

class PostCard extends Component {
	render() {
		return (
			<Card
				key={this.props.index}
				title={
					<div className="post-head-title">
						<img className="img-circle-sm" src={this.props.picture} />
						<Link
							to={`/profile/${this.props.email}`}
							style={{ color: 'black' }}
						>
							{this.props.nickname}
						</Link>
					</div>
				}
				extra={TimeSince(this.props.date)}
				style={{ width: '100%', marginBottom: '1.5em' }}
			>
		    	<p className="post-body">{this.props.body}</p>
		  	</Card>
		);
	}
}

export default PostCard;