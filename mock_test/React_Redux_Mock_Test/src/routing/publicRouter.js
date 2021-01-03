import React from 'react';
import { Route, Redirect , Link } from 'react-router-dom';

const PublicRoute = ({component:Component , ...rest }) =>(
    <Route
        {...rest}
        render={(props)=>(
            localStorage.getItem("access_token") ? (
                <div>
                    <Redirect to="/profile" />
                </div>
            ):
                <Component {...props} />
            )
        }
    />
)


export default PublicRoute;