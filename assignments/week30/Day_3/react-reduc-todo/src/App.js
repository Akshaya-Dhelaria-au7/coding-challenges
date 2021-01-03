import React, {Component,Fragment} from 'react';
import logo from './logo.svg';
import { connect } from 'react-redux'
import './App.css';
import store from './redux_store/store';

class App extends Component() {
  state={
    title:''
  }
  render(){
    // console.log(props.todo)
    return (
      <Fragment>
        <div className="App">
          <div>
            <h3>Todo App</h3>
          </div>
          <ul>
            {
              this.props.todos.map((todo,idx)=>{
                return <li key={idx}>{todo.title}</li>
              })
            }
          </ul>
        </div>
      </Fragment>
    );
  }
}

//Here, we will be receiving the state
const mapStatestoProps = (state) =>{
  // console.log("state is" , state)
  return{
    todos:state
  }
}

//Here we will be receiving the dispatch function
const mapDispatchToProps = (dispatch) => {
  console.log("Dispatch is" , dispatch)
}

export default connect(mapStatestoProps,mapDispatchToProps)(App);

//Internally what's happening of connect(mapStatestoProps,mapDispatchToProps)(App)

// function abc(param1,param2){
//   return function(Component /*And here component is App*/){
//       <Component {...param1} {...param2} />
//   } 
// }

// abc(p1,p2)(App)