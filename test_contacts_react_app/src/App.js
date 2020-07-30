import React from 'react';
import './App.scss';
import HeaderContainer from './components/header/HeaderContainer';
import ContactsContainer from './components/contacts/ContactsContainer';
import { BrowserRouter, withRouter, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import AuthContainer from './components/auth/AuthContainer';
import store from './redux/store/store';
import { compose } from 'redux';
import { AuthRedirectHOC } from './redux/HOC/AuthRedirectHOC';
import AddContactContainer from './components/addContact/AddContactContainer';
import Switch from 'react-bootstrap/esm/Switch';
import EditContactContainer from './components/editContact/EditContactContainer';

const App = (props) => {
	if (!props.isAuth) {
		return <AuthContainer />;
	}
	return (
		<div className='container-fluid'>
			<div className='header'>
				<HeaderContainer />
			</div>
			<div className='contacts'>
				<Switch>
					<Route exact path={'/'} render={() => <ContactsContainer />} />
					<Route exact path={'/add_contact'} render={() => <AddContactContainer />} />
					<Route exact path={'/edit_contact/:id'} render={() => <EditContactContainer />} />
				</Switch>
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
