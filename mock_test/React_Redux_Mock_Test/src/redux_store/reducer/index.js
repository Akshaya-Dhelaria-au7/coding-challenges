import {Logged_in,Logged_Out,user_details,initialState} from '../action/actionType'
export const reducer = (state,action) =>{
    const state = state || initialState
    switch (action.type) {
        case Logged_in:
            return{
                ...state,
                isLoggedIn:true
                
            }
        case Logged_Out:
            return{
                ...state
            }
    
        default:
            state
    }
}