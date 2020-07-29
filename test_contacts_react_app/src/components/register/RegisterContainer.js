import React from 'react';
import RegisterReduxForm from './Register';
import { redirectFromRegisterFalse, registerThunk } from '../../redux/reducers/AuthReducer';
import { connect } from 'react-redux';

const RegisterContainer = (props) => {
	let onSubmit = (formData) => {
		props.registerThunk(formData);
	};

	return (
		<RegisterReduxForm
			onSubmit={onSubmit}
			toggleRegister={props.toggleRegister}
			toggleRegisterSuccess={props.toggleRegisterSuccess}
			errorToggleRegisterSuccess={props.errorToggleRegisterSuccess}
			redirectFromRegisterFalse={props.redirectFromRegisterFalse}
		/>
	);
};

let mapStateToProps = (state) => {
	return {
		toggleRegister: state.authData.toggleRegister,
		toggleRegisterSuccess: state.authData.toggleRegisterSuccess,
		errorToggleRegisterSuccess: state.authData.errorToggleRegisterSuccess
	};
};

export default connect(mapStateToProps, {
	registerThunk,
	redirectFromRegisterFalse
})(RegisterContainer);
