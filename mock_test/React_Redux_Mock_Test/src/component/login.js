import React , {Component, Fragment} from 'react';
import GoogleAuth from './googleAuth'

class Login extends Component{

    state={
            formData:[
            {
                email:'',
                user_password:''
            }
        ]
    }

    changeHandler = (event) =>{
        const {name,value} = event.target   
        // console.log(name,value)
        this.setState({
            [name] : value
        })
    }

    submitHandler = (event) =>{
        alert("Logged in successfully")
        event.preventDefault()

        //Pushing the user once logged in to Profile
        this.props.history.push("/profile")
        localStorage.setItem("access_token",JSON.stringify(this.state.formData))
    }

    render(){
        console.log(this.props)
        return(
            <Fragment>
                <form onSubmit={this.submitHandler}>
                    <br />
                    <h3>Login</h3>
                    <br />
                    <div className="form-group">
                        <label>Email</label>
                        <br />
                        <input 
                            type="email"
                            name="email" 
                            placeholder="Enter your email" 
                            value={this.state.formData.email} 
                            onChange={this.changeHandler}    
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Password</label>
                        <br />
                        <input 
                            type="password"
                            name="user_password" 
                            placeholder="Enter your Password" 
                            value={this.state.formData.password} 
                            onChange={this.changeHandler}    
                        />
                    </div>
                    <br />
                    <button className="btn btn-info">Login</button>
                    <br />
                    <br />
                    <label>Or</label>
                    <br />
                    <br />
                    <GoogleAuth />
                </form>
            </Fragment>
        )           
    }
}

export default Login;