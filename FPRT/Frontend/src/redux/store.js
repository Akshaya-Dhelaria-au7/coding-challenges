import {createStore,applyMiddleware,combineReducers} from 'redux';
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import userReducer from './reducer/userReducer.js'
import todoReducer from './reducer/getTodoReducer'

const store = createStore(combineReducers({
    userReducer:userReducer,
    todoReducer:todoReducer
}),composeWithDevTools(applyMiddleware(thunk)))

export default store;
