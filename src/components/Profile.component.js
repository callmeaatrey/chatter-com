// Profile presentation component

import React, { Component } from 'react';
import { Layout, Menu, Dropdown, Icon, BackTop, Card } from 'antd';
import Navbar from './Navbar.component';
import Loader from './Loader.component';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class Profile extends Component {
	render() {
		return (
			<div className="profile-wrapper">
				<Loader active={this.props.loader} />
				<div className="profile-main"
					style={ (!this.props.loader) ? {display: "inline"}  : {display: "none"}}>
					<Layout className="profile-layout">
						<Navbar
							searchDataSource={this.props.searchDataSource}
							searchUser={this.props.searchUser}
							picture={this.props.picture}
						/>
						<Content style={{ padding: '0 50px', marginTop: 64 }}>
							<div>Hello {this.props.email}</div>
						</Content>
					</Layout>
				</div>
			</div>
		);
	}
}

export default Profile;