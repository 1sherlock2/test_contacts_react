import React from 'react';
import Header from './Header';
import { connect } from 'react-redux';
import { exitAccountDispatch } from '../../redux/reducers/AuthReducer';

const HeaderContainer = (props) => {
	const logout = () => {
		props.exitAccountDispatch();
	};

	return <Header nickname={props.nickname} logout={logout} />;
};

let mapStateToProps = (state) => {
	return {
		nickname: state.authData.nickname
	};
};
export default connect(mapStateToProps, { exitAccountDispatch })(HeaderContainer);
