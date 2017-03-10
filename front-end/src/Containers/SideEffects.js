import React, { Component } from 'react';
import SpeedSlider from './SpeedSlider';
import ComplexitySlider from './ComplexitySlider';
import Card from './Card';

var currentArray = [];
var responseFromDB = [
  {
    propertyOne: "value one",
    propertyTwo: "value two",
    propertyThree: "value three"
  },
  {
    propertyOne: "value one",
    propertyTwo: "value two",
    propertyThree: "value three"
  },
  {
    propertyOne: "value one",
    propertyTwo: "value two",
    propertyThree: "value three"
  },
  {
    propertyOne: "value one",
    propertyTwo: "value two",
    propertyThree: "value three"
  }
];





class SideEffects extends Component {
	constructor(props, context) {
        super(props, context)
        this.state = {
        currentArray	
        }
    }

  	render() {
		responseFromDB.map((individualCard, index) => {
			currentArray.push(		
					<Card card={individualCard} key={index} />	
			)
		})

		
	    	return (
	    		<div className="container">
					<SpeedSlider />
					<ComplexitySlider />	
					{currentArray}	
				
	    		</div>
			)
	    	
	}
}

// console.log(currentArray)



export default SideEffects;