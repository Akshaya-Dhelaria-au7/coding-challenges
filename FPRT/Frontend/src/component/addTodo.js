import React , {Component,Fragment} from 'react';
import Axios from 'axios'
import Backend_Url from './../Backend_Deployed/backendDeployed'

class CreateTodo extends Component{
	state={
        Task:'',
        Status:"Todo"
    }
    
    createTodo = async() => {
        const token = localStorage.getItem("access-token")
        const header = {
            "Content-type":'application/json',
            'authorization':token
        }
        await Axios.post(`${Backend_Url}/todo/add`,{
            Task:this.state.Task,
            Status:this.state.Status
        },{
            headers:header
        })
        .then((data) => console.log("Data in creating" , data))
        .catch((err) => console.log("Error " , err))
    }

    changeHandler = (event) => {
        const {name,value} = event.target
        // console.log(name,value)
        this.setState({
            [name]:value
        })
    }

    selectHandler = (event) => {
        const selectedByUser = String(event.target.value)
        this.setState({
            Status:selectedByUser
        })
    }

    submitHandler = (event) => {
        this.createTodo()
        setTimeout(() => {
            this.props.history.push('/todo')
        },5000)
        event.preventDefault()
    }

	render(){
        const {Task} = this.state
		return(
            <div className="create-todo">
            <h3>Create Todo</h3>
            <hr />
            <h4>Task</h4>
            <br/>
            <input type="text" name="Task" value={Task} onChange={this.changeHandler} placeholder="Enter your Task"/>
            <br/>
            <br/>
            <h4>Select the status:</h4>
            <br/>
            <select onChange={this.selectHandler}>
                <option>Todo</option>
                <option>Completed</option>
                <option>In Progress</option>
            </select>
            <br/>
            <br/>
            <button onClick={this.submitHandler} className="btn btn-primary">Create Todo</button>
            </div>
        )
	}
}


export default CreateTodo;