import React, { Component } from 'react';
import Axios from 'axios';
// import {connect} from 'react-redux'
// import {loggingIn} from '../redux_store/action/actionType'


class Posts extends Component{

    state={
        title:'',
        description:'',
        author:'',
        likes:0,
        comments:''
    }

    fetchData = async() => {
        const token = localStorage.getItem("accessToken")
        const headers = {
            'Content-Type': 'application/json',
            'auth-token': token
          }
        const fetchPosts = await Axios.post('http://localhost:8000/posts/api/v1/addpost',{
            title:this.state.title,
            description:this.state.description,
            author:this.state.author
        }, {
            headers: headers
          })
        .then((response) => {
            console.log("Response while creating post" , response)
        })
        .catch((err) => {
            console.log("error while creating post is" , err)
        })
    }

    changeHandler = (event) => {
        const {name,value} = event.target
        this.setState({
            [name]:value
        })
    }

    submitHandler= (event) => {
        console.log("Submit")
        this.fetchData()
        event.preventdefault()
    }

    render(){
        // console.log("props in Posts" , this.props)
        // const {user} = this.props
        return(
            <form onSubmit={this.submitHandler}>
                <label>Title</label>
                <br />
                <input type="text" name="title" placeholder="Enter post title" onChange={this.changeHandler}/>
                <br />
                <br />
                <label>Discription</label>
                <br />
                <input type="text" name="description" placeholder="Enter post title" onChange={this.changeHandler}/>
                <br />
                <br />
                <label>Author</label>
                <br />
                <input type="text" name="author" placeholder="Enter post title" onChange={this.changeHandler}/>
                <br />
                <br />
                <button type="submit" className="btn btn-info" >Create Post</button>
            </form>
        )
    }
}

// const mapStatetoProps = state => {
//     console.log("State in dashboard is" , state.users)
//     return{
//         user: state.users
//     }
// }

// const dispatchPropsToState = () => {
//     return{
//         loggingIn
//     }
// }

// export default connect(mapStatetoProps , dispatchPropsToState)(Dashboard);
export default Posts