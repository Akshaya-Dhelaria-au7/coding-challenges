import React,{Component} from 'react';
import { Redirect } from 'react-router-dom';

class Logout extends Component{

    logoutHandler = (e) => {
        console.log(this.props)
        localStorage.removeItem("accessToken")
        e.preventDefault()
    }
    render(){
        return(
            <button className="btn" onClick={this.logoutHandler}>Logout</button>
        )
    }
}

export default Logout