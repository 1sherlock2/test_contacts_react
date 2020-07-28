import React from 'react';
import './Header.scss';

const Header = (props) => {
	return (
		<div className='row header_row'>
			<div className='col nickname'>Alim</div>
			<div className='col logout'> Logout</div>
		</div>
	);
};

export default Header;
