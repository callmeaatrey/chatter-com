/*
* Navbar presentation component
* @props - currentUser, logout, searchDataSource, searchUser, picture
*/

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
						<div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
							Logged in using
						</div>
						<div className="col-md-12 col-lg-12 col-sm-12 col-xs-12">
							<strong>{this.props.currentUser}</strong>
						</div>
					</div>
				</Menu.Item>
				<Menu.Item key="2">
					<Link to={`/profile/${this.props.currentUser}`} style={{ color: 'black', textDecoration: 'none' }}>
						<div className="row">
								<div className="col-md-1 col-lg-1 col-sm-1 col-xs-1">
									<Icon type="contacts" />
								</div>
								<div className="col-md-11 col-lg-11 col-sm-11 col-xs-11">
									My Profile
								</div>
						</div>
					</Link>
				</Menu.Item>
				<Menu.Divider />
				<Menu.Item key="4">
					<div className="row" onClick={this.props.logout}>
						<div className="col-md-1 col-lg-1 col-sm-1 col-xs-1">
							<Icon type="unlock" />
						</div>
						<div className="col-md-11 col-lg-11 col-sm-11 col-xs-11">
							Not you? Logout
						</div>
					</div>
				</Menu.Item>
			</Menu>
		);

		return (
			<Header style={{ position: 'fixed', width: '100%', zIndex: 1 }}>
				{/* Search bar */}
    			<div className="row search-bar">
    				<div className="col-md-11 col-lg-11 col-xs-10 col-sm-10">
				      	<Menu
				        	theme="dark"
				        	mode="horizontal"
				        	defaultSelectedKeys={['1']}
				        	style={{ lineHeight: '64px'}}
				      	>
							<Menu.Item key="1">
								<h2 style={{color: '#fff'}}>
									<Link
										to="/home"
										style={{ color: '#fff', textDecoration: 'none' }}
									>
										ChatterCom
									</Link>
								</h2>
							</Menu.Item>
							<Menu.Item key="2">
								<div className="search-bar-main">
						        	<Search
						        		dataSource={this.props.searchDataSource}
						        		searchUser={this.props.searchUser}
						        	/>
						        </div>
							</Menu.Item>
		      			</Menu>
		      		</div>
		      		<div className="col-md-1 col-lg-1 col-sm-2 col-xs-2">
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