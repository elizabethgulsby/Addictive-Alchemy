import React, {Component} from 'react';
import Card from './Card';
import $ from 'jquery';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {hashHistory} from 'react-router';

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
  	},{
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
  	},{
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
  	},
  	{
    propertyOne: "value one",
    propertyTwo: "value two",
    cardImage: <img src="../Images/Base_Chain_Lightning_Front.png" />
  	},{
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
  	},{
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
];






class SideEffects extends Component{
	constructor(props) {
		super(props);
		this.state = {
			allSideEffects
		}
	}
	render(){

		dbResponse.map((individualCard, index) => {
			allSideEffects.push(		
				<Card card={individualCard} key={index} />	
			)
		})

		return(
			<div className="container">
				{allSideEffects}
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		// SideEffectResponse: state.sideeffects
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		// cardAction: CardAction
	}, dispatch)
}
export default connect(mapStateToProps, mapDispatchToProps)(SideEffects);