import { contactsAPI } from '../api/API';

const GET_CONTACT = 'GET_CONTACT';
const SELECT_CONTACT = 'SELECT_CONTACT';
const initialState = {
	fullContact: null,
	contactInfo: null
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
		default:
			return {
				...state
			};
	}
};

const getContactsDispatch = (contactInfo) => ({ type: GET_CONTACT, contactInfo });
export const selectContactDispatch = (id) => ({ type: SELECT_CONTACT, id });

export const contactsThunk = (userId) => (dispatch) => {
	return contactsAPI.getContactsAPI(userId).then((response) => {
		dispatch(getContactsDispatch(response.data));
	});
};
