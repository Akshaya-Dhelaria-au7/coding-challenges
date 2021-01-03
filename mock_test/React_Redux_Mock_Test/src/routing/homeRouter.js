import React,{Component} from 'react';
import {Switch,Route,Link} from 'react-router-dom'
import Home from '../component/home';
import Login from '../component/login'
import Profile from '../component/profile'
import PrivateRoute from './privateRouter'
import PublicRoute from './publicRouter'
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
import Logout from '../component/logout'


class HomeRouter extends Component{
  state={
    loggedIn:false
  }
    render(){
        return(
            <div>
            <nav>
              <ul className="nav justify-content-center">
                <li className="nav-item">
                  <Link className="nav-link active" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link active" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link active" to="/profile">Profile</Link>
                </li>
              </ul>
            </nav>
              <Switch>
                <PublicRoute path="/login" exact component={Login}/>
                <PrivateRoute path="/profile" exact component={Profile}/>
                <Route path="/" exact component={Home}/>
              </Switch>
            </div>
        )
    }
}

export default HomeRouter;