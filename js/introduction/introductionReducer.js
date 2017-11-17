// Introduction Reducer

import {
	FACEBOOK_LOGIN_REQUEST,
	FACEBOOK_LOGIN_SUCCESS,
	FACEBOOK_LOGIN_FAILURE,

} from '../lib/constants';

const initialState = {

};

export default function introductionReducer( state = initialState, action ){
	switch(action.type){
		case FACEBOOK_LOGIN_REQUEST: return {
			...state,
			};		
		case FACEBOOK_LOGIN_SUCCESS: return {
			...state
			};
		case FACEBOOK_LOGIN_FAILURE: return {
			...state
			};
		default: return { ...initialState };
			break;
	}
}