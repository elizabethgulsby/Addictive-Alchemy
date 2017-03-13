import React, {Component} from 'react';
import Card from './Card';
import $ from 'jquery';


var allSideEffects = [];
var dbResponse = [
  {
    propertyOne: "value one",
    propertyTwo: "value two",
    cardImage: <img src="../Images/Base_Chain_Lightning_Front.png" />
  },
  {
    propertyOne: "value one",
    propertyTwo: "value two",
    cardImage: <img src="../Images/Base_Chain_Lightning_Front.png" />
  },
  {
    propertyOne: "value one",
    propertyTwo: "value two",
    cardImage: <img src="../Images/Base_Chain_Lightning_Front.png" />
  },
  {
    propertyOne: "value one",
    propertyTwo: "value two",
    cardImage: <img src="../Images/Base_Chain_Lightning_Front.png" />
  },
  {
    propertyOne: "value one",
    propertyTwo: "value two",
    cardImage: <img src="../Images/Base_Chain_Lightning_Front.png" />
  },
  {
    propertyOne: "value one",
    propertyTwo: "value two",
    cardImage: <img src="../Images/Base_Chain_Lightning_Front.png" />
  }
]
class SideEffects extends Component{
	render(){

		dbResponse.map((individualCard, index) => {
			allSideEffects.push(		
				<Card card={individualCard} key={index} />	
			)
		})

		return(
			<div>
				{allSideEffects}
			</div>
		)
	}
}

export default SideEffects;