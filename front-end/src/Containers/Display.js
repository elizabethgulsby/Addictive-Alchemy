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
			var image = this.props.card.cardImageBack	
		}else if(this.state.Flipped ===false){
			var image = this.props.card.cardImageFront;
		}
		return (
			<div className="main-card col-sm-3 col-sm-offset-1">
				<div className="card-image text-center" onClick={this.handleFlip}>
					{image}
				</div>
			</div>
		)
	}
}

export default Display;