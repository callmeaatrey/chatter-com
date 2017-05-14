// HTTP Accessible Functions

import axios from 'axios';
import { newLogin } from '../actions/user.actions';
import store from '../store';

// checks if a profile already exists
export function readProfileViaGoogle(profile) {
	console.log(profile);

	// handling requests for fetching user profiles or adding new profiles
	axios.get(`http://localhost:5100/api/user/${profile.email}`)
		.then(res => {
			if(res.data == null) {
				createProfileViaGoogle(profile);
			} else {
				store.dispatch(newLogin(profile, res.data));
			}
		})
		.catch(err => {
			console.log(err);
		});
}

// creates a new profile
export function createProfileViaGoogle(profile) {

	// handling requests for creating new profile
	axios.post('http://localhost:5100/api/register/google', profile)
		.then(res => {
			readProfileViaGoogle(profile);
		})
		.catch(err => {
			console.log(err);
		});
}