// Initialiser

import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import makeRoutes from './routes';
import { LocaleProvider } from 'antd';
import enUS from 'antd/lib/locale-provider/en_US';

import App from './containers/App.container';


// bring in the routes
const routes = makeRoutes();

ReactDOM.render(
	<LocaleProvider locale={enUS}>
		<App history={browserHistory}
			routes={routes} />
	</LocaleProvider>,
	document.getElementById('main') // this is where our React app lives
);