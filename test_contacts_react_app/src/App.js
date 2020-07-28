import React from 'react';
import './App.scss';
import HeaderContainer from './components/header/HeaderContainer';
import ContactsContainer from './components/contacts/ContactsContainer';

function App() {
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
}

export default App;
