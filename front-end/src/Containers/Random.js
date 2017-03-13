import React, {Component} from 'react';
import { Link } from 'react-router';
import Card from './Card';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {hashHistory} from 'react-router';

var randomArray = [];
var responseFromDB = [
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

class Random extends Component {
	constructor(props) {
		super(props)
		
	}
	
		render(){
		responseFromDB.map((individualCard, index) => {
			randomArray.push(		
				<Card card={individualCard} key={index} />	
			)
		})
		return (
			<div className="random">	
				{randomArray}
			</div>
			
		
		)
	}
}

export default Random;