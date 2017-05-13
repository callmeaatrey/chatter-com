// Application Container Component

import React, { Component } from 'react';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import store from '../store';

class App extends Component {
	get content() {
		return(
			<Provider store={store}>
				<Router
					routes={this.props.routes}
					history={this.props.history} />
			</Provider>
		);
	}

	render() {
		return(
			<div>
				{this.content}
			</div>
		);
	}
}

export default App;