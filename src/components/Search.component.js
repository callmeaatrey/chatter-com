// Search presentation component

import React, { Component } from 'react';
import { Icon, Button, Input, AutoComplete } from 'antd';

const Option = AutoComplete.Option;

function onSelect(user) {
	console.log(user);
}

function searchResult(query) {
	return [{
		id: 1,
		name: 'Shikher Aatrey'
	}];
}

function renderResult(user) {
	return (
		<Option key={user._id} text={user.name}>
			{user.name}
		</Option>
	);
}

class Search extends Component {

	handleSearch(value) {
		value ? this.props.searchUser(value) : ""
	}

	render() {
		console.log(this.props.dataSource);
		return (
			<div className="search-wrapper" style={{ width: 200 }}>
				<AutoComplete
					className="user-search"
					size="large"
					style={{ width: '100%' }}
					dataSource={this.props.dataSource.map(renderResult)}
					onSelect={this.onSelect}
					onSearch={this.handleSearch.bind(this)}
					placeholder="Search a user"
					allowClear={true}
				>
				</AutoComplete>
			</div>
		);
	}
}

export default Search;