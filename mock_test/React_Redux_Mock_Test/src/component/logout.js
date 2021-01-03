import React, { Component, Fragment } from 'react';

class Logout extends Component{
    state={
        loggedIn:false
    }

    logoutHandler = () =>{
        this.setState({
            logout:true,
            // localStorage.clear()
        })
    }
    render(){
        console.log(this.props)
        return(
            <Fragment>
                <label onClick={this.logoutHandler}>Logout</label>
            </Fragment>
        )
    }
}

export default Logout