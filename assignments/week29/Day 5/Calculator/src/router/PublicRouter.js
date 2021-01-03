import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const PublicRoute = ({component:Component , ...rest }) =>(
    <Route
        {...rest}
        render={(props)=>(
            localStorage.getItem("access_token") ? (
                <Redirect to="/dashboard" /> 
            ):
                <Component {...props} />
            )
        }
    />
)


export default PublicRoute;