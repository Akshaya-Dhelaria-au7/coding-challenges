import React from 'react';
import weburl from '../config/weburl';
import Signup from '../components/Signup/signup';

const signupRoute = [{
    path:weburl.SIGNUP,
    exact: true,
    component: <Signup />
}]

export default signupRoute;