import React,{Component, Fragment} from 'react';
import {Label,Button, Input, Form,Col,Row, FormGroup} from 'reactstrap';

export default class Signup extends Component{
    state={
        First_name:'',
        Last_name:'',
        Email:'',
        Password:'',
        Confirm_password:''
    }

    submitHandler = (event) =>{
        console.log(`${this.state.First_name} ${this.state.Last_name} ${this.state.Email} ${this.state.Password} ${this.state.Confirm_password} `)
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
        const {First_name,Last_name,Email,Password,Confirm_password} = this.state
        return (
            <Form onSubmit={this.submitHandler}>
                <div className="container">
                <Row form>
                    <Col md={6}>
                    <FormGroup>
                        <Label>First Name</Label>
                        <Input type="text" name="first_name" value={First_name} onChange={this.changeHandler}></Input>
                    </FormGroup>
                    </Col>
                    <Col md={6}>
                    <FormGroup>
                        <Label>Last Name</Label>
                        <Input type="text" name="last_name" value={Last_name} onChange={this.changeHandler}></Input>
                    </FormGroup>
                    </Col>
                    </Row>
                    <FormGroup>
                        <Label>Email</Label>
                        <Input type="email" name="email" value={Email} onChange={this.changeHandler}></Input>
                    </FormGroup>
                    <br></br>
                    <FormGroup>
                        <Label>Password</Label>
                        <Input type="password" name="password" value={Password} onChange={this.changeHandler}></Input>
                    </FormGroup>
                    <br></br>
                    <FormGroup>
                        <Label>Confirm Password</Label>
                        <Input type="password" name="confirm_password" value={Confirm_password} onChange={this.changeHandler}></Input>          
                    </FormGroup>
                    <br></br>
                    <Button className="btn btn-danger">Signup</Button>
                </div> 
            </Form>
        )
    }
}

