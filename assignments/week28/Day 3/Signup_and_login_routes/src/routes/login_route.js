import React from 'react';
import weburl from '../config/weburl';
import Login from '../components/Login/login';

const loginRoute = [{
    path:weburl.LOGIN,
    exact: true,
    isProtected:false,
    component: <Login />
}]