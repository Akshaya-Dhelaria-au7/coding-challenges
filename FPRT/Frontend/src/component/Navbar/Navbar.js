import React , {Component , Fragment} from 'react';
import {Route,Switch,Link } from 'react-router-dom'
import Signup from '../Signup/signup.js';
import Login from '../Login/login';
import './navbar.css'
import Verifyotp from '../verifyOtp';
import {connect} from 'react-redux'
import Todo from '../getAllTodos'
import CreateTodo from '../addTodo.js';
import UpdateTodo from '../updateTodo.js';
import UpdateProfile from '../Profile/update_profile'

class Navbar extends Component{
    state={
        accessToken:'',
        user:{}
    }

    componentDidMount(){
        const {user} = this.props.state.userReducer
        this.setState({
            user:user
        })
    }

    logoutHandler = () =>{
        localStorage.clear()
        this.forceUpdate()
    }

    LoginHandler = () => {
        const {user} = this.props.state.userReducer
        this.setState({
            user:user
        })
    }

    render(){
        // const getState = localStorage.getItem('access-token')
        // const {} = this.state
        console.log("Nav",this.props)
        // const {user} = this.props.state.userReducer
        console.log(this.state.user)
        return(
            <Fragment>
                <nav className="navbar navbar-expand-lg navbar-bg-light" style={{'display':'flex','border':'1px solid white','position':'relative','marginTop':'0px','paddingTop':'0px','width':'100%','borderRadius': '1px','boxShadow': '0px 2px 2px 2px rgba(0, 0, 0, 0.1)','zIndex':'99'}}>
                    <ul className="navbar-nav navbarList">
                         
                           
                        {
                            localStorage.getItem('access-token') ? 
                            <Fragment>
                                 <li className="nav-item active">
                                    <Link to='/update' style={{'textDecoration':'none','color':'black','fontWeight':'550'}} >Update My Profile</Link>
                                </li>
                                <li className="nav-item active logout-nav">
                                    <Link to='/login' style={{'textDecoration':'none','color':'black','fontWeight':'550','borderBottomColor':'none'}} onClick={this.logoutHandler}>Logout</Link>
                                </li>
                            </Fragment> : 
                            <Fragment>
                                <li className="nav-item active">
                                    <Link to='/' style={{'textDecoration':'none','color':'black','fontWeight':'550'}}>Signup</Link>
                                </li>
                            </Fragment>
                        }
                    </ul>
                </nav>
                    <Switch>
                        <Route path='/' exact component={Signup}/>
                        <Route path='/verify' exact component={Verifyotp} />
                        <Route path='/login' exact component={Login} />
                        <Route path='/todo' exact component={Todo} />
                        <Route path='/create' exact component={CreateTodo} />
                        <Route path='/todo/updatetodo/:_id' exact component={UpdateTodo} />
                        <Route path='/update' exact component={UpdateProfile}/>
                    </Switch>
            </Fragment>
        )
    }                    
}

const mapStateToProps = (state) => {
    console.log("User profile navbar" , state.userReducer)
    return {
        state: state
    }
}

export default connect(mapStateToProps)(Navbar);