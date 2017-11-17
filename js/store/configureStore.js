import { createStore, applyMiddleware, combineReducers } from 'redux';
import {reducers} from '../combineReducers';
import thunk from 'redux-thunk';

export default function configureStore() {
	// const rootReducer = combineReducers({
 //    	login: loginReducer,
 //  });
  let store = createStore(reducers, applyMiddleware(thunk))
  return store;
}