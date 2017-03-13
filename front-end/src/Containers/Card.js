import React, { Component } from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {hashHistory} from 'react-router';
import { Link } from 'react-router';
import CardAction from '../Actions/CardAction.js'



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
		console.log("I am the lock");
        this.setState({
            Locked: "True"
        })
	}
	handleFlip = function() {
		console.log("I am teh flip");
		this.setState({
			Flipped: "True"
		})
	}
	render(){
		return (
			<div className="col-sm-3 col-sm-offset-1">
				<div className="lock-image" onClick={this.handleLock}>
					<img src="../Images/LockBevel.png" />
				</div>
				<div className="card-image" onClick={this.handleFlip}>
					{this.props.card.cardImage}
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