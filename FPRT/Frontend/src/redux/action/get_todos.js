import Axios from 'axios';
import Backend_URL from '../../Backend_Deployed/backendDeployed'

export const getTodo = data => {
    return {
        type:"ALL_TODOS",
        payload:data
    }
}

export const getTodoError = error => {
    return {
        type:"ERROR_WHILE_GETTING_TODOS",
        payload:error
    }
}

export const fetchTodos = () => {
    return function(dispatch){
        const token = localStorage.getItem("access-token")
        const header = {
            "Content-type":'application/json',
            'authorization':token
        }
        Axios.get(`${Backend_URL}/todo/gettodos`,{
            headers:header
        })
        .then(response => {
            dispatch(getTodo(response.data.data))
        })
        .catch(error => {
            // console.log(error.response)
            dispatch(getTodoError(error.response.data.message))
        })
    }
}