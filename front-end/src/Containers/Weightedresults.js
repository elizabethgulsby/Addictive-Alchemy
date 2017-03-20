import React, {Component} from 'react';
import Card from './Card';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import BalancingAction from '../Actions/BalancingAction.js'

class Weightedresults extends Component {

  constructor(props) {
	super(props)
	this.state = {
	}
  }
  
	render(){
		var weightedArray = [];
		var responsefromDB = [];

		if (this.props.balancingResponse.FinalSideEffects != null) {

		responsefromDB = [
		{   
		 cardImageBack: <img role="presentation" src={"../Images/" + this.props.balancingResponse.FinalSideEffects[0] + "_Back.png"} />,
		 cardImageFront: <img role="presentation" src={"../Images/" + this.props.balancingResponse.FinalSideEffects[0] + "_Front.png"} />
		},
	   	{
	   
		 cardImageBack: <img role="presentation" src={"../Images/" + this.props.balancingResponse.FinalSideEffects[1] + "_Back.png"} /> ,
		 cardImageFront: <img role="presentation" src={"../Images/" + this.props.balancingResponse.FinalSideEffects[1] + "_Front.png"} />
	   	},
	   	{         
		 cardImageBack: <img role="presentation" src={"../Images/" + this.props.balancingResponse.FinalSideEffects[2] + "_Back.png"} /> ,
		 cardImageFront: <img role="presentation" src={"../Images/" + this.props.balancingResponse.FinalSideEffects[2] + "_Front.png"} />
	 	},
		{
		 cardImageBack: <img role="presentation" src={"../Images/" + this.props.balancingResponse.FinalSideEffects[3] + "_Back.png"} /> ,
		 cardImageFront: <img role="presentation" src={"../Images/" + this.props.balancingResponse.FinalSideEffects[3] + "_Front.png"} />
	   	},
	   	{ 
		 cardImageBack: <img role="presentation" src={"../Images/" + this.props.balancingResponse.FinalSideEffects[4] + "_Back.png"} /> ,
		 cardImageFront: <img role="presentation" src={"../Images/" + this.props.balancingResponse.FinalSideEffects[4] + "_Front.png"} />
	   	},
	   	{ 
		 cardImageBack: <img role="presentation" src={"../Images/" + this.props.balancingResponse.FinalSideEffects[5] + "_Back.png"} /> ,
		 cardImageFront: <img role="presentation" src={"../Images/" + this.props.balancingResponse.FinalSideEffects[5] + "_Front.png"} />
	   	}
	   	];

		responsefromDB.map((individualCard, index) => {
			weightedArray.push(        
				<Card card={individualCard} key={index} />    
			)
		})
	}
		console.log(this.props.balancingResponse.FinalSideEffects)
		return (
				<div className="weighted-results">
					{weightedArray}
				</div>
		)
	}
}

function mapStateToProps(state) {
  return {
	balancingResponse: state.balancing
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
	balancingAction: BalancingAction
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Weightedresults);