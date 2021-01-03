import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Switch,Route} from 'react-router-dom'
import Signup from './components/Signup/signup'
import Login from './components/Login/login'
import routes from './routes'

console.log(routes)

//Memo is used to avoid multiple times re-rendering of the page.
function App() {
  return (
    <Switch>
      <Route>
        <Signup />
        <Login /> 
        </Route>
    </Switch>
  );
}

export default App;
