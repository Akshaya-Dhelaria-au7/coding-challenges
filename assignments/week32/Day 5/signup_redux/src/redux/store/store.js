import {createStore , applyMiddleware} from 'redux';
import signUpReducer from '../reducer/reducers.js';
import thunk from 'redux-thunk'

const store = createStore(signUpReducer , applyMiddleware(thunk))
console.log("Initial" , store.getState())
store.subscribe(() => console.log("Updated",store.getState()))

export default store;