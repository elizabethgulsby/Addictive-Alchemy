import React, { Component } from 'react';
import { Link } from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import Login from './Login.js';
import LoginAction from '../Actions/LoginAction.js';
import LogoutAction from '../Actions/LogoutAction.js';

class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			isLoggedIn: false
		}
		this.handleLogout = this.handleLogout.bind(this);
	}

	handleLogout() {
		this.props.loginAction({
			isLoggedIn: false
		})
	}


  	render() {
	  	var loggedInResult = 'Login';
	  	var createAccountOrLogout = 'CreateAccount'
	  	var Message = 'Please Sign In'
	  	if (this.props.loginResponse !== null) {
	  		if (this.props.loginResponse.isLoggedIn) {
	  			loggedInResult = "Hi, " + this.props.loginResponse.username + "!"
	  			createAccountOrLogout = <Link to="/" className="links" onClick={this.handleLogout}>Logout</Link>
	  		}
	  		console.log(loggedInResult);
	  		console.log(this.props.loginResponse);

  	}
  
    return (
		<div className="content">
			<div className="buttons text-center col-sm-12">
				<Link to="/random"><img src="../Images/DealRandomSideEffects.png" role="presentation" /></Link>
			</div>
			<div className="buttons text-center col-sm-12">
				<Link to="/balancing"><img src="../Images/DealWeightedSideEffects.png" role="presentation" /></Link>
			</div>
			<div className="buttons text-center col-sm-12">
				<Link to="/sideeffects"><img src="../Images/ViewSideEffects.png" role="presentation" /></Link>
			</div>
			<div className="buttons text-center col-sm-12">
				<Link to="/"><img src="../Images/About.png" role="presentation" /></Link>
			</div>

			<div className="container col-sm-12 text-left">
				<Link to="/login" className="links">{loggedInResult}</Link>
				<br />
				<Link to="/register" className="links">{createAccountOrLogout}</Link>
			</div>
		</div>
    );
  }
}

function mapStateToProps(state) {
	return {
		loginResponse: state.login
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		loginAction: LoginAction,
		logoutAction: LogoutAction
	}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);