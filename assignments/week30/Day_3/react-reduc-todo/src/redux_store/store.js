const redux = require('redux');

//Model
const todoItemModel = {
    id:Date(),
    title:''
}

//State
const initialState = []

//Action
const eachTodoItem = "Add_Item"

function addTodoItem(){
    return{
        type:eachTodoItem
    }
}

//Reducer
const reducer = (state = initialState , action) =>{
    // console.log(state,action)
    switch (action.type) {
        case eachTodoItem:{
            //One method 

            const todos =  [...state]
            const eachTodo = {
                ...todoItemModel,
                title: action.payload
            }
            // console.log("Payload is ",eachTodo.todo)
            todos.concat(eachTodo)
            console.log("todos is",action.payload)
            return todos

            //Second method (Both are correct)
            // const todo = {
            //     ...todoItemModel,
            //     todo:action.payload
            // }
            // return[...state,todo]


        }
        default:
            return state;
    }
}

const store = redux.createStore(reducer)
// console.log("Actual state",store.getState())

store.subscribe(()=>{
    // console.log("Updated todo",store.getState())
})

// store.dispatch(addTodoItem())
// store.dispatch(addTodoItem())

export default store;