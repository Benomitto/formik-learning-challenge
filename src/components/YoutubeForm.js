import React,{useState} from 'react'
import {Formik,Form,Field,ErrorMessage,FieldArray,FastField} from 'formik'
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
		
const savedValues = {
			name:'ben',
			email:'b@gmail.com',
			channel:'bbb123',
			comments:'asf',
			address:'24b streeth 4th',
			social:{
				facebook:'',
				twitter:''
			},
			phoneNumber:['',''],
			phNumbers:['']
			
		}
		
const onSubmit = (values,onSubmitProps) => {
			console.log("Formik data",values);
			console.log("Submit props",onSubmitProps);
			onSubmitProps.isSubmitting(false);
			onSubmitProps.resetForm();
		}

		
const validationSchema = Yup.object({
	name:Yup.string().required("Required!"),
	email:Yup.string().email("Invalid email format").required("Required"),
	channel:Yup.string().required("Required"),
})

const validateComments = value => {
	let error
	if(!value){
		error = 'Required'
	}
	return error
}
		
function YoutubeForm(){

	const[formValues,setFormValues] = useState()
	//console.log("Visited ",formik.touched);
	return(
	
	<Formik initialValues={formValues || initialValues} validationSchema={validationSchema} onSubmit={onSubmit} validateOnMount 
	enableReinitialize>
		{formik=>{
			console.log('formik props',formik);
			return(
			
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
		<Field as='textarea' id='comments' name='comments' validate={validateComments}/>
		<ErrorMessage name='comments' component={TextError}/>
		</div>
		
		<div className='form-control'>
		<label htmlFor='address'>Address</label>
		<FastField as='textarea' id='address' name='address' >
		{(props)=>{
			console.log('Field render');
			const {field,meta} = props

			return(<div><input type='text' id='address' {...field}/>
				{meta.touched && meta.error ? <div>{meta.error}</div>:null}
					</div>)
		}}</FastField>
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
		<Field type='text' id='primaryPh' name='phoneNumbers[0]'/>
		</div>
		
		<div className='form-control'>
		<label htmlFor='secondaryPh'> Secondary phone number</label>
		<Field type='text' id='secondaryPh' name='phoneNumbers[1]'/>
		</div>
		
		<div className='form-control'>
		<label htmlFor=''>List of Phone Numbers</label>
		<FieldArray type='text' id='secondaryPh' name='phNumbers'>
		{(fieldArrayProps)=>{
			
			const {push,remove,form} = fieldArrayProps
			const {values} = form
			const {phNumbers} = values
			return(<div>{
				phNumbers.map((phNumbers,index)=>(
				<div key={index}>
				<Field name={`phNumbers[${index}]`}/>
				{
					index > 0 && (
					<button type="button" onClick={()=>remove(index)}>{''}-{''}</button>
					)
				}
				
				<button type="button" onClick={()=>push('')}>{''}+{''}</button>
				</div>))
			}</div>)
		}}
		</FieldArray>
		</div>

		/*<button type='button' onClick={()=> formik.validateField('comments')} >Validate comments</button>
		<button type='button' onClick={()=>formik.validateForm()} >Validate all</button>
		
		<button type='button' onClick={()=> formik.setFieldTouched('comments')} >Visit comments</button>
		<button type='button' onClick={()=>formik.setTouched({name:true,email:true,channel:true,comments:true})} >Visit Fields</button>
		*/
		<button type='button' onClick={()=> setFormValues(savedValues)}>Load data</button>
		<button type='reset'>Reset</button>
		<button type='button' disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
	</Form>
			
			)
		}}
	
	
	
	</Formik>
	
	)
}

export default YoutubeForm