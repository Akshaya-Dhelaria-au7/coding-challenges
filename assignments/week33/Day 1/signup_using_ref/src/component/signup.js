import React from 'react';

class Signup extends React.Component{
	constructor(props){
		super(props)
		this.nameRef = React.createRef() 
		this.emailRef = React.createRef()
	}

	componentDidMount(){
		this.nameRef.current.value = "Akshay"
		this.emailRef.current.focus()
	}
	
	render(){
		return(
			<form className="form-group">
				<h4>Signup</h4>
			    <label><b>Name</b></label>
			    <input type="text" placeholder="Enter Name" name="name" ref={this.nameRef} disabled />
			    <br/>
			    <br />
			    <label ><b>Email</b></label>
			    <input type="email" placeholder="Enter Email" name="email" ref={this.emailRef} />
			    <br />
			    <br />
			    <label><b>Password</b></label>
			    <input type="password" placeholder="Password" name="password"  />
			    <br />
			    <br />
			    <label><b>Confirm Password</b></label>
			    <input type="password" placeholder="Confirm Password" name="confirm_password"  />
			    <br />
			    <br />
			    <button>Submit</button>
			</form>
		)
	}
}

export default Signup;