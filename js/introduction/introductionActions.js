// Introduction Actions

const {
	FACEBOOK_LOGIN_REQUEST,
	FACEBOOK_LOGIN_SUCCESS,
	FACEBOOK_LOGIN_FAILURE,

} = require('../lib/constants');

export function facebookLogin(){
	return {
		types: [FACEBOOK_LOGIN_REQUEST, FACEBOOK_LOGIN_SUCCESS, FACEBOOK_LOGIN_FAILURE],
		// networkPromise: new IntroductionAPI.facebookLogin()
	}
}