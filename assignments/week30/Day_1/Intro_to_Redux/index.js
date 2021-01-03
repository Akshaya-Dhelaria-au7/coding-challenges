const redux = require('redux');

//Creating state
const initialState  = {
    count:0,
    TrackChanges:[]
}

var Increment_Val = "Increment"
var Decrement_Val = "Decrement"

//Action
function incrementState(){
    return{
        type:Increment_Val,
        increment_by:1,
    }
}

function decrementState(){
    return{
        type:Decrement_Val,
        decrement_by:1
    }
}

//Reducer
//It will take 2 arguments, one is initial state and second is action
const reducer = (state=initialState,action) =>{
    switch (action.type) {
        case Increment_Val:
            return{
                //Making the copy of the state by spread operator and mutating the state
                ...state,
                count: state.count+1,
                TrackChanges:initialState.TrackChanges.push(state.count)
            }
        
        case Decrement_Val:
            return{
                ...state,
                count:state.count-1,
                TrackChanges:initialState.TrackChanges.push(state.count)
            }
    
        default:
            return state
    }
}

//Creating redux state store
const store = redux.createStore(reducer);
// const store = createStore(reducer)
console.log("Initial state",store.getState())

store.subscribe(()=>{
    console.log("Updated state", store.getState())
})

store.dispatch(incrementState())
store.dispatch(incrementState())
store.dispatch(decrementState())