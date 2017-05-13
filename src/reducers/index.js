import { combineReducers } from 'redux';

// bringing in the reducers
import appReducer from './app.reducer';

// combining the reducers
var reducers = combineReducers({
	appState: appReducer
});

export default reducers;