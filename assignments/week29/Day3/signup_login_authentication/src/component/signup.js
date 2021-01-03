import React , {Component,Fragment} from 'react';
import '../../node_modules/bootstrap/dist/css/bootstrap.min.css'

class Signup extends Component{
    constructor(props){
        super(props)
        this.state={
            first_name:'',
            last_name:'',
            email:'',
            password:'',
            confirm_password:''
        }
    }


    changeHandler = (event) =>{
        // console.log(event.target)
        const {name,value,input} = event.target  
            this.setState({
                [name] : value
            })
        }

    submitHandler = (event) =>{
        const{password,confirm_password} = this.state
        if(password !== confirm_password){
            alert("Password doesn't match")
        }else{
            alert("Signed In Successfully")
        }
        // console.log(this.state.email,this.state.password)
        event.preventDefault()
    };

    render(){
        console.log(this.props.email)
        return(
            <Fragment>
                <form onSubmit={this.submitHandler}>
                    <div className="form-group">
                        <label>First Name:</label>
                        <input 
                            type="text"
                            name="first_name" 
                            placeholder="Enter your First Name"
                            value={this.state.first_name} 
                            onChange={this.changeHandler}    
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Last Name:</label>
                        <input 
                            type="text"
                            name="last_name" 
                            placeholder="Enter your Last Name" 
                            value={this.state.last_name} 
                            onChange={this.changeHandler}    
                        />
                    </div>
                    <br />
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
                            name="password" 
                            placeholder="Enter your Password" 
                            value={this.state.password} 
                            onChange={this.changeHandler}    
                        />
                    </div>
                    <br />
                    <div className="form-group">
                        <label>Confirm Password:</label>
                        <input 
                            type="password"
                            name="confirm_password" 
                            placeholder="Confirm Password" 
                            value={this.state.confirm_password} 
                            onChange={this.changeHandler}    
                        />
                    </div>
                    <br />
                    <button className="btn btn-info">Sign Up</button>
                </form>
            </Fragment>
        )
    }
}

export default Signup;