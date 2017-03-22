import React, { Component } from 'react';
import {Link} from 'react-router';
import SideEffects from './SideEffects.js';
import $ from 'jquery';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {hashHistory} from 'react-router';
import LoginAction from '../Actions/LoginAction.js';
//will need 2 separate actions for blocked and favorited; pass to dispatch, have reducer handle both action.type(s) with separate responses returning for each(?)

class Display extends Component{
	constructor(props) {
		super(props)
		this.state = {
			Flipped: false,
			Favorited: false,
	  		Blocked: false
		}
		this.handleFlip = this.handleFlip.bind(this);
		this.handleBlocked = this.handleBlocked.bind(this);
		this.handleFavorited = this.handleFavorited.bind(this);
	}

	handleFlip = function() {
		if(this.state.Flipped === true){
			this.setState({
				Flipped: false
			})
		}else if(this.state.Flipped === false){
			this.setState({
				Flipped: true
			})
		}
	}

	handleBlocked() {
		if (this.state.Blocked === true) {
			this.setState({
				Blocked: false
			})
		}
		else if (this.state.Blocked === false) {
			this.setState({
				Blocked: true
			})
		}
	}

	handleFavorited() {
		if (this.state.Favorited === true) {
			this.setState({
				Favorited: false
			})
		}
		else if (this.state.Favorited === false) {
			this.setState({
				Favorited: true
			})
		}
	}

	render(){

		console.log("SideEffects render() this.props.loginResponse.userId");
		console.log(this.props.loginResponse.userId);

		if(this.state.Flipped === true){
			var flip = "card flipped";	
		}else if(this.state.Flipped ===false){
			var flip = "card"
		}
		let imageFront = this.props.card.cardImageFront;
		let imageBack = this.props.card.cardImageBack;

		if (this.props.loginResponse.userId > 0) {
			var buttonDiv = <div className="row">
					<div className="preferences favorite col-xs-6">
						<button id="favorite" type="button">Favorite</button>
					</div>
					<div className="preferences block col-xs-6">
						<button id="block" type="button">Block</button>
					</div>
				</div>
		}

		return (
		<div className="main-card col-xs-4 text-center display">
				<div className="click-handler" onClick={this.handleFlip}>
					<div className={flip}>
						<div className="front">
							{imageFront}
						</div>
						<div className="back">
							{imageBack}
						</div>
					</div>
				</div>
				{buttonDiv}
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

export default connect(mapStateToProps, mapDispatchToProps)(Display);