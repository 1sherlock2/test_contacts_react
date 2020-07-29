import React, { useState } from 'react';
import Contacts from './Contacts';
import { connect } from 'react-redux';
import { contactsThunk, selectContactDispatch } from '../../redux/reducers/ContactsReducer';

const ContactsContainer = (props) => {
	const [activeClass, setActiveClass] = useState(null);

	const selectActiveElement = (id, index) => {
		props.selectContactDispatch(id);
		setActiveClass(index);
	};

	useState(() => {
		console.log('useEffect from Contacts');
		props.contactsThunk(props.userId);
	}, []);

	return (
		<Contacts
			activeClass={activeClass}
			contactInfo={props.contactInfo}
			selectActiveElement={selectActiveElement}
			fullContact={props.fullContact}
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
export default connect(mapStateToProps, { contactsThunk, selectContactDispatch })(ContactsContainer);
