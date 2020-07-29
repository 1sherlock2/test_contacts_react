import React from 'react';
import { reduxForm } from 'redux-form';
import { createFrom } from '../utils/forms/CreateForm';
import { Input } from '../utils/forms/component/Input';
import './Register.scss';
import { Spinner } from 'react-bootstrap';
import { minLength } from '../utils/validators/Validators';

const minLengthForPassword = minLength(8);
const minLengthEmail = minLength(5);

const Register = (props) => {
	return (
		<div className='container container_register'>
			<div className='login_h1'>
				<h1> Registration </h1>
			</div>
			<div className='row justify-content-center'>
				<div className='col-8'>
					<form onSubmit={props.handleSubmit}>
						<div className='form-group'>
							<label htmlFor='exampleInputEmail1'>Email address</label>
							{createFrom('email', Input, 'email', 'form-control', 'exampleInputEmail1', 'your email', minLengthEmail)}
							<small id='emailHelp' className='form-text text-muted'>
								We'll never share your email with anyone else.
							</small>
						</div>
						<div className='form-group'>
							<label htmlFor='exampleInputPassword1'>Password</label>
							{createFrom(
								'password',
								Input,
								'password',
								'form-control',
								'exampleInputPassword1',
								'your password',
								minLengthForPassword
							)}
						</div>
						<div className='form-group form-check'>
							{createFrom('checkbox', Input, 'checkbox', 'form-check-input', 'exampleCheck1', [], [])}
							<label className='form-check-label' htmlFor='exampleCheck1'>
								{' '}
								Remember me{' '}
							</label>
						</div>
						<div className='register_buttons'>
							<button type='submit' className='btn btn-primary'>
								{' '}
								Register
							</button>
							<button
								className='btn btn-primary'
								onClick={() => {
									props.redirectFromRegisterFalse();
								}}>
								{' '}
								Back on Login
							</button>
						</div>
					</form>
					<div className='spinner_register'>
						{props.toggleRegister && (
							<div>
								<Spinner animation='grow' />
							</div>
						)}
					</div>
					<div>
						{props.toggleRegisterSuccess && (
							<div className='toggle_register_success'>
								<span> Registration was success, enter your block through the login form </span>
							</div>
						)}
						{props.errorToggleRegisterSuccess && (
							<div className='error_toggle_register_success'>
								<span className='error_toggle_register_success_span'>
									{' '}
									Some happened error, maybe it is user created or server is not working{' '}
								</span>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

const RegisterReduxForm = reduxForm({
	form: 'register'
})(Register);

export default RegisterReduxForm;
