import React, { Component } from 'react';
import {Redirect} from 'react-router-dom'

class PrivateRoute extends Component{
    render(){
        return(
            !localStorage.getItem("accessToken") ? <Redirect to='/' />
            :
            <div>
                <Redirect to='/viewallposts' />
                <Redirect to="/" />
            </div>
        )
    }
}

export default PrivateRoute;