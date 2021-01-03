import React, { Component, Fragment } from 'react';
import {GoogleLogin,GoogleLogout} from 'react-google-login'
import googleKeys from '../config/google.json'
import Axios from 'axios';
// import { connect } from 'react-redux'
// import {loggingIn,loggingOut} from '../redux_store/action/actionType'
// import reducer from '../redux_store/reducer/reducer';


class Login extends Component{

    state={
        email:'',
        password:''
    }

    changeHanlder = (event) => {
        const {name,value} = event.target
        // console.log(event.target)
        this.setState({
            [name]:value
        })

    }

    // componentDidMount(){
    //     this.fetchdata()
    // }

    fetchdata = async () => {
        const fetchLoginData = await Axios.post('http://localhost:8000/users/api/v1/login',{
            email:this.state.email,
            password:this.state.password
        })
        .then((response) => {
            console.log("response is",response.data.token)
            localStorage.setItem("accessToken" , response.data.token)
        })
        .catch((err) =>{
            console.log(err)
        })

    }

    submitHandler = (event) => {
        this.fetchdata()
        console.log(this.props)
        event.preventDefault()
        this.props.history.push('/viewallposts')
    }
    render(){
        return(
            <form className="login-form" onSubmit={this.submitHandler}>
                <h3 className="jumbotron">Login</h3>
                <br/>
                <div className="form-group">
                    <input type="email" name="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter your email" onChange={this.changeHanlder} />
                    <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>  
                <br/>
                <div className="form-group">
                    <input type="password" name="password" className="form-control" id="exampleInputPassword1" placeholder="Enter your password" onChange={this.changeHanlder} />
                </div>
                <br/>
                <button type="submit" className="btn btn-info btn-lg ">Submit</button>
                <br/>
            </form>
        )
    }
}

// const mapStateToProps = storeState => {
//     console.log("State is ===>" , storeState)
//     return{
//         user: storeState.userState.user
//     }
// }   

// const dispatchPropsToState = () => {
//     return {
//         loggingIn,
//         loggingOut
//     }
// }

// export default connect(mapStateToProps , dispatchPropsToState)(Login);

export default Login