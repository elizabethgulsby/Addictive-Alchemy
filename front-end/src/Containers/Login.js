import React, {Component} from 'react';
import LoginAction from '../Actions/LoginAction.js';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {hashHistory} from 'react-router';
import { Link } from 'react-router';

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
			Message = "Please Sign In"
		}
		return (
			<div className="container">

					<div className="Login">
					<h1>{Message}</h1>
						<form className="form-group login-form" onSubmit={this.processLogin}>
							<div className="form-group">
								<label for="username">Username</label>
								<input type="email" className="form-control" placeholder="username" />
							</div>
							<div className="form-group">
								<label for="password">Password</label>
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
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		loginAction: LoginAction
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);