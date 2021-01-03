import {reducer} from '../reducer/index'
const redux = require('redux')

const store = redux.createStore(reducer)

export default store;