import React, {Component} from 'react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import { Link } from 'react-router';

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			email:''
		}
		this.handleUsername = this.handleUsername.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
		this.handleEmail = this.handleEmail.bind(this);
	}

	processRegistration(event) {
		event.preventDefault();
		console.log(event.target[0].value)
		console.log(event.target[1].value)
		console.log(event.target[2].value)
	}

	handleUsername(event) {
		console.log(event.target.value);
	}

	handlePassword(event) {
		console.log(event.target.value)
	}

	handleEmail(event) {
		console.log(event.target.value)
	}

	render() {
		return (
			<div className="container">
				<div className="Register">
					<form className="form-group login-form" onSubmit={this.processRegistration}>
						<div className="form-group">
							<label for="username">Username</label>
							<input type="text" className="form-control" placeholder="Username" value={this.state.handleUsername} />
						</div>
						<div className="form-group">
							<label for="password">Password</label>
							<input type="password" className="form-control" placeholder="Password" value={this.state.handlePassword}/>
						</div>

						<div className="form-group">
							<label for="email">Email</label>
							<input type="email" className="form-control" placeholder="Email" value={this.state.handleEmail}/>
						</div>
						
						<button type="submit" className="btn btn-danger">Register</button>
					</form>
				</div>
			</div>
		)
	}
}

export default Register;