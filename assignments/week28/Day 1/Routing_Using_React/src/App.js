import React,{ Fragment} from 'react';
import { BrowserRouter,Link,Route,Switch } from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Home from './home'
import Terms from './terms'
import About from './about'


class App extends React.Component{
  render(){
    return(
      <BrowserRouter>
        <Fragment>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/terms' exact component={Terms} />
            <Route path='/about' exact component={About} />
          </Switch>
        </Fragment>
      </BrowserRouter>
    )
  }
}

export default App;
