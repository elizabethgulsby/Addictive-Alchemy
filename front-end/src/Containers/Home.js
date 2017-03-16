import React, { Component } from 'react';
import { Link } from 'react-router';
import Login from './Login.js'

class Home extends Component {
  render() {
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
				<Link to="/login" className="links">Login</Link>
				<br />
				<Link to="/register" className="links">Create Account</Link>
			</div>
		</div>
    );
  }
}

export default Home;