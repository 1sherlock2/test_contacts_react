import React from 'react';
import AuthContainer from '../../components/auth/AuthContainer';
import RegisterContainer from '../../components/register/RegisterContainer';
import { connect } from 'react-redux';

export const AuthRedirectHOC = (Component) => {
	let mapStateToPropsFromRedirect = (state) => ({
		isAuth: state.authData.isAuth,
		isRegistered: state.authData.isRegistered
	});

	class RedirectComponent extends React.Component {
		render() {
			if (this.props.isAuth && !this.props.isRegistered) {
				return <Component {...this.props} />;
			} else if (!this.props.isAuth && !this.props.isRegistered) {
				return <AuthContainer {...this.props} />;
			} else if (this.props.isAuth && this.props.isRegistered) {
				return <RegisterContainer {...this.props} />;
			}
		}
	}

	return connect(mapStateToPropsFromRedirect, {})(RedirectComponent);
};
