import React, {Component} from 'react';
import LoginAction from '../Actions/LoginAction.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {hashHistory} from 'react-router';
import { Link } from 'react-router';
import LogoutAction from '../Actions/LogoutAction.js';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loginResponse: '',
			token: ''
		}
	this.processLogin = this.processLogin.bind(this);	
	}

	processLogin(event) {
		event.preventDefault();
		this.props.loginAction({
			username: event.target[0].value,
			password: event.target[1].value,
		})
		// console.log(event.target[0].value)
		// console.log(event.target[1].value)
		// console.log(event.target[2].value)
	}


	render() {
		var LoggedInCounter = 0;
		if (this.props.loginResponse.msg === "User does not exist.") {
			if (LoggedInCounter !== 0) {
				var Message = "That user does not exist.  Please try again."
			}
			else {
				Message = "Please Sign In"
			}
			
		}
		else if (this.props.loginResponse.msg === "Bad Password!") {
			Message = "Password not found.  Please try again."
		}
		else if (this.props.loginResponse.msg === "User exists! Insert token.") {
			hashHistory.push('/');
			LoggedInCounter++;
		}
		else {
			Message = "Please Sign In"
		}

		return (
			<div className="container shadow text-center col-xs-8 col-xs-offset-2">
				<div className="Login form-group">
						<h1>{Message}</h1>
					<form className="form-group login-form" onSubmit={this.processLogin}>
						<div className="form-group">
							<label htmlFor="username">Username</label>
							<input type="text" className="form-control" placeholder="username" />
						</div>
						<div className="form-group">
							<label htmlFor="password">Password</label>
							<input type="password" className="form-control" placeholder="Password" />
						</div>	
							<button type="submit" className="btn btn-primary">Submit</button>
					</form>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		loginResponse: state.login
		// logoutResponse: state.logout
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		loginAction: LoginAction,
		logoutAction: LogoutAction
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);



