import React from 'react';
import './AddContact.scss';
import { reduxForm } from 'redux-form';
import { maxLength, minLength, requiredField } from '../utils/validators/Validators';
import { NavLink } from 'react-router-dom';
import { createFrom } from '../utils/forms/CreateForm';
import { Input } from '../utils/forms/component/Input';
import { Textarea } from '../utils/forms/component/Textarea';

let maxLengthPostsFormTitle = maxLength(20);
const minLengthPostsFormTitle = minLength(5);
const maxLengthPostsFormDescription = maxLength(50);
const minLengthPostsFormDescription = minLength(10);
const minLengthPostsFormText = minLength(5);

const AddContact = (props) => {
	return (
		<div className='add_contact_form'>
			<div className='add_contact_a_button'>
				<NavLink to={'/'}>
					<button type='button' className='btn__posts btn-primary btn-lg nav_button_form'>
						Back
					</button>
				</NavLink>
			</div>
			<div className='posts_content'>
				<form onSubmit={props.handleSubmit}>
					<div className='form-group'>
						<label htmlFor='title'> Name </label>
						{createFrom('name', Input, {}, 'form-control', 'submitTitle', 'enter contact name', [
							minLengthPostsFormTitle,
							maxLengthPostsFormTitle,
							requiredField
						])}
					</div>
					<div className='form-group form-check'>
						<label className='form-check-label' htmlFor='secondName'>
							Second name
						</label>
						{createFrom('secondName', Input, {}, 'form-control', 'secondName', 'Add new text', [
							maxLengthPostsFormDescription,
							minLengthPostsFormDescription
						])}
					</div>
					<div className='form-group'>
						<label htmlFor='exampleFormControlTextarea1'>Phone number </label>
						{createFrom('phone', Textarea, {}, 'form-control', 'exampleFormControlTextarea1', 'enter phone number', [
							minLengthPostsFormText,
							requiredField
						])}
					</div>
					<div className='form-group form-check'>
						<label htmlFor='image'>Company</label>
						{createFrom('company', Input, 'text', 'form-control', 'submitImageURL', 'enter image url')}
					</div>
					<div className='form-group form-check'>
						<label htmlFor='image'>Description</label>
						{createFrom('description', Input, 'text', 'form-control', 'submitImageURL', 'enter description about contact')}
					</div>
					<button type='submit' className='btn btn-primary'>
						Send post
					</button>
				</form>
			</div>
		</div>
	);
};

const AddContactReduxForm = reduxForm({ form: 'addContact' })(AddContact);

export default AddContactReduxForm;
