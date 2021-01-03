import React,{Component} from 'react';
import {Switch,Route,Link} from 'react-router-dom'
// import Dashboard from '../component/dashboard'
// import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'
// import PrivateRoute from './Privaterouter'
// import PublicRoute from './PublicRouter'
import Posts from '../components/createPosts';
import Login from '../components/login';
import View_All_Posts from '../components/viewAllPost';
import Logout from '../components/logout';
import PrivateRoute from './protectedRoute';

class HomeRouter extends Component{
    render(){
        return(
            <div>
            <nav>
              <ul className="nav justify-content-center">
                {
                    localStorage.getItem("accessToken") ? 
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">Logout</Link>
                    </li>
                    :
                    <li className="nav-item">
                        <Link className="nav-link active" to="/">Login</Link>
                    </li>
                }

                <li className="nav-item">
                    <Link className="nav-link active" to="/createposts">Create Posts</Link>
                </li>
                <li className="nav-item">
                <Link className="nav-link active" to="/viewallposts">View All Posts</Link>
            </li>
              </ul>
            </nav>
              <Switch>
                <Route path="/" exact component={Login}/>
                <Route path='/' exact component={Logout} />
                <Route path="/createposts" exact component={Posts}/>
                <Route path="/viewallposts" exact component={View_All_Posts}/>
              </Switch>
            </div>
        )
    }
}

export default HomeRouter;