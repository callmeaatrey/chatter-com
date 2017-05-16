// Search presentation component

import React, { Component } from 'react';
import { Icon, Button, Input, AutoComplete } from 'antd';
import { Link } from 'react-router';

const Option = AutoComplete.Option;

function renderResult(user) {
	return (
		<Option key={user._id} text={user.name}>
			<Link to={`/profile/${user.email}`} style={{ color: 'black' }}>
				<div className="row">
					<div className="col-md-3">
						<img className="img-circle-md" src={user.picture} />
					</div>
					<div className="col-md-9">
						<div className="search-user">
							<span className="search-user-name">{user.name}</span>
							<span className="search-user-nickname">{user.nickname}</span>
						</div>
					</div>
				</div>
			</Link>
		</Option>
	);
}

function onSelect(user) {
	console.log(user);
}

class Search extends Component {
	constructor() {
		super();
	}

	handleSearch(value) {
		value ? this.props.searchUser(value) : ""
	}

	render() {
		return (
			<div className="search-wrapper" style={{ width: 200 }}>
				<AutoComplete
					className="user-search"
					size="large"
					style={{ width: '100%' }}
					dataSource={this.props.dataSource.map(renderResult)}
					onSelect={onSelect}
					onSearch={this.handleSearch.bind(this)}
					placeholder="Search a user"
					allowClear={true}
					optionLabelProp="text"
				>
				</AutoComplete>
			</div>
		);
	}
}

export default Search;