import React, { Component, Fragment } from 'react';
import {Link} from 'react-router-dom';

class Home extends Component{
    styling = {
        color:"red"
    }
    render(){
        return(
            <Fragment>
                <h3 style={this.styling}>Welcome!!!This is the Static Page and everyone can view it....</h3>
            </Fragment>
        )
    }
}

export default Home;