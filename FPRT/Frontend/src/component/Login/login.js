import React , { Component } from 'react';
import {connect} from 'react-redux'
import {fetchLoginData} from '../../redux/action/login_action'
import './login.css'

class Login extends Component{
    state={
        user:{},
        Email:'',
        Password:'',
        error:''
    }

    changeHandler = (event) => {
        const {name,value} = event.target
        this.setState({
            [name]:value,
            error:''
        })
    }

    submitHandler = (event) => {
        this.props.fetchLoginData(this.state)
        setTimeout(() => {
             const {error} = this.props.state
             console.log("error in login" , error)
             this.setState({
                 error:error
             })

            // console.log("error in login" , error)
            if(error.length>0){
                this.props.history.push('/login')
            }else{
                this.props.history.push('/todo')
            }
        },2000)
        event.preventDefault()
    }

    render(){
        console.log("props in login" , this.props)
        const {Email,Password,error} = this.state
        // const {error} = this.props.state
        console.log(error)
        const enableButton = Email.includes('@') && Email.includes('.') && Password.length>5 
        return(
            <div className="login-div">
            <br />
            <br />
            <br />
            <br />
            <form className="form-group" onSubmit={this.submitHandler}>
            {
                error && <div className="alert alert-danger" role="alert" style={{justifyContent:'center'}}>
                    {error}
                </div>
            }
                <h3>Welcome Back</h3>
                <br />
                <input name="Email" type="email" placeholder="Email" value={Email} onChange={this.changeHandler}/>
                {
                    Email.length === 0 ? <span></span> : Email.length<6 || !Email.includes('@') || !Email.includes('.')  ? <p className="para" style={{color:'red'}}>Email should be valid</p> : <span></span>
                }
                <br />
                <br />
                <input placeholder="Password" type="password" name="Password" value={Password} onChange={this.changeHandler}/>
                {
                    Password.length === 0 ? <span></span> : Password.length<6 && Password.length>0 ? <p className="para" style={{color:'red'}}>Should be more than 5 characters</p> : <span></span>
                }
                <br />
                <br />
                <button className="btn btn-info" disabled={!enableButton}>Login</button>
            </form>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    console.log("state in login" , state)
    return{
        state : state.userReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchLoginData: (userData) => dispatch(fetchLoginData(userData)) 
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(Login);