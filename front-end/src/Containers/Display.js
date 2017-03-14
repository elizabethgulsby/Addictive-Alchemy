import React, { Component } from 'react';

class Display extends Component{
	constructor(props) {
		super(props)
	}
	componentDidMount() {
		console.log(this.state);
	}
	render(){

		// if (this.state.Flipped === "False"){
		return (
			<div className="main-card col-sm-3 col-sm-offset-1">
				<div className="card-image text-center">
					{this.props.card.cardImageBack}
				</div>
			</div>
		)
		// }else 
		// 	return (
		// 		<div className="main-card col-sm-3 col-sm-offset-1">
		// 			<div className="card-image text-center">
		// 				{this.props.card.cardImageFront}
		// 			</div>
		// 		</div>
		// 	)
		
	}
}

export default Display;