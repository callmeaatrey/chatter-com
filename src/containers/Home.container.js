// Home Container Component

import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store';

// bringing in the presentation component
import Home from '../components/Home.component';

class HomeContainer extends Component {
	render() {
		return (
			<Home />
		);
	}
}

// to isolate which parts of the state this component need as it's props
const mapStateToProps = (store) => {
	return {
		app: store.appState
	}
};

export default connect(mapStateToProps)(HomeContainer);