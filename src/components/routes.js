// src/components/routes.js

// bringing in the dependancies
import React from 'react';
import { Route, IndexRedirect } from 'react-router';
import AuthService from '../utils/AuthService.util';
import Login from './Login.component';
import NotFound from './NotFound.component';
import Skeleton from './Skeleton.component';
import Home from './Home.component';

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
		<Route path="home" component={Home} onEnter={requireAuth} />
		<Route path="login" component={Login} onEnter={checkLogin}/>
		<Route path="*" component={NotFound} />
	</Route>
);

export default Routes;
