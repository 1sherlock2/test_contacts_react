import React from 'react';
import './Header.scss';
import { connect } from 'react-redux';

const Header = (props) => {
	return (
		<div className='row header_row'>
			<div className='col nickname'>{props.nickname}</div>
			<div className='col logout'>
				<button onClick={props.logout}>Logout</button>
			</div>
		</div>
	);
};

let mapStateToProps = (state) => {
	return {
		nickname: state.authData.nickname
	};
};
export default Header;
