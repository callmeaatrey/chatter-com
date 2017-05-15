import { combineReducers } from 'redux';

// bringing in the reducers
import appReducer from './app.reducer';
import userReducer from './user.reducer';
import postReducer from './post.reducer';

// combining the reducers
var reducers = combineReducers({
	appState: appReducer,
	userState: userReducer,
	postState: postReducer
});

export default reducers;