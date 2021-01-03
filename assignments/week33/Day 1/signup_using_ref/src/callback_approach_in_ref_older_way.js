import React , {Component} from 'react';

class Callback_Approach_Ref extends Component{
	constructor(props){
		super(props)

		//1st step is to Create a ref
		this.inputRef = null

		
		this.refHandler = (element) => {
			console.log("Element is ===> " , element)
			this.inputRef = element
		}

		this.changeHandler = () => {
			console.log("Value in ref ====> ",this.inputRef.value)
		}
	}	

	componentDidMount(){
		if(this.refHandler){
			this.inputRef.focus()
		}
		console.log("Ref is" , this.refHandler)
	}

	render(){
		return (
			<div>
				<input type="text" ref={this.refHandler} />
				<textarea col='20' type="text" ref= {this.refHandler} />
				<button onClick={this.changeHandler}>Submit</button>
			</div>
		)
	}
}

export default Callback_Approach_Ref;