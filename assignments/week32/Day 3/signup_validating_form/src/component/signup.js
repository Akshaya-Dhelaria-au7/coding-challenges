import React,{Component} from 'react';

const validEmailRegex = RegExp(
  /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i
);

class Signup extends Component{
	state={
		name:'',
		email:'',
		password:'',
		confirm_password:'',
		error:{
			name:'',
			email:'',
			password:'',
			confirm_password:''
		}
	}

	changeHandler = (event) => {
		event.preventDefault()
		let {name,value} = event.target
		console.log("State" , this.state.error)
		let errors = this.state.error

		switch(name){
			case "name":
				errors.name = value.length<3
				?
				"Name must have minimum 3 characters"
				: ''
				break;

			case "email":
				errors.email = validEmailRegex.test(value)
				? 
				"Email must be valid"
				: ''
				break;

			case "password":
				errors.password = value.length<8
				? 
				"Password should have minimum 8 characters"
				: ''
				break

			case "confirm_password":
				errors.confirm_password = value.length<8
				?
				"Password should have minimum 8 characters"
				: ''	
				break;
			default:
				break;
		}

		this.setState({errors,[name]:value})
	}

	submitHandler = (event) => {
		event.preventDefault()
		if(this.state.password !== this.state.confirm_password){
			alert("Please check the password with confirm_password")
		}
	}

	render(){
		const {error} = this.state
		return(
			<form className="form-group" onSubmit={this.submitHandler}>
				<div className="container">
					<br />
				    <h1>Sign Up</h1>
				    <hr />

				    <label><b>Name</b></label>
				    <br/>
				    <input type="text" placeholder="Enter Name" name="name"  className="col-6" onChange={this.changeHandler} noValidate/>
				    <br />
				    {
				    	error.name.length>0 && <label style={{"color":"red"}}>{error.name}</label> 
				    }
				    <br />
				    <br />
				    <label><b>Email</b></label>
				    <br/>
				    <input type="email" placeholder="Enter Email" name="email" className="col-6" onChange={this.changeHandler} noValidate/>
				    <br />
				    {
				    	error.email.length>0 && <label style={{"color":"red"}}>{error.email}</label> 
				    }
				    <br />
				    <br />
				    <label><b>Password</b></label>
				    <br/>
				    <input type="password" placeholder="Enter Password" name="password" className="col-6" onChange={this.changeHandler} noValidate/>
				    <br />
				    {
				    	error.password.length>0 && <label style={{"color":"red"}}>{error.password}</label> 
				    }
				    <br />
				    <br />
				    <label><b>Confirm Password</b></label>
				    <br/>
				    <input type="password" placeholder="Confirm Password" name="confirm_password"  className="col-6" onChange={this.changeHandler} noValidate/>
				    <br />
				    {
				    	error.confirm_password.length>0 && <label style={{"color":"red"}}>{error.confirm_password}</label> 
				    }
				    <br />	
				    <br />
				    <hr/>
				    <p>By creating an account you agree to our Terms & Privacy.</p>
				    <div className="submit-button">
				      <button type="submit" className="btn btn-secondary">Sign Up</button>
				    </div>
				  </div>
			</form>
		)
	}
}

export default Signup;