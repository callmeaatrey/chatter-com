// src/routes.js

import React from 'react';
import {browserHistory, Router, Route, Redirect} from 'react-router';
import store from './store';

import makeMainRoutes from './components/routes';

export const makeRoutes = () => {
  const main = makeMainRoutes(store);

  return (
    <Route path=''>
      {main}
    </Route>
  )
}

export default makeRoutes;