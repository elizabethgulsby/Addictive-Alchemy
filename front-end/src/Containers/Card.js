import React, { Component } from 'react';




class Card extends Component {
	render(){
	console.log(this.props);
		return (
			<div className="card col-sm-4">{this.props.card.steve}</div>
		)
	}
}

export default Card;