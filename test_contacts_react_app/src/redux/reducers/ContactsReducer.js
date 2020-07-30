import { contactsAPI } from '../api/API';

const GET_CONTACT = 'GET_CONTACT';
const SELECT_CONTACT = 'SELECT_CONTACT';
const DELETE_CONTACT_BY_ID = 'DELETE_CONTACT_BY_ID';
const initialState = {
	contactInfo: null,
	fullContact: null
};

export const contactsReducer = (state = initialState, action) => {
	switch (action.type) {
		case GET_CONTACT:
			return {
				...state,
				contactInfo: action.contactInfo
			};
		case SELECT_CONTACT:
			return {
				...state,
				fullContact: state.contactInfo.filter((item) => item._id === action.id)
			};
		case DELETE_CONTACT_BY_ID:
			return {
				...state,
				contactInfo: state.contactInfo.filter((item) => item._id !== action.id)
			};
		default:
			return {
				...state
			};
	}
};

const getContactsDispatch = (contactInfo) => ({ type: GET_CONTACT, contactInfo });
export const selectContactDispatch = (id) => ({ type: SELECT_CONTACT, id });
const deleteContactByIdDispatch = (id) => ({ type: DELETE_CONTACT_BY_ID, id });

export const contactsThunk = (userId) => (dispatch) => {
	return contactsAPI.getContactsAPI(userId).then((response) => {
		dispatch(getContactsDispatch(response.data));
	});
};

export const contactAddThunk = (userId, formData) => () => {
	return contactsAPI.postAddContactAPI(userId, formData);
};

export const editContactThunk = (id, formData) => () => {
	return contactsAPI.editContactThunk(id, formData);
};

export const deleteContactThunk = (id) => (dispatch) => {
	return contactsAPI.deleteContactAPI(id).then((response) => {
		if (response.status === 'contact was deleting') {
			dispatch(deleteContactByIdDispatch(id));
		}
	});
};
