import React, { Component } from 'react';




class Card extends Component {
	render(){
	console.log(this.props);
		return (
			<div>{this.props.card.propertyOne}</div>
		)
	}
}

export default Card;