import React,{Component,Fragment} from 'react';
import Axios from 'axios';
import Backend_Url from './../Backend_Deployed/backendDeployed'

class UpdateTodo extends Component{
    state={
        Task:'',
        Status:'Todo'
    }

    updatingtodo = async () => {
        // console.log("Props update" , this.props)
        const token = localStorage.getItem("access-token")
		const setHeader = {
			'Content-Type': 'application/json',
			'authorization': token
		}
        await Axios.put(`${Backend_Url}/todo/updatetodo/${this.props.match.params._id}`,{
            Task:this.state.Task,
            Status:this.state.Status
        },{
            headers:setHeader
        })
        .then((data) => console.log("Data in Updating Category ",data))
        // .then((data) => this.setState({data:data.data}))
        .catch((err) => console.log("Error in updating category is" , err.response))
    }

    changeHandler = (event) => {
		const {name,value} = event.target
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
		this.updatingtodo()
		setTimeout(() => {
			this.props.history.push('/todo')
		},4000)
		event.preventDefault()
		
	}

    render(){
        // console.log("Props update in render" , this.props)
        // const {data} = this.state
        // console.log("Data in profile is" , data)
        const {Task,Status} = this.state
        return(
            <div className="update-profile">
                <h4 style={{'padding':'5px'}}>Update your Todo</h4>
                <hr/>
                <br/>
                <h4>Task</h4>
                <br/>
                <input type="text" name="Task" value={Task} onChange={this.changeHandler}/>
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
                <button onClick={this.submitHandler} className="btn btn-primary">Update Todo</button>
                <br />
                <br />
            </div>
        )
    }
} 

export default UpdateTodo