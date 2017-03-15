import React, { Component } from 'react';

class Display extends Component{
	constructor(props) {
		super(props)
	this.state = {
			Locked: "False",
			Flipped: "False"
		}
	this.handleFlip = this.handleFlip.bind(this);
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
		if (this.state.Flipped === "False"){
			return (
				<div className="main-card col-sm-3 col-sm-offset-1">
					<div className="card-image text-center" onClick={this.handleFlip}>
						{this.props.card.cardImageBack}
					</div>
				</div>
			)
		}else 
			return (
				<div className="main-card col-sm-3 col-sm-offset-1">
					<div className="card-image text-center" onClick={this.handleFlip}>
						{this.props.card.cardImageFront}
					</div>
				</div>
			)
	}
}

export default Display;