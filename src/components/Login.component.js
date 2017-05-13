// Landing Presentation Component

import React, { Component } from 'react';
import AuthService from '../utils/AuthService.util';
import { Layout, Menu, Breadcrumb, Card, Button, Icon } from 'antd';
import MainLogin from './MainLogin.component';

const { Header, Footer, Content } = Layout;

class Login extends Component {
	render() {
		return (
			<div className="login-wrapper">
			<Layout className="layout">
				<Header>
					<div className="logo" />
						<Menu
						theme="dark"
						mode="horizontal"
						defaultSelectedKeys={['1']}
						style={{ lineHeight: '64px' }}
						>
							<Menu.Item key="1"><h2>ChatterCom</h2></Menu.Item>
						</Menu>
				</Header>
				<Content style={{ padding: '0 50px' }}>
					<div className="login-main">
						<div className="row">
							<div className="col-lg-offset-4 col-lg-4 col-md-offset-3 col-md-6 col-xs-12 col-sm-offset-3 col-sm-6">
								<Card style={{ width: '100%' }}>
									<div className="row">
										<div className="col-md-6 col-xs-12 col-sm-12 login-left">
											<span className="menu-header">Social Accounts</span>
											<Button
												type="danger"
												icon="plus-circle"
												size="large"
												onClick={this.props.login.bind(this)}
											>Signin With Google</Button>
											<p className="info-paragraph">
												By signing up you indicate that you have read and agree to the Terms of Service and Privacy Policy.
											</p>
										</div>
										<div className="col-md-6 col-xs-12 col-sm-12 login-right">
											<span className="menu-header">Login</span>
											<MainLogin />
										</div>
									</div>
								</Card>
							</div>
						</div>
					</div>
				</Content>
				<Footer style={{ textAlign: 'center' }}>
				ChatterCom ©2017 Created by Shikher Aatrey
				</Footer>
			</Layout>
			</div>
		);
	}
}

export default Login;