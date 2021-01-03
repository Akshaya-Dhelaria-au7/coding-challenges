import React , {Component, Fragment} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Login extends Component{

    state={
        email:'',
        user_password:''
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
    }
    render(){
        console.log(this.props)
        return(
            <Fragment>
                <form onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <label>Email:</label>
                        <input 
                            type="email"
                            name="email" 
                            placeholder="Enter your email" 
                            value={this.state.email} 
                            onChange={this.changeHandler}    
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Password:</label>
                        <input 
                            type="password"
                            name="user_password" 
                            placeholder="Enter your Password" 
                            value={this.state.password} 
                            onChange={this.changeHandler}    
                        />
                    </div>
                    <br />
                    <button className="btn btn-info">Login</button>
                </form>
            </Fragment>
        )           
    }
}

export default Login;