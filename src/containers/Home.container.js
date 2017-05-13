// Home Container Component

import React, { Component } from 'react';
import { connect } from 'react-redux';
import store from '../store';
import { loaderToggle } from '../actions/app.actions';
import { profileCheck } from '../apis/user.api';

// bringing in the presentation component
import Home from '../components/Home.component';
import AuthService from '../utils/AuthService.util';

class HomeContainer extends Component {
	constructor(props, context) {
    	super(props, context);

    	// called when emitted
    	props.auth.on('profile_incoming', (profile) => {
    		console.log('123');
    		profileCheck(profile);
    	});
 	}

 	// lifecycle methods
 	componentDidMount() {
 		profileCheck(this.props.auth.getProfile());
 	}

	render() {
		var { app } = this.props;
		return (
			<Home
				loader={app.loader}
				logout={this.props.auth.logout}/>
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