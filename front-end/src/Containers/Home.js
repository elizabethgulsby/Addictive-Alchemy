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
			// isLoggedIn: false
		}
		this.handleLogout = this.handleLogout.bind(this);
	}

	handleLogout() {
		console.log("Home.js - handleLogout() is called.");
		this.props.loginAction({
			userId: -1
		})
		console.log("After Logout userId!");
		console.log(this.props.loginResponse.userId);
	}


  	render() {
	  	var loggedInResult = 'Login';
	  	var createAccountOrLogout = 'Create Account'
	  	var Message = 'Please Sign In'
	  		console.log("this.props.loginResponse");
	  		console.log(this.props.loginResponse);
	  		if (this.props.loginResponse.userId > 0) {
	  			loggedInResult = "Hi, " + this.props.loginResponse.username + "!";
	  			createAccountOrLogout = <Link to="/" className="links" onClick={this.handleLogout}>Logout</Link>
	  		}
	  		console.log(loggedInResult);
	  		console.log(this.props.loginResponse);

  	
  

    return (
		<div className="content">
			
			<div className="buttons text-center col-sm-12">
				<Link to="/balancing"><img src="../Images/DealSideEffects.png" role="presentation" /></Link>
			</div>
			<div className="buttons text-center col-sm-12">
				<Link to="/sideeffects"><img src="../Images/ViewSideEffects.png" role="presentation" /></Link>
			</div>
			<div className="buttons text-center col-sm-12">
				<Link to="/about"><img src="../Images/About.png" role="presentation" /></Link>
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