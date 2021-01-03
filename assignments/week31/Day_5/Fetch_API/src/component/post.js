import React , {Component} from 'react';
import axios from 'axios';
class Post extends Component{

    state={
        id:'',
        users:[]
    }

    componentDidMount(){
        this.fetchData()
    }

    fetchData = async () =>{
        const fetchFromApi = await axios.get('https://jsonplaceholder.typicode.com/posts/:id')
        .then((data) => this.setState({users: data.data}))
        .catch((error) => console.log("Error while fetching api is " , error))
    }

    render(){
        const { users } = this.state
        return(
            <div>
                <br/>
                <table>
                    <tbody>
                    <tr>
                        <th>Id</th>
                        <th>Title</th>
                    </tr>
                    {
                        users.map(user => 
                            <tr>
                                <td>{user.id}</td> 
                                <td>{user.title}</td> 
                            </tr>
                        )
                    }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Post 