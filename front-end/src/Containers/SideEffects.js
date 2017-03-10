import React, { Component } from 'react';
import SpeedSlider from './SpeedSlider';
import ComplexitySlider from './ComplexitySlider';
import Card from './Card';
import {Link} from 'react-router';

var currentArray = [];
var responseFromDB = [
  {
    propertyOne: "value one",
    propertyTwo: "value two",
    steve: <img src="http://placehold.it/350x150" />
  },
  {
    propertyOne: "value one",
    propertyTwo: "value two",
    steve: <img src="http://placehold.it/350x150" />
  },
  {
    propertyOne: "value one",
    propertyTwo: "value two",
    steve: <img src="http://placehold.it/350x150" />
  },
  {
    propertyOne: "value one",
    propertyTwo: "value two",
    steve: <img src="http://placehold.it/350x150" />
  },
  {
    propertyOne: "value one",
    propertyTwo: "value two",
    steve: <img src="http://placehold.it/350x150" />
  },
  {
    propertyOne: "value one",
    propertyTwo: "value two",
    steve: <img src="http://placehold.it/350x150" />
  }
]





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
                    <div className="row col-sm-8 col-sm-offset-2">
                        <div className="col-sm-6 ">Fast Game</div>
                        <div className="text-right col-sm-6 ">Slower Game</div>
                        <div className="col-sm-12 slider">  
                            <SpeedSlider />
                        </div>
                        <div className="col-sm-6">Easy Game</div>
                        <div className="text-right col-sm-6">Complex Game</div>
                        <div className="col-sm-12 slider">
                            <ComplexitySlider />
                        </div>
				    </div>
                    <div className="deal-weighted-effects text-center">
                        <Link to="balancing"><img src="/Images/DealWeightedSideEffects.png" /></Link>
                    </div>
	    		</div>
			)
	    	
	}
}

// console.log(currentArray)



export default SideEffects;