// Home Presentation Component

import React, { Component } from 'react';
import { Layout, Menu, Breadcrumb, Dropdown, Icon, BackTop, Card } from 'antd';
import Loader from './Loader.component';
import Search from './Search.component';
import AuthService from '../utils/AuthService.util';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class Home extends Component {
	render() {
		const dropdownMenu = (
			<Menu>
				<Menu.Item key="1">Profile</Menu.Item>
				<Menu.Item key="2">My Posts</Menu.Item>
				<Menu.Divider />
				<Menu.Item key="3">
					<a href="" onClick={this.props.logout}>
						Not you? Logout
					</a>
				</Menu.Item>
			</Menu>
		);

		return (
			<div className="home-wrapper">
				<Loader active={this.props.loader} />
				<div className="home-main"
					style={ (!this.props.loader) ? {display: "inline"}  : {display: "none"}}>
					<Layout className="home-layout">
    					<Header style={{ position: 'fixed', width: '100%', zIndex: 1 }}>
    						<div className="row">
    							<div className="col-md-6 col-sm-6 col-xs-4">
							      	<Menu
							        	theme="dark"
							        	mode="horizontal"
							        	defaultSelectedKeys={['1']}
							        	style={{ lineHeight: '64px'}}
							      	>
							      		<Menu.Item key="1"><h2>ChatterCom</h2></Menu.Item>
								        <Menu.Item key="2">

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
								        		<a className="ant-dropdown-link" href="#">
										          	Hover me <Icon type="down" />
										        </a>
								        	</Dropdown>
								        </Menu.Item>
		      						</Menu>
		      					</div>
	      					</div>
    					</Header>
    					<Content style={{ padding: '0 50px', marginTop: 64 }}>
      						<Layout style={{ padding: '24px 0' }}>
      							<div className="row">
      								<div className="col-md-offset-2 col-md-8 col-lg-offset-2 col-lg-8">
      									<div className="row">
		      								<div className="col-md-3 col-lg-3 col-sm-3 col-xs-12">
		      									<div className="fixed-sider">
					        						<Sider width={'100%'} style={{ background: '#fff' }}>
											          	<Menu
											            	mode="inline"
											            	defaultSelectedKeys={['1']}
											            	defaultOpenKeys={['sub1']}
											            	style={{ height: '100%' }}
											          	>
						            						<SubMenu key="sub1" title={<span><Icon type="user" />subnav 1</span>}>
						              							<Menu.Item key="1">option1</Menu.Item>
						              							<Menu.Item key="2">option2</Menu.Item>
						              							<Menu.Item key="3">option3</Menu.Item>
						              							<Menu.Item key="4">option4</Menu.Item>
						            						</SubMenu>
						            						<SubMenu key="sub2" title={<span><Icon type="laptop" />subnav 2</span>}>
						              							<Menu.Item key="5">option5</Menu.Item>
						              							<Menu.Item key="6">option6</Menu.Item>
						              							<Menu.Item key="7">option7</Menu.Item>
						              							<Menu.Item key="8">option8</Menu.Item>
						            						</SubMenu>
						            						<SubMenu key="sub3" title={<span><Icon type="notification" />subnav 3</span>}>
						              							<Menu.Item key="9">option9</Menu.Item>
						              							<Menu.Item key="10">option10</Menu.Item>
						              							<Menu.Item key="11">option11</Menu.Item>
						              							<Menu.Item key="12">option12</Menu.Item>
						            						</SubMenu>
					          							</Menu>
					        						</Sider>
					        					</div>
				        					</div>
				        					<div className="col-md-6 col-lg-6 col-sm-6 col-xs-12">
					        					<Card style={{ width: '100%' }}>
    												<p>Card content</p>
    												<p>Card content</p>
    												<p>Card content</p>
  												</Card>
  												<Card style={{ width: '100%' }}>
    												<p>Card content</p>
    												<p>Card content</p>
    												<p>Card content</p>
  												</Card>
  												<Card style={{ width: '100%' }}>
    												<p>Card content</p>
    												<p>Card content</p>
    												<p>Card content</p>
  												</Card>
  												<Card style={{ width: '100%' }}>
    												<p>Card content</p>
    												<p>Card content</p>
    												<p>Card content</p>
  												</Card>
  												<Card style={{ width: '100%' }}>
    												<p>Card content</p>
    												<p>Card content</p>
    												<p>Card content</p>
  												</Card>
  												<Card style={{ width: '100%' }}>
    												<p>Card content</p>
    												<p>Card content</p>
    												<p>Card content</p>
  												</Card>
  												<Card style={{ width: '100%' }}>
    												<p>Card content</p>
    												<p>Card content</p>
    												<p>Card content</p>
  												</Card>
  												<Card style={{ width: '100%' }}>
    												<p>Card content</p>
    												<p>Card content</p>
    												<p>Card content</p>
  												</Card>
  												<Card style={{ width: '100%' }}>
    												<p>Card content</p>
    												<p>Card content</p>
    												<p>Card content</p>
  												</Card>
  												<Card style={{ width: '100%' }}>
    												<p>Card content</p>
    												<p>Card content</p>
    												<p>Card content</p>
  												</Card>
  												<Card style={{ width: '100%' }}>
    												<p>Card content</p>
    												<p>Card content</p>
    												<p>Card content</p>
  												</Card>
					        				</div>
					        				<div className="col-md-3 col-lg-3 col-sm-3 col-xs-12">
					        					<Card style={{ width: '100%' }}>
													<span className="menu-header">People</span>
												</Card>
					        				</div>
					        			</div>
				        			</div>
		        				</div>
      						</Layout>
    					</Content>
  					</Layout>
				</div>
			</div>
		);
	}
}

export default Home;