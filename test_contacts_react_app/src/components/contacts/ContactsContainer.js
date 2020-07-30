import React, { useState, useEffect } from 'react';
import Contacts from './Contacts';
import { connect } from 'react-redux';
import { contactsThunk, selectContactDispatch, deleteContactThunk } from '../../redux/reducers/ContactsReducer';
import { compose } from 'redux';
import { withRouter } from 'react-router-dom';

const ContactsContainer = (props) => {
	const [activeClass, setActiveClass] = useState(null);
	const [contacts, setContacts] = useState(props.contactInfo);

	const selectActiveElement = (id, index) => {
		props.selectContactDispatch(id);
		setActiveClass(index);
	};

	useEffect(() => {
		console.log('useEffect from Contacts');
		props.contactsThunk(props.userId);
	}, [contacts]);

	let deleteContact = (id) => {
		props.deleteContactThunk(id).then(() => {
			setContacts(props.contactInfo);
		});
		console.log('delete');
	};

	return (
		<Contacts
			activeClass={activeClass}
			contactInfo={props.contactInfo}
			selectActiveElement={selectActiveElement}
			fullContact={props.fullContact}
			deleteContact={deleteContact}
		/>
	);
};

let mapStateToProps = (state) => {
	return {
		userId: state.authData.userId,
		contactInfo: state.contactsData.contactInfo,
		fullContact: state.contactsData.fullContact
	};
};
export default withRouter(connect(mapStateToProps, { contactsThunk, selectContactDispatch, deleteContactThunk })(ContactsContainer));
