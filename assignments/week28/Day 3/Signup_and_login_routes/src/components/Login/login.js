import React,{Component, Fragment} from 'react';
import {Label,Button,Input,Form,FormGroup} from 'reactstrap';

class Login extends Component{
    state={
        Email:'',
        Password:''
    }

    submitHandler = (event) =>{
        console.log(`${this.state.Email} ${this.state.Password} `)
        event.preventDefault()
    }

    changeHandler = (event) =>{
        // console.log(event.target.name,event.target.value)
        const {name,value} = event.target
        this.setState({
            [name]:value
        })
    }
    
    render(){
        const {Email,Password} = this.state
        return (
            <Form onSubmit={this.submitHandler}>
                <div className="container">
                    <FormGroup>
                        <Label>Email</Label>
                        <Input type="email" name="email" value={Email} onChange={this.changeHandler}></Input>
                    </FormGroup>
                    <br></br>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input type="password" name="password" value={Password} onChange={this.changeHandler}></Input>
                    </FormGroup>
                    <Button className="btn btn-danger">Signup</Button>
                </div> 
            </Form>
        )
    }
}

export default Login;