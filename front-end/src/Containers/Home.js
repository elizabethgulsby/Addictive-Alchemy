import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
  render() {
    return (
		<div className="content">
			<div className="buttons">
				<Link to="/random"><img src="../Images/DealRandomSideEffects.png" /></Link>
			</div>
			<div className="buttons">
				<Link to="/balancing"><img src="../Images/DealWeightedSideEffects.png" /></Link>
			</div>
			<div className="buttons">
				<Link to="/sideeffects"><img src="../Images/ViewSideEffects.png" /></Link>
			</div>
			<div className="buttons">
				<Link to="/"><img src="../Images/About.png" /></Link>
			</div>

			<div className="container login-register">
				<Link to="/login" className="links">Login</Link>
				<br />
				<Link to="/register" className="links">Create Account</Link>
			</div>
		</div>
    );
  }
}

export default Home;