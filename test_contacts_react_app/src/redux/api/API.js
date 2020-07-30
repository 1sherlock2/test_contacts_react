import * as axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:5000/api/',
	withCredentials: true
});

export const loginAPI = {
	registerFromAPI(formData) {
		return instance.post('register', formData);
	},
	authFormAPI(formData) {
		return instance.post('auth', formData);
	}
};

export const contactsAPI = {
	getContactsAPI(userId) {
		return instance.get(`app/${userId}/contacts`);
	},
	postAddContactAPI(userId, formData) {
		return instance.post(`app/${userId}/set_contact`, formData);
	},
	editContactThunk(id, formData) {
		return instance.put(`/app/update_contact/${id}`, formData);
	},
	deleteContactAPI(id) {
		return instance.delete(`/app/delete_contact/${id}`);
	}
};
