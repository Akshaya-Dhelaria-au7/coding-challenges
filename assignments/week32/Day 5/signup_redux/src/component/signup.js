import React , {Component} from 'react';
import {connect} from 'react-redux'
import signupAction from '../redux/action/actionType.js'

class Signup extends Component{

	state = {
		error:{
			name:'',
			surname:'',
			email:''
		}
	}

	changeHandler = (event) => {
		const {name,value} = event.target
		const changedData = {
			[name]:value
		}
		// console.log("Data is" , changedData , "Props" , this.props)
		this.props.formdata(changedData)
	}

	submitHandler = (event) => {
		// console.log(event.target)]
		event.preventDefault()
		console.log(this.props.form_data)
		localStorage.setItem("access", JSON.stringify(this.props.form_data))
	}

	render(){
		console.log("Props in signup are ===>" , this.props.form_data)
		return (
			<form className='form-group' onSubmit={this.submitHandler}>
				<h3 className="jumbotron">Signup</h3>
				<hr />
				<label>Name</label>
				<br />
				<input type="text" name="name" onChange={this.changeHandler} placeholder="Enter your name" noValidate />
				<br />
				<br />
				<label>Surname</label>
				<br />
				<input type="text" name="surname" onChange={this.changeHandler} placeholder="Enter your surname" noValidate />
				<br />
				<br />
				<label>Email</label>
				<br />
				<input type="text" name="email" onChange={this.changeHandler} placeholder="Enter your email" noValidate />
				<br />
				<br />
				<br />
				<button type="submit" className="btn btn-primary" >Signup</button>
			</form>
		)
	}
}

const stateMapper = state => {
	// console.log("state in signup ====> " , state)
	return {
		form_data : state.formData
	}
}

const dispatchMapper = dispatch => {
	return{
		formdata:(userData) => {
			dispatch(signupAction(userData)) 
		}
	}
}

export default connect(stateMapper,dispatchMapper)(Signup);
