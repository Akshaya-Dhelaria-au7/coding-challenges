import React,{ Component, Fragment } from 'react';

class App extends Component{
  state={
    name:'',
    email:'',
    password:'',
    checked_terms : false
  }


  submitForm = (event) =>{
    console.log(`Name is:${this.state.name} Email is: ${this.state.email}  Password is: ${this.state.password}`)
    event.preventDefault()
  }

  onChangeEvent = (event) =>{
    // console.log(event)
    const { name, value , type, checked } = event.target
    if(type === "checkbox"){
      console.log("Name is",name,"Type is ",type,"Checked is",checked)
      this.setState({
        checked_terms: checked
      })
    }else{
      this.setState({
        [name]: value
      })
    }
  }

  render(){
    return(
      <form onSubmit={this.submitForm}>
          <label>Name</label>
          <input type="text" name="name" value={this.state.name} onChange={this.onChangeEvent}/>
          <br/>
          <label>Email</label>
          <input type="email" name="email" value={this.state.email} onChange={this.onChangeEvent}/>
          <br/>
          <label>Password</label>
          <input type="password" name="password" value={this.state.password} onChange={this.onChangeEvent}/>
          <br/>
          <label>
            <input type="checkbox" name="terms" checked={this.state.checked_terms} onChange={this.onChangeEvent}/>
              Accept the terms and conditions
          </label>
          <br/>
          <button>Submit</button>
      </form>
    )
  }
}

export default App;
