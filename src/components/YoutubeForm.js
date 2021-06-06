import React from 'react'
import {useFormik} from 'formik'

const initialValues = {
			name:'',
			email:'',
			channel:''
		}
		
const onSubmit = values => {
			console.log("Formik data",values);
		}

const validate = values =>{
			let errors={}
			
			if(!values.name){
				errors.name = "Required"
			}
			
			if(!values.email){
				errors.email = "Required"
			}else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)){
				errors.email = "Invalid email format"
			}
			
			if(!values.channel){
				errors.channel = "Required"
			}
			
			return errors
		}
		
function YoutubeForm(){
	const formik = useFormik({
		initialValues,
		
		onSubmit,
		
		validate 
	})
	
	
	return(
	
	<div>
	
	<form onSubmit={formik.handleSubmit}>
		<label htmlFor="name" >Name</label>
		<input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name}/>
		
		<label htmlFor="name" >E-mail</label>
		<input type="text" id="email" name="email" onChange={formik.handleChange} value={formik.values.email}/>
		
		<label htmlFor="channel" >Name</label>
		<input type="text" id="channel" name="channel" onChange={formik.handleChange} value={formik.values.channel}/>
		
		<button>Submit</button>
	</form>
	
	</div>
	
	)
}

export default YoutubeForm