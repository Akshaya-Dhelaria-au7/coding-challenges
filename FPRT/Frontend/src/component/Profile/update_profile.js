import React,{Component,Fragment} from 'react';
import Axios from 'axios';
import Backend_Url from '../../Backend_Deployed/backendDeployed'
import './profile.css'
import {connect} from 'react-redux'
import ProfilePic from './profile.png'

class UpdateProfile extends Component{
    state={
        Name:'',
        Password:''
    }

    updateProfile = async () => {
        const token = localStorage.getItem("access-token")
        const _id = localStorage.getItem('_id')
		const setHeader = {
			'Content-Type': 'application/json',
			'authorization': token
		}
        await Axios.put(`${Backend_Url}/user/update/${_id}`,{
            Name:this.state.Name,
            Password:this.state.Password
        },{
            headers:setHeader
        })
        .then((data) => console.log("Data in update profile ",data))
        .catch((err) => console.log(err))
    }

    changeHandler = (event) => {
        const {name,value} = event.target
        this.setState({
            [name]:value                                
        })
    }

    submitHandler = (event) => {
        this.updateProfile()
        setTimeout(() => {
            localStorage.clear()
            this.props.history.push('/login')
        },3000)
        event.preventDefault()
    }


    render(){
        const {Name,Password} = this.state
        // console.log("Data in profile is" , data)
        // console.log("Props in profile" , this.props)
        return(
            <Fragment>
                <div className="card">
                  <img src={ProfilePic} alt="Profile" style={{"width":"15vw"}} />
                  <h3>{localStorage.getItem('Name')}</h3>
                  <p className="title">{localStorage.getItem('Email')}</p>
                </div>
                <hr/>
                <br />
                <form className="form-group" onSubmit={this.submitHandler}>
                <h4>Update your details</h4>
                <hr />
                <input name="Name" type="text" placeholder="Name" value={Name} onChange={this.changeHandler} />
                {
                   Name.length === 0 ? <span></span> : Name.length<6 && Name.length>0 ? <p className="para" style={{color:'red'}}>Name should be more than 5 characters</p>: <span></span>
                }
                <br />
                <br />
                <input placeholder="Password" type="password" name="Password" value={Password} onChange={this.changeHandler}/>
                {
                    Password.length === 0 ? <span></span> : Password.length<6 && Password.length>0 ? <p className="para" style={{color:'red'}}>Password should be more than 5 characters</p> : <span></span>
                }
                <br />
                <br />
                <button className="btn btn-primary" >Update</button>
             </form>
            </Fragment>
        )
    }
} 

const mapStateToProps = (state) => {
    console.log("User profile" , state)
    return {
        state: state.userReducer
    }
}

export default connect(mapStateToProps)(UpdateProfile)