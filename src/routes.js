import React from 'react';
import { Router, Route } from 'react-router';

import Landing from './components/Landing.component';
import NotFound from './components/NotFound.component';

const Routes = (props) => (
	<Router {...props}>
		<Route path="/" component={Landing}/>
		<Route path="*" component={NotFound}/>
	</Router>
);

export default Routes;
