import { combineReducers } from 'redux';

// import all reducers
import introductionReducer from './introduction/introductionReducer';

export const reducers = combineReducers({
	introduction: introductionReducer
});