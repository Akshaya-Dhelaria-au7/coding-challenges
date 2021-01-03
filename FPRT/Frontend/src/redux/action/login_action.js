import Axios from 'axios';
import Backend_URL from '../../Backend_Deployed/backendDeployed'

export const login = eachUser => {
    return{
        type:"USER_LOGIN",
        payload: eachUser
    }
}

export const fetchDataError = error => {
    return {
        type:"USER_LOGIN_ERROR",
        payload: error
    }
}

export const fetchLoginData = (userInfo) => {
    return async function(dispatch){
        console.log("Dispatch login",dispatch , "Info" , userInfo)
        await Axios.post(`${Backend_URL}/user/login` , userInfo )
        .then(response => {
            localStorage.setItem('access-token',response.data.tokenKey)
            localStorage.setItem('Name',response.data.data.Name)
            localStorage.setItem('_id',response.data.data._id)
            localStorage.setItem('Email',response.data.data.Email)
            console.log("Action login ",response.data.data)
            dispatch(login(response.data.data))
        })
        .catch(error => {
            // console.log("Action error login",error.response.data.message)
            dispatch(fetchDataError(error.response.data.message))
        })
    }
}