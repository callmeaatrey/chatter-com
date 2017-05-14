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
		<Option key={user.id} text={user.name}>
			{user.name}
		</Option>
	);
}

class Search extends Component {

	handleSearch(value) {
		value ? searchResult(value) : []
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
					onSearch={this.handleSearch}
					placeholder="Search a user"
					allowClear={true}
				>
				</AutoComplete>
			</div>
		);
	}
}

export default Search;