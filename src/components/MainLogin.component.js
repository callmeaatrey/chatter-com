/*
* LoginForm Presentation Component
* @props - form
*/

import React, { Component } from 'react';
import { Form, Icon, Input, Button, Checkbox, message } from 'antd';

const FormItem = Form.Item;

class LoginForm extends Component {
	// handling form submission
	handleSubmit(e) {
		e.preventDefault();
		this.props.form.validateFields((err, values) => {
			if (!err) {
				message.info('We prefer if you use a social account to login and register!', 2.5);
		  }
		});
	}

	render() {
		const { getFieldDecorator } = this.props.form;
		return (
			<Form onSubmit={this.handleSubmit.bind(this)} className="login-form">
        		<FormItem>
          			{getFieldDecorator('userName', {
            			rules: [{ required: true, message: 'Please input your username!' }],
          				})(
            			<Input prefix={<Icon type="user" style={{ fontSize: 13 }} />} placeholder="Username" />
          			)}
        		</FormItem>
        		<FormItem>
          			{getFieldDecorator('password', {
			        	rules: [{ required: true, message: 'Please input your Password!' }],
			        	})(
            			<Input prefix={<Icon type="lock" style={{ fontSize: 13 }} />} type="password" placeholder="Password" />
          			)}
        		</FormItem>
        		<FormItem>
          			{getFieldDecorator('remember', {
           				valuePropName: 'checked',
            			initialValue: true,
          				})(
            			<Checkbox>Remember me</Checkbox>
          			)}
          			<a className="login-form-forgot" href="#">Forgot password</a>
          			<Button type="primary" htmlType="submit" className="login-form-button">
            			Log in
          			</Button>
        		</FormItem>
      		</Form>
		);
	}
}

const MainLogin = Form.create()(LoginForm);

export default MainLogin;