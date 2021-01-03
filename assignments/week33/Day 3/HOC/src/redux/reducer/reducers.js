import signUpAction from '../action/actionType.js'

const initialState = {
	formData : [
		{
			name:'',
			surname:'',
			email:''
		}
	]
}

const signUpReducer = (state=initialState,action) => {
	const {type,payload} = action 
	if(type === "SIGNUP"){
		console.log("Reducer called")
		return {
			...state,
			formData: [...state.formData,payload]
		}
	}
	return state;
}

export default signUpReducer	