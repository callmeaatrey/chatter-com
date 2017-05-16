// Profile presentation component

import React, { Component } from 'react';
import { Layout, Menu, Dropdown, Icon, BackTop, Card, Button, Tabs } from 'antd';
import Navbar from './Navbar.component';
import Loader from './Loader.component';
import SettingsForm from './ProfileSettings.component';
import PostCard from './PostCard.component';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;
const TabPane = Tabs.TabPane;

class Profile extends Component {
	render() {
		return (
			<div className="profile-wrapper">
				<Loader active={this.props.loader} />
				<div className="profile-main"
					style={ (!this.props.loader) ? {display: "inline"}  : {display: "none"}}>
					<Layout className="profile-layout">
						<Navbar
							currentUser={this.props.loggedInEmail}
							searchDataSource={this.props.searchDataSource}
							searchUser={this.props.searchUser}
							picture={this.props.loggedInPicture}
							logout={this.props.logout}
						/>
						<Content style={{ padding: '0 50px', marginTop: 64 }}>
							<Layout style={{ padding: '24px 0' }}>
								<div className="row">
									<div className="col-md-offset-2 col-md-8 col-lg-offset-2 col-lg-8">
										<div className="row">
	      									<div className="col-md-3 col-lg-3 col-sm-3 col-xs-12">
		      									<div className="fixed-sider">
					        						<Sider width={'100%'} style={{ background: '#fff', border: '1px solid lightgrey', paddingBottom: '16px' }}>
					        							<div className="row profile-pic">
					        								<div className="col-md-12 col-lg-12">
					        									<img className="img-circle-xlg" src={this.props.foreignUser !== undefined ? this.props.foreignUser.picture : ''} />
					        								</div>
					        							</div>
					        							<div className="row">
					        								<div className="col-md-12 col-lg-12">
					        									<p className="profile-name">{this.props.foreignUser !== undefined ? this.props.foreignUser.name : ''}</p>
					        									<p className="profile-nickname">{this.props.foreignUser !== undefined ? this.props.foreignUser.nickname : ''}</p>
					        								</div>
					        							</div>
					        							<div className="row meta">
					        								<div className="col-md-6 col-lg-6">
					        									<p className="profile-meta">
					        										{this.props.foreignUser !== undefined ? this.props.foreignUser.meta.posts : 0}
					        									</p>
					        									<p className="profile-meta-tag">Posts</p>
					        								</div>
						        							<div className="col-md-6 col-lg-6">
					        									<p className="profile-meta">
					        										{this.props.foreignUser !== undefined ? this.props.foreignUser.meta.followers : 0}
					        									</p>
						        								<p className="profile-meta-tag">Followers</p>
						        							</div>
					        							</div>
					        							{
					        								this.props.foreignEmail != this.props.loggedInEmail
					        								?
					        									<div className="row">
						        									<div className="col-md-12 col-lg-12 profile-follow">
						        										<Button>Follow</Button>
						        									</div>
						        								</div>
					        								:
					        									''
					        							}
					        						</Sider>
					        					</div>
					        				</div>
					        				<div className="col-md-6 col-lg-6">
					        					<div className="row">
					        						<div className="col-md-12">
						        						<Tabs defaultActiveKey="1">
	    													<TabPane tab="Posts" key="1">
	    													{
	    														this.props.foreignUserPosts.length > 0
				        										?
																	this.props.foreignUserPosts.map((post, index) => {
																		return (
																			<PostCard
																				key={index}
																				picture={post.meta.picture}
																				email={post.meta.email}
																				nickname={post.meta.nickname}
																				date={post.meta.date}
																				body={post.body}
																			/>
																		)
																	})
																:
																	""
															}
	    													</TabPane>
	    													<TabPane tab="Followers" key="2">
	    														Tab 3
	    													</TabPane>
	    													<TabPane tab="Following" key="3">
	    														Tab 3
	    													</TabPane>
	    													{
						        								this.props.foreignEmail === this.props.loggedInEmail
						        								?
						        									<TabPane tab="Profile Settings" key="4">
						        										<SettingsForm
						        											email={this.props.loggedInEmail}
						        											nickname={this.props.loggedInNickname}
						        											setPassword={this.props.setPassword}/>
	    															</TabPane>
						        								:
						        									''
					        								}
	  													</Tabs>
	  												</div>
					        					</div>
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

export default Profile;