import React , {Component} from 'react';
import {Route,Link,Switch} from 'react-router-dom'
import Home from "../component/home";
import List from '../component/list';
import Post from '../component/post';

class HomeRouter extends Component{
    render(){
        return(
            <div>
                <nav>
                    <ul>
                        <li>
                            <Link to='/' >Home</Link>
                        </li>
                        <li>
                            <Link to='/list' >List</Link>
                        </li>
                        <li>
                            <Link to='/posts/:id' >Post</Link>
                        </li>
                    </ul>
                </nav>
                <Switch>
                    <Route path='/' exact component={Home}/>
                    <Route path='/list' exact component={List} />
                    <Route path='/posts/:id' exact  component={Post} />
                </Switch> 
            </div>          
        )
    }
}

export default HomeRouter