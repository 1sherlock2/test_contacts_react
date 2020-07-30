import React, { useState } from 'react';
import AddContactReduxForm from './AddContact';
import { Redirect } from 'react-router-dom';
import { contactAddThunk } from '../../redux/reducers/ContactsReducer';
import { connect } from 'react-redux';

const AddContactContainer = (props) => {
	let [editMode, setEditMode] = useState(false);

	let onSubmit = (formData) => {
		let userId = props.userId;
		console.log(userId);
		props.contactAddThunk(userId, formData).then(() => {
			setEditMode(true);
		});
	};

	return !editMode ? <AddContactReduxForm onSubmit={onSubmit} /> : <Redirect to='/' />;
};

let mapStateToProps = (state) => ({
	userId: state.authData.userId
});

export default connect(mapStateToProps, { contactAddThunk })(AddContactContainer);
