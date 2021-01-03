import React , {useState , useEffect} from 'react';

function Form(){

	const [name,setName] = React.useState({
		name:'',
		number:'',
		email:''
	})
	
	const submitHandler = (e) => {
		e.preventDefault()
		alert(`Name is ${name.name}, number is ${name.number} and email is ${name.email}`)
	}
	// useEffect(() => {
	// 	// alert(`{name.name} {name.email}`)
	// })
	// console.log("Use effect is" , name , "function is" , setName)

	return (
		<form className="form-group" onSubmit={submitHandler}>
			<input type="text" value={name.name} onChange={e => setName({...name,name:e.target.value})} placeholder="Enter your name...."/>
			<br />
			<br />
			<input type="number" value={name.number} onChange={e => setName({...name,number:e.target.value})} placeholder="Enter your number...."/>
			<br />
			<br />
			<input type="email" value={name.email} onChange={e => setName({...name,email:e.target.value})} placeholder="Enter your email...."/>
			<br />
			<br />
			<button>Submit</button>
			<h2>Your name is {name.name} and your number is {name.number} and email is {name.email}</h2>
		</form>
	)
}

export default Form;
