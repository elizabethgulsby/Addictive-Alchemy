import React, { Component } from 'react';
import { Link } from 'react-router';

class Card extends Component {
	constructor(props) {
		super(props)
		this.state = {
			Locked: false,
			Flipped: false
		}
	this.handleLock = this.handleLock.bind(this);
	this.handleFlip = this.handleFlip.bind(this);

	}

	handleLock = function() {
		console.log("im locking")
		if(this.state.Locked === false){
	        this.setState({
	            Locked: true
	        })
	    }else if(this.state.Locked === true){
	    	this.setState({
	    		Locked: false
	    	})
	    }
	}

	handleFlip = function() {
		if(this.state.Locked === false){
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
	}

	render(){
		if(this.state.Locked === true){
			var lockStatus = "locked lock-image";				
		}else if(this.state.Locked === false){
			var lockStatus = "unlocked lock-image";
		}
	
		if(this.state.Flipped === true){
			var flip = "card flipped"
		}else if(this.state.Flipped === false){
			var flip = "card"
		}
		var imageBack = [this.props.card.cardImageBack];
		var imageFront = [this.props.card.cardImageFront];


		return (

			<div className="main-card col-xs-4 text-center">
				<div className={lockStatus} onClick={this.handleLock}>
					<img src="../Images/LockBevel.png" role="presentation" />
				</div>
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
			</div>
		)
	}
}

export default Card;