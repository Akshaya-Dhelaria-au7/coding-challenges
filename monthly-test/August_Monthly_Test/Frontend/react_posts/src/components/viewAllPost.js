import React, { Component } from 'react';
import Axios from 'axios';
// import {connect} from 'react-redux'
// import {loggingIn} from '../redux_store/action/actionType'


class View_All_Posts extends Component{

    state={
        posts:[]
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async() => {
        const token = localStorage.getItem("accessToken")
        const headers = {
            'Content-Type': 'application/json',
            'auth-token': token
          }
        const fetchPosts = await Axios.get('http://localhost:8000/posts/api/v1/allposts',{
            headers: headers
          })
        .then((response) => {
            console.log("response " + response.data.posts);
            this.setState({posts:response.data.posts})
        })
        .catch((err) => {
            console.log("error while creating post is" , err)
        })
    }

    increment = (index, likes) => {
        var updatedLikes = likes + 1;
        this.state.posts[index].likes = updatedLikes
        this.forceUpdate(); 
    }

    render(){
        //console.log("state is" , this.state.posts.data)
        if(this.state.posts == undefined || this.state.posts.length == 0) {
            return null;
        }

        //console.log("sss " + this.state.posts.data.posts);
        
        // const {data} = this.state.posts
        // console.log(posts)
        console.log("state is" , this.state.posts);

        return( 
            <div>
            {                    
                this.state.posts.map((post,index) => 
                    <div className="post-box">
                        <br />
                        <h6>Post title: {post.title}</h6>
                        <h3>Post description: {post.description}</h3>
                        <h4>Post Author: {post.author}</h4>
                        <button className="btn btn-secondary" onClick={() => this.increment(index, post.likes)}>Like
                            <label> : {post.likes}</label>
                        </button>
                        <br />
                    </div>
                )
            }            
            </div>
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
export default View_All_Posts