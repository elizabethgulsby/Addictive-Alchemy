import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import RegisterAction from '../Actions/RegisterAction.js';

class Register extends Component {
	constructor(props) {
		super(props);
		this.state = {
			username: '',
			password: '',
			email: ''
		}
		this.processRegistration = this.processRegistration.bind(this);
		this.handleUsername = this.handleUsername.bind(this);
		this.handlePassword = this.handlePassword.bind(this);
		this.handleEmail = this.handleEmail.bind(this);
	}

	processRegistration(event) {
		event.preventDefault();
		var Username = event.target[0].value;
		var Password = event.target[1].value;
		var Email = event.target[2].value;
		this.props.registerAction({
			username: Username,
			password: Password,
			email: Email
		});
		// console.log(event.target[0].value)
		// console.log(event.target[1].value)
		// console.log(event.target[2].value)
	}

	handleUsername(event) {
		this.setState({
			username: event.target.value
		});
		console.log(event.target.value);
	}

	handlePassword(event) {
		this.setState({
			password: event.target.value
		});
		console.log(event.target.value)
	}

	handleEmail(event) {
		this.setState({
			email: event.target.value
		});
		console.log(event.target.value)
	}

	render() {
		// console.log(this.props)
		if (this.props.registerResponse.msg === "User added!") {
			var Message = "User added!  Please return to the home screen."
		}
		else if (this.props.registerResponse.msg === "This user already exists.") {
			Message = "This account already exists.  Please try again."
		}
		else {
			Message = "Please Register Below"
		}
		return (
			<div className="container">
				<div className="Register">
				<h1>{Message}</h1>
					<form className="form-group login-form" onSubmit={this.processRegistration}>
						<div className="form-group">
							<label htmlFor="username">Username</label>
							<input type="text" className="form-control" placeholder="Username" value={this.state.handleUsername} />
						</div>
						<div className="form-group">
							<label htmlFor="password">Password</label>
							<input type="password" className="form-control" placeholder="Password" value={this.state.handlePassword}/>
						</div>

						<div className="form-group">
							<label htmlFor="email">Email</label>
							<input type="email" className="form-control" placeholder="Email" value={this.state.handleEmail}/>
						</div>
						
						<button type="submit" className="btn btn-danger">Register</button>
					</form>
				</div>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		registerResponse: state.register
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		registerAction: RegisterAction
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);