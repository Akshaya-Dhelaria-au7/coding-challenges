import React,{Component,Fragment} from 'react';
import Axios from 'axios';
import Spinner from './spinner.gif'

class Fetching extends Component{

	state={
		data:[]
	}

	componentDidMount(){
		setTimeout(()=>{
			this.fetchData()
		},5000)
	}

	fetchData = async () => {
        const fetchingThroughApi = await Axios.get('https://jsonplaceholder.typicode.com/users')
        .then((response) => this.setState({data:response.data}))
        .catch((error) => console.log("Error while fetching" , error))
	}

	render(){
		const {data} = this.state
		return(
			<Fragment>
			{
				data.length == 0 ? <img src={Spinner} alt="Spinner" />
				:
				data.map((eachData,idx) => (
					<Fragment>
						<h3 key={idx}>{eachData.name}</h3>
						<h4>{eachData.email}</h4>
					</Fragment>
				))
			}
			</Fragment>
		)
	}
}

export default Fetching;