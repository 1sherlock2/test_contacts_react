import React, { useState } from 'react';
import EditContactReduxForm from './EditContact';
import { withRouter, Redirect } from 'react-router-dom';
import { compose } from 'redux';
import { connect } from 'react-redux';
import { editContactThunk } from '../../redux/reducers/ContactsReducer';

const EditContactContainer = (props) => {
	const [editMode, setEditMode] = useState(true);

	const onSubmit = (formData) => {
		const id = props.match.params.id;
		props.editContactThunk(id, formData).then(() => {
			setEditMode(false);
		});
	};

	return editMode ? <EditContactReduxForm onSubmit={onSubmit} /> : <Redirect to={'/'} />;
};

let mapStateToProps = (state) => {
	return {
		...state
	};
};
export default compose(connect(mapStateToProps, { editContactThunk }), withRouter)(EditContactContainer);
