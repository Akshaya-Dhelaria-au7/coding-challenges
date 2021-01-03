export const countryActionFunction = (eachCountry) => {
    return {
        type: "GET_COUNTRIES",
        payload: eachCountry
    }
}

export const searchCountry = (search) => {
    return{
        type : "SEARCH_COUNTRIES",
        payload : search
    }
}
