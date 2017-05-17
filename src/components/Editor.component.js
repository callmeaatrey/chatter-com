/*
* Editor presentation component
* @props - name, maxLength, editorDisabled, postLoader, sendEditorData
*/

import React, { Component } from 'react';
import { Input, Button, Spin, message } from 'antd';
import store from '../store';
import { togglePostLoader, editorDisable } from '../actions/app.actions';

class Editor extends Component {
	constructor(props) {
		super(props);
	}

	// lifecycle methods
	componentWillReceiveProps(props) {
		// calculating remaining characters
		document.getElementsByTagName('textarea')[0].onkeyup = function() {
			// calculating remaining characters
			document.getElementById('chars-remaining').innerHTML = ( 140 - this.value.length ) + ' characters remaining';
			// toggling the post button
			if(this.value.length > 0 && !props.postLoader) {
				store.dispatch(togglePostLoader(true));
			}
			if(this.value.length == 0) {
				store.dispatch(togglePostLoader(false));
			}
 		}
	}

	// for handling press ENTER posting
	enterSubmit(e) {
		var trimmedTextAreaValue = e.target.value.replace(/\s/g, '');
		if(trimmedTextAreaValue.length > 0) {
			store.dispatch(editorDisable());
			this.props.sendEditorData(e.target.value.trim());
			e.target.value = '';
			document.getElementById('chars-remaining').innerHTML = '140 characters remaining';
			store.dispatch(togglePostLoader(false));
		}
	}

	// for handling click posting
	clickSubmit() {
		var textarea = document.getElementsByTagName('textarea')[0];
		var trimmedTextAreaValue = textarea.value.replace(/\s/g, '');
		if(trimmedTextAreaValue.length > 0) {
			store.dispatch(editorDisable());
			this.props.sendEditorData(textarea.value.trim());
			textarea.value = '';
			document.getElementById('chars-remaining').innerHTML = '140 characters remaining';
			store.dispatch(togglePostLoader(false));
		}
	}

	render() {
		return (
			<div className="editor">
				<div className="editor-main">
					<Spin spinning={this.props.editorDisabled} tip="Posting...">
						{/* Textarea */}
						<Input
							type="textarea"
							rows={4}
							style={{ resize: 'none', border: 'none', fontSize: '14px' }}
							placeholder={`What's on your mind${this.props.name !== undefined ? ", " + this.props.name.split(' ')[0] : '' }?`}
							maxLength={this.props.maxLength}
							onPressEnter={this.enterSubmit.bind(this)}
							disabled={this.props.editorDisabled}
						/>
					</Spin>
				</div>
				<div className="editor-btn">
					{/* Post Button */}
					<Button
						type="primary"
						onClick={this.clickSubmit.bind(this)}
						disabled={!this.props.postLoader || this.props.editorDisabled}
					>
			          	Post
			        </Button>
			    	{/* Remaining character count */}
			        <span id="chars-remaining">{ this.props.maxLength } characters remaining</span>
			    </div>
		    </div>
		);
	}
}

export default Editor;