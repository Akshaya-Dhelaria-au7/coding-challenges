import Axios from 'axios';
import BACKEND_URL from '../../Backend_Deployed/backendDeployed.js'

export const signup = user => {
	return {
		type:"USER_SIGNUP",
		payload:user
	}
}

export const signupFailure = error => {
	return {
		type:"USER_SIGNUP_ERROR",
		payload:error
	}
}

export const fetchUserSignup = (userInfo) => {
	return function(dispatch){
		Axios.post(`${BACKEND_URL}/user/signup`,userInfo)
		.then((response) => {
			console.log(response)
			dispatch(signup(response.response))
		})
		.catch((error) => {
			console.log(error)
			dispatch(signupFailure(error.response.data.error))
		})
	}
}