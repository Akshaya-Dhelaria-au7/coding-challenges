import {createStore , applyMiddleware , combineReducers} from 'redux';
import countriesReducer from '../reducer/reducer';
import thunk from 'redux-thunk'

const store = createStore(countriesReducer , applyMiddleware(thunk))
console.log("Initial state",store.getState())
store.subscribe(() => console.log("Updated state" , store.getState()))

export default store;