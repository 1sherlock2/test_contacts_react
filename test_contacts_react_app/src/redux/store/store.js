import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleWare from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import { authReducer } from '../reducers/AuthReducer';
import { contactsReducer } from '../reducers/ContactsReducer';

const reducerPack = combineReducers({
	contactsData: contactsReducer,
	authData: authReducer,
	form: formReducer
});

const store = createStore(reducerPack, composeWithDevTools(applyMiddleware(thunkMiddleWare)));

export default store;
