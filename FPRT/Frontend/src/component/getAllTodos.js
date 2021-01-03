import React , {Component,Fragment} from 'react';
import {connect} from 'react-redux'
import {fetchTodos} from './../redux/action/get_todos'
import Axios from 'axios'
import Backend_Url from './../Backend_Deployed/backendDeployed'
import './getTodos.css'
import Spinner from './spinner.gif'
import Noresult from './notodo.png'

class Todo extends Component{
	state={
        data:[],
        error:'',
        deleted:false
	}
    
    componentDidMount(){
        this.props.fetchTodos()
    }

    updateHandler = (id) => {
        const {data} = this.state
        this.props.history.push(`/todo/updatetodo/${id}`,{data:data})
    }

    deleteHandler =async (id,index,status) => {
        // console.log(status)
        this.setState({
            data:this.props.state.data
        })
        const token = localStorage.getItem("access-token")
		const setHeader = {
			'Content-Type': 'application/json',
			'authorization': token
		}
        await Axios.delete(`${Backend_Url}/todo/deletetodo/${id}`,{
            headers:setHeader
        })
        .then((res) => {
            const previousData = this.state.data;
            // console.log(previousData)  
            if(status == "Todo"){
                previousData.Todo.splice(index,1)
            } else if(status == "Completed") {
                previousData.Completed.splice(index,1)
            } else if (status == "InProgress") {
                previousData.InProgress.splice(index,1)
            }
           this.setState({data:previousData})
           this.forceUpdate()
        })
        .catch((err) => console.log("Error in profile is" , err.response.data.message))
        // this.callingProfile()
        setTimeout(() => {
            this.props.history.push(`/todo`)
        },5000)
    }

    buttonHandler = (event) => {
        // console.log(this.props)
        this.props.history.push('/create')
        event.preventDefault()
    }

	render(){
        console.log("Props in landing page" , this.props.state.data)
        // const {data,error,} = this.state
        const {data,error} = this.props.state
		return(
            <Fragment>
            <div className="todo-container">
              
                <hr />
                
                <br/>
                <div className="todo-container">
                <h4>Todo</h4>
                {
                    error.length>0 && error === "No Todos Found"  ? <img className="spinner" src={Noresult} alt="No Todos"/> :
                    Array.isArray(data.Todo) && !data.Todo.length ? <img className="spinner" src={Noresult} alt="No Todos"/> :
                    data.length === 0 ? <img className="spinner" src={Spinner} alt="Loading"/>:
                    data.Todo.map((eachData,index) => (
                        
                        <Fragment>
                        <div className="row">
                            <div className="column">
                                <div className="card">
                                <p>{eachData.Task}</p>
                            </div>
                            <br/>
                            <button className="btn btn-warning" onClick={() => this.updateHandler(eachData._id)}>
                                        <i className="fa fa-edit" 
                                        style={{
                                            'color':'white',
                                            'width':'30px',
                                            'position':'relative'
                                        }}>
                                        </i>
                                    </button>
                                    <button className="btn btn-danger" onClick={() => this.deleteHandler(eachData._id,index,eachData.Status)}><i className="fa fa-trash" style={{
                                            'color':'white',
                                            'width':'30px',
                                            'position':'relative'
                                        }}></i>
                                    </button> 
                                    <br />
                                    <br />
                            </div>
                        </div>
                        <br />
                        </Fragment>
                    ))
                }
                </div>
                <div className="todo-container">
                <h4>In Progress</h4>
                {
                    error.length>0 && error === "No Todos Found"  ? <img className="spinner" src={Noresult} alt="No Todos"/> :
                    Array.isArray(data.InProgress) && !data.InProgress.length ? <img className="spinner" src={Noresult} alt="No Todos"/> :
                    data.length === 0 ? <img className="spinner" src={Spinner} alt="Loading"/>: 
                    data.InProgress.map((eachData,index) => (
                        <Fragment>
                        <div className="row">
                            <div className="column">
                                <div className="card">
                                <p>{eachData.Task}</p>
                                </div>
                                <br/>
                                <button className="btn btn-warning" onClick={() => this.updateHandler(eachData._id)}>
                                <i className="fa fa-edit" 
                                style={{
                                    'color':'white',
                                    'width':'30px',
                                    'position':'relative'
                                }}>
                                </i>
                            </button>
                            <button className="btn btn-danger" onClick={() => this.deleteHandler(eachData._id,index,eachData.Status)}><i className="fa fa-trash" style={{
                                    'color':'white',
                                    'width':'30px',
                                    'position':'relative'
                                }}></i>
                            </button> 
                            <br />
                            <br />
                            </div>
                        </div>
                        <br/>
                        </Fragment>
                    ))
                }
            </div>
            <div className="todo-container">
                <h4>Completed</h4>
                {
                    error === "No Todos Found"  ? <img className="spinner" src={Noresult} alt="No Todos"/> :
                    Array.isArray(data.Completed) && !data.Completed.length ? <img className="spinner" src={Noresult} alt="No Todos"/> :
                    data.length === 0 ? <img className="spinner" src={Spinner} atl="Loading"/>:
                    data.Completed.map((eachData,index) => (
                        <div className="row">
                            <div className="column">
                                <div className="card">
                                <p>{eachData.Task}</p>
                                </div>
                                <br/>
                                <button className="btn btn-warning" onClick={() => this.updateHandler(eachData._id)}>
                                <i className="fa fa-edit" 
                                style={{
                                    'color':'white',
                                    'width':'30px',
                                    'position':'relative'
                                }}>
                                </i>
                            </button>
                            <button className="btn btn-danger" onClick={() => this.deleteHandler(eachData._id,index,eachData.Status)}><i className="fa fa-trash" style={{
                                    'color':'white',
                                    'width':'30px',
                                    'position':'relative'
                                }}></i>
                            </button> 
                            <br />
                            <br />
                            </div>
                        </div>
                    ))
                }
                </div>
            </div>
            <button className="btn btn-warning" style={{'display':'inline','width':'90vw'}} onClick={this.buttonHandler}>Create Todo</button>
            </Fragment>
            )
        }
}


const mapToProps = (state) => {
    console.log("Landing page state ",state)
    return{
        state : state.todoReducer
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        fetchTodos: (todo) => dispatch(fetchTodos(todo)) 
    }
}

export default connect(mapToProps,mapDispatchToProps)(Todo);