import React,{Component} from 'react';
import {Switch,Route,Link} from 'react-router-dom'
import Home from '../component/home';
import Signup from '../component/signup'
import Login from '../component/login'
import Dashboard from '../component/dashboard'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'


class HomeRouter extends Component{
    render(){
        return(
            <div>
            <nav>
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/signup">Signup</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/dashboard">Dashboard</Link>
                </li>
              </ul>
            </nav>
              <Switch>
                <Route path="/signup">
                  <Signup/>
                </Route>
                <Route path="/login">
                  <Login />
                </Route>
                <Route path="/dashboard">
                    <Dashboard  />
                </Route>
                <Route path="/">
                  <Home />
                </Route>
              </Switch>
            </div>
        )
    }
}

export default HomeRouter;