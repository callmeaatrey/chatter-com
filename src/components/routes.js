// src/components/routes.js

// bringing in the dependancies
import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import AuthService from '../utils/AuthService.util';
import NotFound from './NotFound.component';
import Skeleton from './Skeleton.component';
import LoginContainer from '../containers/Login.container';
import HomeContainer from '../containers/Home.container';
import ProfileContainer from '../containers/Profile.container';

// create an instance of AuthService helper class
const auth = new AuthService('lldzXupT6f1TV5MRokTfE4bZ7aK8mU8z', 's-aatrey.auth0.com');

// to check if user is already authenticated or not
const requireAuth = (nextState, replace) => {
	if(!auth.loggedIn()) {
		replace({ pathname: '/login'})
	}
};

// to redirect if already logged in
const checkLogin = (nextState, replace) => {
	if(auth.loggedIn()) {
		replace({ pathname: '/home'})
	}
};

// router chart
const Routes = () => (
		<Route path="/" component={Skeleton} auth={auth}>
			<IndexRedirect to="/home" />
			<Route path="home" component={HomeContainer} onEnter={requireAuth} />
			<Route path="login" component={LoginContainer} onEnter={checkLogin} />
			<Route path="profile/:email" component={ProfileContainer} onEnter={requireAuth} />
			<Route path="*" component={NotFound} />
		</Route>
);

export default Routes;