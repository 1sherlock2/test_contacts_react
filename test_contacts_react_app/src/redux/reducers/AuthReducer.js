import { loginAPI } from '../api/API';
const SET_REGISTER = 'SET_REGISTER';
const SET_AUTH_TRUE = 'SET_AUTH_TRUE';
const SET_AUTH_FALSE = 'SET_AUTH_FALSE';
const REDIRECT_FROM_REGISTER = 'REDIRECT_FROM_REGISTER';
const TOGGLE_REGISTER = 'TOGGLE_REGISTER';
const TOGGLE_REGISTER_SUCCESS = 'TOGGLE_REGISTER_SUCCESS';
const ERROR_TOGGLE_REGISTER_SUCCESS = 'ERROR_TOGGLE_REGISTER_SUCCESS';
const REDIRECT_FROM_REGISTER_FALSE = 'REDIRECT_FROM_REGISTER_FALSE';
const EXIT_ACCOUNT = 'EXIT_ACCOUNT';
const TOGGLE_AUTH = 'TOGGLE_AUTH';
const TOGGLE_AUTH_SUCCESS = 'TOGGLE_AUTH_SUCCESS';
const ERROR_TOGGLE_AUTH_SUCCESS = 'ERROR_TOGGLE_AUTH_SUCCESS';

let initialState = {
	userId: null,
	nickName: null,
	token: null,
	isAuth: false,
	isRegistered: false,

	// Auth.jsx
	toggleAuth: false,
	toggleAuthSuccess: false,
	errorToggleAuthSuccess: false,

	// Register.jsx
	toggleRegister: false,
	toggleRegisterSuccess: false,
	errorToggleRegisterSuccess: false
};

export const authReducer = (state = initialState, action) => {
	switch (action.type) {
		case SET_REGISTER:
			return {
				...state,
				token: action.token,
				userId: action.userId,
				isRegistered: true
			};
		case SET_AUTH_TRUE:
			return {
				...state,
				token: action.token,
				userId: action.userId,
				isRegistered: false,
				isAuth: true
			};
		case REDIRECT_FROM_REGISTER:
			return {
				...state,
				isRegistered: true,
				isAuth: true
			};
		case REDIRECT_FROM_REGISTER_FALSE:
			return {
				...state,
				isRegistered: false,
				isAuth: false
			};
		case TOGGLE_REGISTER:
			return {
				...state,
				toggleRegister: true,
				toggleRegisterSuccess: false,
				errorToggleRegisterSuccess: false
			};
		case TOGGLE_REGISTER_SUCCESS:
			return {
				...state,
				toggleRegister: false,
				toggleRegisterSuccess: true,
				errorToggleRegisterSuccess: false
			};
		case ERROR_TOGGLE_REGISTER_SUCCESS:
			return {
				...state,
				toggleRegister: false,
				toggleRegisterSuccess: false,
				errorToggleRegisterSuccess: true
			};
		case TOGGLE_AUTH:
			return {
				...state,
				toggleAuth: true,
				errorToggleAuthSuccess: false
			};
		case TOGGLE_AUTH_SUCCESS:
			return {
				...state,
				toggleAuth: false,
				toggleAuthSuccess: true
			};
		case ERROR_TOGGLE_AUTH_SUCCESS:
			return {
				...state,
				toggleAuth: false,
				toggleAuthSuccess: false,
				errorToggleAuthSuccess: true
			};
		case EXIT_ACCOUNT:
			return {
				token: null,
				userId: null,
				isAuth: false
			};
		default:
			return { ...state };
	}
};

const registerDispatch = (token, userId) => ({ type: SET_REGISTER, token, userId });
const authDispatchTrue = (token, userId) => ({ type: SET_AUTH_TRUE, token, userId });
export const redirectFromRegister = () => ({ type: REDIRECT_FROM_REGISTER });
export const redirectFromRegisterFalse = () => ({ type: REDIRECT_FROM_REGISTER_FALSE });
const toggleRegisterDispatch = () => ({ type: TOGGLE_REGISTER });
const toggleRegisterSuccessDispatch = () => ({ type: TOGGLE_REGISTER_SUCCESS });
const errorToggleRegisterSuccessDispatch = () => ({ type: ERROR_TOGGLE_REGISTER_SUCCESS });
export const exitAccountDispatch = () => ({ type: EXIT_ACCOUNT });
const toggleAuthDispatch = () => ({ type: TOGGLE_AUTH });
const toggleAuthSuccessDispatch = () => ({ type: TOGGLE_AUTH_SUCCESS });
const errorToggleAuthSuccessDispatch = () => ({ type: ERROR_TOGGLE_AUTH_SUCCESS });

export const registerThunk = (formData) => (dispatch) => {
	dispatch(toggleRegisterDispatch());
	return loginAPI
		.registerFromAPI(formData)
		.then((response) => {
			if (response.status === 200) {
				console.log(response.status);
				let { token, userId } = response.data;
				dispatch(toggleRegisterSuccessDispatch());
				dispatch(registerDispatch(token, userId));
			}
		})
		.catch((error) => {
			if (error.response.status === 400) {
				dispatch(errorToggleRegisterSuccessDispatch());
			}
		});
};

export const authThunk = (formData) => (dispatch) => {
	dispatch(toggleAuthDispatch());
	loginAPI
		.authFormAPI(formData)
		.then((response) => {
			if (response.status === 200) {
				let { token, userId } = response.data;
				dispatch(authDispatchTrue(token, userId));
				dispatch(toggleAuthSuccessDispatch());
			}
		})
		.catch((error) => {
			if (error.response.status === 400) {
				dispatch(errorToggleAuthSuccessDispatch());
			}
		});
};
