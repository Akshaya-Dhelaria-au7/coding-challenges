import React , { Component } from 'react';
import {Link ,Switch,Route} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchUserSignup} from '../../redux/action/signup_action'

class Signup extends Component{
    state={
        Name:'',
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
        this.props.fetchUserSignup(this.state)
        setTimeout(() => {
            const {error} = this.props.state
            this.setState({
                 error:error
             })
            console.log("error in signup" , this.state.error)
            if(error.length>0){
                this.props.history.push('/')
            }else{
                this.props.history.push('/verify')
            }
        },3000)
        event.preventDefault()
    }

    render(){
        const {Name,Email,Password,error} = this.state
        // console.log(this.props,error)
        const enableButton = Name.length>5 && Email.includes('@') && Email.includes('.') && Password.length>5 
        return(
            <div>
            <br />
            <form className="form-group" onSubmit={this.submitHandler}>
                <div className="welcome">
                    <h3>Welcome to Todo Keeper</h3>
                    <p className="para">Signup to maitain your Todos</p>
                </div>
                <hr />
                <input name="Name" type="text" placeholder="Full Name" value={Name} onChange={this.changeHandler} />
                {
                   Name.length === 0 ? <span></span> : Name.length<6 && Name.length>0 ? <p className="para" style={{color:'red'}}>Name should be more than 5 characters</p>: <span></span>
                }
                <br />
                <br />
                <input name="Email" type="email" placeholder="Email" value={Email} onChange={this.changeHandler}/>
                {
                    Email.length === 0 ? <span></span> : Email.length<6 || !Email.includes('@') || !Email.includes('.')  ? <p className="para" style={{color:'red'}}>Email should be valid</p> : error.length>0 ? <p className="para" style={{color:'red'}}>{error}</p> : <span></span>
                }
                <br />
                <br />
                <input placeholder="Password" type="password" name="Password" value={Password} onChange={this.changeHandler}/>
                {
                    Password.length === 0 ? <span></span> : Password.length<6 && Password.length>0 ? <p className="para" style={{color:'red'}}>Password should be more than 5 characters</p> : <span></span>
                }
                <br />
                <br />
                <button className="btn btn-primary" disabled={!enableButton}>Create Account</button>
                <br />
                <br />
                <p className="para">Already have an account?<Link to='/login'>Login</Link><Switch><Route path='/login' exact /></Switch></p>
            </form>
            </div>
        )
    }
}

const mapToProps = (state) => {
    // console.log(state)
    return{
        state : state.userReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchUserSignup: (userData) => dispatch(fetchUserSignup(userData)) 
    }
}

export default connect(mapToProps , mapDispatchToProps)(Signup);