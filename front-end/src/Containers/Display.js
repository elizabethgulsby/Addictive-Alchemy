import React, { Component } from 'react';

class Display extends Component{
	constructor(props) {
		super(props)
	this.state = {
			Flipped: false
		}
	this.handleFlip = this.handleFlip.bind(this);
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
	render(){
		if(this.state.Flipped === true){
			var flip = "card flipped";	
		}else if(this.state.Flipped ===false){
			var flip = "card"
		}
		var imageFront = this.props.card.cardImageFront;
		var imageBack = this.props.card.cardImageBack;
		return (
		<div className="main-card col-xs-4 text-center">
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

export default Display;