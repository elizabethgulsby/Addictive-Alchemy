import React, { Component } from 'react';

import {hashHistory} from 'react-router';
import { Link } from 'react-router';





class Card extends Component {
	constructor(props) {
		super(props)
		this.state = {
			Locked: "False",
			Flipped: "False"
		}
	this.handleLock = this.handleLock.bind(this);
	this.handleFlip = this.handleFlip.bind(this);
		
	}
	handleLock = function() {
		if(this.state.Locked === "False"){
	        this.setState({
	            Locked: "True"
	        })
	    }else if(this.state.Locked === "True"){
	    	this.setState({
	    		Locked: "False"
	    	})
	    }
		// console.log(this.state);
	}
	handleFlip = function() {
		// console.log(this.state);
		if(this.state.Flipped === "True" && this.state.Locked === "False"){
			this.setState({
				Flipped: "False"
			})
		}else if(this.state.Flipped === "False" && this.state.Locked === "False"){
			this.setState({
				Flipped: "True"
			})
		}
	}
	render(){
		if (this.state.Flipped === "False" && this.state.Locked === "False"){
			return (
				<div className="main-card col-sm-3 col-sm-offset-1">
					<div className="lock-image text-center" >
						<img src="../Images/LockBevel.png" onClick={this.handleLock} role="presentation" />
					</div>
					<div className="card-image text-center" onClick={this.handleFlip}>
						{this.props.card.cardImageBack}
					</div>
				</div>
			)
		}else 
			return (
				<div className="main-card col-sm-3 col-sm-offset-1">
					<div className="lock-image text-center" onClick={this.handleLock}>
						<img src="../Images/LockBevel.png" role="presentation" />
					</div>
					<div className="card-image text-center" onClick={this.handleFlip}>
						{this.props.card.cardImageFront}
					</div>
				</div>
			)
	}
}


export default Card;