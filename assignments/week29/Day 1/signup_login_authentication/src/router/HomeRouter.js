import React,{Component} from 'react';
import {Switch,Route,Link} from 'react-router-dom'
import Home from '../component/home';
import Signup from '../component/signup'
import Login from '../component/login'
import Dashboard from '../component/dashboard'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import PrivateRoute from './Privaterouter'

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
                <Route path="/signup" exact component={Signup}/>
                <Route path="/login" exact component={Login}/>
                <PrivateRoute path="/dashboard" exact component={Dashboard}/>
                <Route path="/" exact component={Home}/>
              </Switch>
            </div>
        )
    }
}

export default HomeRouter;