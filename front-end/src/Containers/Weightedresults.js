import React, {Component} from 'react';
import Card from './Card';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {hashHistory} from 'react-router';
import WeightedAction from '../Actions/WeightedAction.js';



var weightedArray = [];
var responseFromDB = [
 {
   
   cardImageBack: <img src="../Images/Base_Chain_Lightning_Front.png" /> ,
   cardImageFront: <img src="../Images/Base_Chain_Lightning_Back.png" />
 },
 {
   
   cardImageBack: <img src="../Images/Base_Chain_Lightning_Front.png" /> ,
   cardImageFront: <img src="../Images/Base_Chain_Lightning_Back.png" />
 },
 {
   
   cardImageBack: <img src="../Images/Base_Chain_Lightning_Front.png" /> ,
   cardImageFront: <img src="../Images/Base_Chain_Lightning_Back.png" />
 },
 {
   
   cardImageBack: <img src="../Images/Base_Chain_Lightning_Front.png" /> ,
   cardImageFront: <img src="../Images/Base_Chain_Lightning_Back.png" />
 },
 {
   
   cardImageBack: <img src="../Images/Base_Chain_Lightning_Front.png" /> ,
   cardImageFront: <img src="../Images/Base_Chain_Lightning_Back.png" />
 },
 {
   
   cardImageBack: <img src="../Images/Base_Chain_Lightning_Front.png" /> ,
   cardImageFront: <img src="../Images/Base_Chain_Lightning_Back.png" />
 }

];

class Weightedresults extends Component {
	constructor(props) {
		super(props)
		
	}
	
	
	render(){
		responseFromDB.map((individualCard, index) => {
			weightedArray.push(        
				<Card card={individualCard} key={index} />    
			)


		})
		return(
		

				<div className="container">
					{weightedArray}
				</div>
			
		)
	}
}



function mapStateToProps(state) {
	return {
		weightedResponse: state.weightedArray
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		weightAction: WeightedAction
	}, dispatch)
}




export default connect(mapStateToProps, mapDispatchToProps)(Weightedresults);