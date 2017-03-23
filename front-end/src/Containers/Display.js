import React, { Component } from 'react';
import {Link} from 'react-router';
import SideEffects from './SideEffects.js';
import $ from 'jquery';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {hashHistory} from 'react-router';
import LoginAction from '../Actions/LoginAction.js';
//Hook for future versions: will need 2 separate actions for blocked and favorited; pass to dispatch, have reducer handle both action.type(s) with separate responses returning for each - will be handled within the same route?
import FavoriteAction from '../Actions/FavoriteAction.js';

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

	//Hook - checks to see if anything has been favorited when user logs in
	componentWillMount() {
		this.props.favoriteAction({
			userId: this.props.loginResponse.userId,
			cardNumber: this.props.cardNumber,
			willMount: true
		})
		//this.props.balancingResponse.FinalSideEffects
		console.log(this.props.Favorited);
		
	}

	componentDidMount() {
		this.setState({
			Favorited: this.state.Favorited
		})
		console.log(this.props.Favorited)
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

	handleBlocked = function() {
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

	//Part of Hook logic contained here
	handleFavorited = function() {
		event.preventDefault();
		console.log("I've been clicked!")
		if (this.state.Favorited === true) {
			this.setState({
				Favorited: false
			})
			this.props.favoriteAction({
				cardNumber: this.props.cardNumber,
				userId: this.props.loginResponse.userId,
				favorite: 0,
				willMount: false
			})
		}
		else if (this.state.Favorited === false) {
			this.setState({
				Favorited: true
			})
			this.props.favoriteAction({
				cardNumber: this.props.cardNumber,
				userId: this.props.loginResponse.userId,
				favorite: 1,
				willMount: false
			})
		}
	}

	render(){

		console.log("SideEffects render() this.props.loginResponse.userId");
		console.log(this.props.loginResponse.userId);
		console.log(this.state.Favorited);

		if(this.state.Flipped === true){
			var flip = "card flipped";	
		}else if(this.state.Flipped ===false){
			var flip = "card"
		}
		let imageFront = this.props.card.cardImageFront;
		let imageBack = this.props.card.cardImageBack;

		//Hook
		var Favorite = "Unfavorite";
		if (this.props.loginResponse.userId > 0) {
			if (this.state.Favorited == 0 || this.state.Favorited == false) {
				Favorite = "Favorite"
			}
			var buttonDiv = <div className="row">
			 { console.log(this.props) }
					<div className="preferences favorite col-xs-6">
						<button id={"favorite" + this.props.cardNumber} type="button" onClick={this.handleFavorited}>{Favorite}</button>
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
	loginResponse: state.login,
	Favorited: state.Favorited
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
	loginAction: LoginAction,
	favoriteAction: FavoriteAction
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Display);