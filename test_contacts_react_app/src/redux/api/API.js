import * as axios from 'axios';

const instance = axios.create({
	baseURL: 'http://localhost:5000',
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
