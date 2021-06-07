import React from 'react'
import {Formik,Form,Field,ErrorMessage} from 'formik'
import * as Yup from 'yup'

const initialValues = {
			name:'',
			email:'',
			channel:''
		}
		
const onSubmit = values => {
			console.log("Formik data",values);
		}

		
const validationSchema = Yup.object({
	name:Yup.string().required("Required!"),
	email:Yup.string().email("Invalid email format").required("Required"),
	channel:Yup.string().required("Required")
})
		
function YoutubeForm(){

	
	//console.log("Visited ",formik.touched);
	return(
	
	<Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
	
	<Form >
		<div className='form-control'>
		<label htmlFor="name" >Name</label>
		<Field type="text" id="name" name="name" />
		<ErrorMessage name='name'/> 
		</div>
		
		<div className='form-control'>
		<label htmlFor="name" >E-mail</label>
		<Field type="text" id="email" name="email" />
		<ErrorMessage name='email'/>  
		</div>
		
		<div className='form-control'>
		<label htmlFor="channel" >Name</label>
		<Field type="text" id="channel" name="channel" />
		<ErrorMessage name='channel'/> 
		</div>
		
		<button>Submit</button>
	</Form>
	
	</Formik>
	
	)
}

export default YoutubeForm