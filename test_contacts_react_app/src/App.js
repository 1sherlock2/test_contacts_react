import React from 'react';
import './App.scss';
import HeaderContainer from './components/header/HeaderContainer';
import ContactsContainer from './components/contacts/ContactsContainer';
import { BrowserRouter, withRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { connect } from 'react-redux';
import AuthContainer from './components/auth/AuthContainer';
import store from './redux/store/store';
import { compose } from 'redux';
import { AuthRedirectHOC } from './redux/HOC/AuthRedirectHOC';

const App = (props) => {
	// useEffect(() => {

	// })

	if (!props.isAuth) {
		return <AuthContainer />;
	}
	return (
		<div className='container-fluid'>
			<div className='header'>
				<HeaderContainer />
			</div>
			<div className='contacts'>
				<ContactsContainer />
			</div>
		</div>
	);
};

const AppContainer = compose(withRouter, AuthRedirectHOC)(App);

const MainApp = () => {
	return (
		<BrowserRouter>
			<Provider store={store}>
				<AppContainer />
			</Provider>
		</BrowserRouter>
	);
};

window.store = store;
export default MainApp;
