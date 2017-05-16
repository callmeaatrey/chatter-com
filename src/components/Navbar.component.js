// Navbar presentation component

import React, { Component } from 'react';
import Search from './Search.component';
import { Layout, Menu, Dropdown, Icon } from 'antd';
import { Link } from 'react-router';

const { Header } = Layout;

class Navbar extends Component {
	render() {
		const dropdownMenu = (
			<Menu>
				<Menu.Item key="1">
					<div className="row" style={{ cursor: 'default' }}>
						<div className="col-md-12">
							Logged in using
						</div>
						<div className="col-md-12">
							<strong>{this.props.currentUser}</strong>
						</div>
					</div>
				</Menu.Item>
				<Menu.Item key="2">
					<Link to={`/profile/${this.props.currentUser}`} style={{ color: 'black' }}>
						<div className="row">
								<div className="col-md-1">
									<Icon type="contacts" />
								</div>
								<div className="col-md-11">
									My Profile
								</div>
						</div>
					</Link>
				</Menu.Item>
				<Menu.Divider />
				<Menu.Item key="3">
					<div className="row">
						<div className="col-md-1">
							<Icon type="book" />
						</div>
						<div className="col-md-11">
							My Posts
						</div>
					</div>
				</Menu.Item>
				<Menu.Divider />
				<Menu.Item key="4">
					<div className="row" onClick={this.props.logout}>
						<div className="col-md-1">
							<Icon type="unlock" />
						</div>
						<div className="col-md-11">
							Not you? Logout
						</div>
					</div>
				</Menu.Item>
			</Menu>
		);

		return (
			<Header style={{ position: 'fixed', width: '100%', zIndex: 1 }}>
    			<div className="row">
    				<div className="col-md-6 col-sm-6 col-xs-4">
				      	<Menu
				        	theme="dark"
				        	mode="horizontal"
				        	defaultSelectedKeys={['1']}
				        	style={{ lineHeight: '64px'}}
				      	>
							<Menu.Item key="1"><h2 style={{color: '#fff'}}><Link to="/home" style={{ color: '#fff' }}>ChatterCom</Link></h2></Menu.Item>
							<Menu.Item key="2">
					        	<Search
					        		dataSource={this.props.searchDataSource}
					        		searchUser={this.props.searchUser}
					        	/>
							</Menu.Item>
		      			</Menu>
		      		</div>
		      		<div className="col-md-6 col-sm-6 col-xs-8">
				      	<Menu
				        	theme="dark"
				        	mode="horizontal"
				        	style={{ lineHeight: '64px', float: 'right'}}
				      	>
							<Menu.Item key="1">
					        	<Dropdown overlay={dropdownMenu}>
					        		<div className="ant-dropdown-link">
							          	<img className="img-circle-lg" src={this.props.picture} height="36" />
							          	<Icon type="down" />
							        </div>
					        	</Dropdown>
							</Menu.Item>
		      			</Menu>
		      		</div>
	      		</div>
    		</Header>
		);
	}
}

export default Navbar;