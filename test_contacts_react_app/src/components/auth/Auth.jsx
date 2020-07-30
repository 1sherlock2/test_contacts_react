import React from 'react';
import { reduxForm } from 'redux-form';
import { createFrom } from '../utils/forms/CreateForm';
import { Input } from '../utils/forms/component/Input';
import './Auth.scss';
import { Spinner } from 'react-bootstrap';

const Auth = (props) => {
	return (
		<div className='container container_auth'>
			<div className='login_h1'>
				<h1> Entry in you contacts </h1>
			</div>
			<div className='row justify-content-center'>
				<div className='col-8'>
					<form onSubmit={props.handleSubmit}>
						<div className='form-group'>
							<label htmlFor='exampleInputNickName'> Nickname</label>
							{createFrom('nickname', Input, 'text', 'form-control', 'exampleInputNickName', 'your nickname', [])}
							<small id='nicknameHelp' className='form-text text-muted'>
								We'll never share your nickname with anyone else.
							</small>
						</div>
						<div className='form-group'>
							<label htmlFor='exampleInputPassword1'>Password</label>
							{createFrom('password', Input, 'password', 'form-control', 'exampleInputPassword1', 'your password', [])}
						</div>
						<div className='form-group form-check'>
							{createFrom('checkbox', Input, 'checkbox', 'form-check-input', 'exampleCheck1', [], [])}
							<label className='form-check-label' htmlFor='exampleCheck1'>
								Remember me
							</label>
						</div>
						<div className='buttons_auth_form'>
							<div className='button_auth_form'>
								<button type='submit' className='btn btn-primary'>
									Login
								</button>
							</div>
							<div className='register_button_in_auth'>
								<button
									type='submit'
									className='btn btn-primary'
									onClick={() => {
										props.redirectFromRegister();
									}}>
									Register
								</button>
							</div>
						</div>
					</form>
					<div>
						<div className='auth_spinner'>
							{props.toggleAuth && (
								<div>
									<Spinner animation='grow' />
								</div>
							)}
						</div>
						<div>
							{props.toggleAuthSuccess && (
								<div>
									<div className='toggle_auth_success'>
										<span> Loading blogs account </span>
									</div>
									<div className='toggle_auth_success_spinner'>
										<Spinner animation='grow' variant='success' />
									</div>
								</div>
							)}
							{props.errorToggleAuthSuccess && (
								<div className='error_toggle_auth_success'>
									<span className='error_toggle_auth_success_span'> Nickname or password is not correct </span>
								</div>
							)}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

const AuthReduxForm = reduxForm({
	form: 'auth'
})(Auth);

export default AuthReduxForm;
