// import countryActionFunction from '../actions/actionTypes'

const initialState = {
    countries: [],
    search_query:null
}

const countriesReducer = (state = initialState , action) => {
    if(action.type === "GET_COUNTRIES"){
        console.log("Reducer called")
        return{
            ...state,
            countries: [...state.countries , action.payload]
        }
    }
    if(action.type === "SEARCH_COUNTRIES"){
        return{
            ...state,
            search_query: action.payload
        }
    }
    return state
}


export default countriesReducer;
