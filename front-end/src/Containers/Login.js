import React, {Component} from 'react';
import LoginAction from '../Actions/LoginAction.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {hashHistory} from 'react-router';

class Login extends Component {
	constructor(props) {
		super(props);
		this.state = {
			loginResponse: ''
		}
	this.processLogin = this.processLogin.bind(this);	
	}

	processLogin(event) {
		event.preventDefault();
		this.props.loginAction({
			username: event.target[0].value,
			password: event.target[1].value,
			email: event.target[2].value
		})
		// console.log(event.target[0].value)
		// console.log(event.target[1].value)
		// console.log(event.target[2].value)
	}


	render() {
		if (this.props.loginResponse.msg === "NOPE.exe") {
			var Message = "Nope!"
		}
		else {
			Message = "Login Page"
		}
		return (
			<div className="container">
				<div className="row">
				<h1>{Message}</h1>
					<div className="Login">
						<form className="login-form" onSubmit={this.processLogin}>
							<input type="text" placeholder="username" />
							<input type="text" placeholder="password" />
							<input type="text" placeholder="email" />
							<input type="submit" value="Login" />
						</form>

						<div className="register">
							New User?  <a href="#">Register Here</a>
						</div>

					</div>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		loginResponse: state.login
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		loginAction: LoginAction
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);