import React from 'react'
import {Formik,Form,Field,ErrorMessage,FieldArray} from 'formik'
import * as Yup from 'yup'
import TextError from './TextError'

const initialValues = {
			name:'',
			email:'',
			channel:'',
			comments:'',
			address:'',
			social:{
				facebook:'',
				twitter:''
			},
			phoneNumber:['',''],
			phNumbers:['']
			
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
		<ErrorMessage name='name' component={TextError}/> 
		</div>
		
		<div className='form-control'>
		<label htmlFor="name" >E-mail</label>
		<Field type="text" id="email" name="email" />
		<ErrorMessage name='email' component={TextError}/>  
		</div>
		
		<div className='form-control'>
		<label htmlFor="channel" >Channel</label>
		<Field type="text" id="channel" name="channel" />
		<ErrorMessage name='channel' component={TextError}/> 
		</div>
		
		<div className='form-control'>
		<label htmlFor='comments'>Comments</label>
		<Field as='textarea' id='comments' name='comments' />
		</div>
		
		<div className='form-control'>
		<label htmlFor='address'>Address</label>
		<Field as='textarea' id='address' name='address' >{(props)=>{
			const {field,meta} = props

			return(<div><input type='text' id='address' {...field}/>
				{meta.touched && meta.error ? <div>{meta.error}</div>:null}
					</div>)
		}}</Field>
		</div>
		
		<div className='form-control'>
		<label htmlFor='facebook'> Facebook Profile</label>
		<Field type='text' id='facebook' name='social.facebook'/>
		</div>
		
		<div className='form-control'>
		<label htmlFor='twitter'> Twitter Profile</label>
		<Field type='text' id='twitter' name='social.twitter'/>
		</div>
		
		<div className='form-control'>
		<label htmlFor='primaryPh'> Primary phone number</label>
		<Field type='text' id='primaryPh' name='phomeNumbers[0]'/>
		</div>
		
		<div className='form-control'>
		<label htmlFor='secondaryPh'> Secondary phone number</label>
		<Field type='text' id='secondaryPh' name='phomeNumbers[1]'/>
		</div>
		
		<button>Submit</button>
	</Form>
	
	</Formik>
	
	)
}

export default YoutubeForm