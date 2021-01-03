import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';
import Login from './login'

class Home extends Component{
    render(){
        return(
            <Fragment>
                <h3 className="public-page">
                    Welcome!!!
                    <br/>
                    We hope you will have a 
                    wonderful experience with us.
                    Please
                    <br/>
                    <Link to={"/login"}>Login</Link>
                </h3>
            </Fragment>
        )
    }
}

export default Home;