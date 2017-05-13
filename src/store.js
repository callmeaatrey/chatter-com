import { createStore } from 'redux';
import reducers from './reducers';

// Initiating the store mapped with the reducers
const store = createStore(reducers);
export default store;
