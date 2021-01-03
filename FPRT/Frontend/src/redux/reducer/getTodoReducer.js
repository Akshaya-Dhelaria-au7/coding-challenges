const initialState = {
    data:[],
    error:''
}

const todoReducer = (state = initialState , action) => {
    const {type,payload} = action
    if(type == "ALL_TODOS"){
        // console.log("Payload" , payload)    
        return {
            ...state,
            data: payload
        }
    }
    if(type == "ERROR_WHILE_GETTING_TODOS"){
        return {
            ...state,
            error: payload
        }
    }
    return state
}

export default todoReducer