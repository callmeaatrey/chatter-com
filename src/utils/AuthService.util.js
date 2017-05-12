// AuthService Helper Class

// bringing in the dependancies
import { EventEmitter } from 'events';
import Auth0Lock from 'auth0-lock';
import { browserHistory } from 'react-router';

class AuthService extends EventEmitter {
	constructor(clientId, domain) {
		super();
	    // configure Auth0
	    this.lock = new Auth0Lock(clientId, domain, {
	    	auth: {
	    		redirectUrl: 'http://localhost:5000/login',
	    		responseType: 'token'
	    	}
	    });
	    // add callback for lock `authenticated` event
	    this.lock.on('authenticated', this._doAuthentication.bind(this));
	    // binds login functions to keep this context
	    this.login = this.login.bind(this);
	}

	_doAuthentication(authResult) {
	    // saves the user token
	    this.setToken(authResult.idToken);
	    // navigate to the home route
	    browserHistory.replace('/home');
	    // loads the user profile data
	    this.lock.getProfile(authResult.idToken, (error, profile) => {
	    	if (error) {
	    		console.log('Error loading the profile', error);
	    	} else {
	    		console.log(profile);
	    		this.setProfile(profile);
	    	}
	    })
	}

	setProfile(profile) {
	  	// saves profile data to local storage
	  	localStorage.setItem('profile', JSON.stringify(profile));
	  	// triggers event to update UI and look from DB
	  	this.emit('profile_incoming', profile);
	}

	getProfile() {
	  	// retrieves profile data from local storage
	  	const profile = localStorage.getItem('profile');
	  	return profile ? JSON.parse(localStorage.profile) : {};
	}

	login() {
	    // call the show method to display the widget.
	    this.lock.show();
	}

	loggedIn() {
	    // checks if there is a saved token and it's still valid
	    return !!this.getToken();
	}

	setToken(idToken) {
	    // saves user token to local storage
	    localStorage.setItem('id_token', idToken);
	}

	getToken() {
	    // retrieves the user token from local storage
	    return localStorage.getItem('id_token');
	}

	logout() {
	    // clear user token and profile data from local storage
	    localStorage.removeItem('id_token');
	    localStorage.removeItem('profile');
	    browserHistory.replace('/login');
	}
}

export default AuthService;