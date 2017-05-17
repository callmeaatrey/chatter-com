/*
* Profile Settings component
* @props - setPassword, email, name, nickname
*/

import React, { Component } from 'react';
import { Form, Input, Button, notification } from 'antd';

const FormItem = Form.Item;

class Settings extends Component {
	constructor() {
		super();
		this.confirmDirty = false;
	}

	handleSubmit(e) {
		e.preventDefault();
		this.props.form.validateFieldsAndScroll((err, values) => {
			if(!err) {
				notification.open({
				    message: 'Hooray!',
				    description: 'Your password is successfully changed!',
				});
				console.log('Form values are: ', values);
				this.props.setPassword(values.password, this.props.email);
				this.props.form.resetFields();
			}
		});
	}

	handleConfirmBlur(e) {
		const value = e.target.value;
		this.confirmDirty = this.confirmDirty || !!value;
	}

	checkPassword(rule, value, callback) {
		const form = this.props.form;
		if(value && value !== form.getFieldValue('password')) {
			callback("Passwords don't match");
		} else {
			callback();
		}
	}

	checkConfirm(rule, value, callback) {
		const form = this.props.form;
		if(value && this.confirmDirty) {
			form.validateFields(['confirm'], { force: true });
		}
		callback();
	}

	render() {
		const { getFieldDecorator } = this.props.form;

		const formItemLayout = {
			labelCol: {
				xs: { span: 24 },
				sm: { span: 6 },
			},
			wrapperCol: {
				xs: { span: 24 },
				sm: { span: 14 },
			},
		};
		const tailFormItemLayout = {
			wrapperCol: {
				xs: {
					span: 24,
					offset: 0,
				},
				sm: {
					span: 14,
					offset: 6,
				},
			},
		};
		return (
			<Form onSubmit={this.handleSubmit.bind(this)}>
				<FormItem
					{...formItemLayout}
					label="Name"
				>
					<Input
						defaultValue={this.props.name}
						disabled={true}
					/>
				</FormItem>
				<FormItem
					{...formItemLayout}
					label="E-mail"
				>
					<Input
						defaultValue={this.props.email}
						disabled={true}
					/>
				</FormItem>
				<FormItem
					{...formItemLayout}
					label="Nickname"
				>
					<Input
						defaultValue={this.props.nickname}
						disabled={true}
					/>
				</FormItem>
				<FormItem
					{...formItemLayout}
					label="New Password"
					hasFeedback
				>
					{getFieldDecorator('password', {
						rules: [{
							required: true,
							message: 'Input password'
						}, {
							validator: this.checkConfirm.bind(this)
						}]
					})(
						<Input type="password" />
					)}
				</FormItem>
				<FormItem
					{...formItemLayout}
					label="Confirm password"
					hasFeedback
				>
					{getFieldDecorator('confirm', {
						rules: [{
							required: true,
							message: 'Please confirm your password'
						}, {
							validator: this.checkPassword.bind(this)
						}]
					})(
						<Input type="password" onBlur={this.handleConfirmBlur.bind(this)} />
					)}
				</FormItem>
				<FormItem {...tailFormItemLayout}>
					<Button type="primary" htmlType="submit" size="large">Save</Button>
				</FormItem>
			</Form>
		);
	}
}

const SettingsForm = Form.create()(Settings);

export default SettingsForm;