import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {hashHistory} from 'react-router';
import { Link } from 'react-router';
import CardAction from '../Actions/CardAction.js';




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
        this.setState({
            Locked: "True"
        })
		console.log("Iam teh lock");
	}
	handleFlip = function() {
		console.log("I am teh flip");
		this.setState({
			Flipped: "True"
		})
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

function mapStateToProps(state) {
	return {
		cardResponse: state.card
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		cardAction: CardAction
	}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(Card);