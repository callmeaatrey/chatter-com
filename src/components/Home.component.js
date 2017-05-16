// Home Presentation Component

import React, { Component } from 'react';
import { Layout, Menu, Dropdown, Icon, BackTop, Card } from 'antd';
import { Link } from 'react-router';
import Loader from './Loader.component';
import AuthService from '../utils/AuthService.util';
import Editor from './Editor.component';
import TimeSince from '../utils/TimeSince.util';
import Navbar from './Navbar.component';
import PostCard from './PostCard.component';

const { SubMenu } = Menu;
const { Header, Content, Footer, Sider } = Layout;

class Home extends Component {

	handleChange(val) {
		console.log(val);
	}

	sendEditorData(e) {
		this.props.sendEditorData(e);
	}

	render() {
		console.log(this.props.followers);
		return (
			<div className="home-wrapper">
				<Loader active={this.props.loader} />
				<div className="home-main"
					style={ (!this.props.loader) ? {display: "inline"}  : {display: "none"}}>
					<Layout className="home-layout">
						<Navbar
							currentUser={this.props.email}
							searchDataSource={this.props.searchDataSource}
							searchUser={this.props.searchUser}
							picture={this.props.picture}
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
					        									<img className="img-circle-xlg" src={this.props.picture} />
					        								</div>
					        							</div>
					        							<div className="row">
					        								<div className="col-md-12 col-lg-12">
					        									<p className="profile-name"><Link to={`/profile/${this.props.email}`} style={{ color: 'black' }}>{this.props.name}</Link></p>
					        									<p className="profile-nickname">{this.props.nickname}</p>
					        								</div>
					        							</div>
					        							<div className="row meta">
					        								<div className="col-md-offset-4 col-md-4 col-lg-offset-4 col-lg-4">
					        									<p className="profile-meta">
					        										{this.props.meta !== undefined ? this.props.meta.posts : 0}
					        									</p>
					        									<p className="profile-meta-tag">Posts</p>
					        								</div>
					        							</div>
					        						</Sider>
					        					</div>
				        					</div>
				        					<div className="col-md-6 col-lg-6 col-sm-6 col-xs-12">
				        						<div className="post-col">
				        							<div className="write-post">
				        								<Editor
				        									loading={this.props.postLoader}
				        									toggle={this.props.togglePostLoader}
				        									maxLength="140"
				        									name={this.props.name}
				        									postLoader={this.props.postLoader}
				        									editorDisabled={this.props.editorDisabled}
				        									sendEditorData={this.sendEditorData.bind(this)}
				        								/>
				        							</div>
				        							<div className="partition">
				        								<p className="random-info"
				        									style={ this.props.posts.length > 0 ? {display: "inline"} : {display: "none"} }>
				        									All posts
				        								</p>
				        							</div>
				        							<div className="post-timeline">
				        								{this.props.posts.length > 0
				        									?
															this.props.posts.map((post, index) => {
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

		  											</div>
	  											</div>
					        				</div>
					        				<div className="col-md-3 col-lg-3 col-sm-3 col-xs-12">
					        					<Card style={{ width: '100%' }}>
													<span className="menu-header">People you should know</span>
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