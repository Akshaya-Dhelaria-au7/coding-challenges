import React , {Component} from 'react';

class Ref extends Component{

	constructor(props){
		super(props)

		//Create a ref
		this.inputRef = React.createRef()

		this.changeHandler = () => {
			console.log("Value in ref ====> ",this.inputRef.current.value)
		// alert(this.inputRef.current.value)
		}
	}

	// console.log("Ref is" , inputRef)	

	componentDidMount(){
		this.inputRef.current.focus()
		console.log("Ref is" , this.inputRef)
	}

	render(){
		return (
			<div>
				<input type="text" ref={this.inputRef} />
				<button onClick={this.changeHandler}>Submit</button>
			</div>
		)
	}
}

export default Ref;