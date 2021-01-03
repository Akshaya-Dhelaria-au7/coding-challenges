import React from 'react';
import {connect} from 'react-redux';

function profile(props){
	return (
		<h5>Profile page</h5>
	)
}

const stateMapper = state => {
	console.log("state in profile " , state)
}

export default connect(stateMapper)(profile);