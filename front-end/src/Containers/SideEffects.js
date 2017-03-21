import React, { Component } from 'react';
import {Link} from 'react-router';

// import React, {Component} from 'react';
import Display from './Display';
import $ from 'jquery';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {hashHistory} from 'react-router';
import SideEffectsAction from '../Actions/SideEffectsAction.js';
// import { Link } from 'react-router';

// var allSideEffects = [];



class SideEffects extends Component{
	constructor(props) {
		super(props);
		this.state = {
	  		Flipped: false,
	  		Favorited: false,
	  		Blocked: false,
	  		IsLoggedIn: false
		}
		this.handleBlocked = this.handleBlocked.bind(this);
		this.handleFavorited = this.handleFavorited.bind(this);
		this.handleLoggedIn = this.handleLoggedIn.bind(this);
	}


	  handleSettings = (event) => {
	  	var flipped = this.state.Flipped;
	  	var favorited = this.state.Favorited;
	  	var blocked = this.state.Blocked;
	  	var isLoggedIn = this.state.IsLoggedIn;
	  	this.props.sideEffectsAction({
	  		Flipped: flipped,
	  		Favorited: favorited,
	  		Blocked: blocked,
	  		IsLoggedIn: isLoggedIn

	  	})

	  }


	handleBlocked() {

	}

	handleFavorited() {

	}

	handleLoggedIn() {

	}

	// componentDidMount() {
	// 	this.props.sideEffectsAction();
	// 	// console.log("this.props.sideEffectsResponse");
	// 	// console.log(this.props);
	// 	// console.log(this.props.sideEffectsAction());
	// }
  
	render(){
		// this.props.sideEffectsAction();

		var allSideEffects = [];
		var allSideEffectsPreComponent = [];
		// console.log("render() this.props.sideEffectsResponse");
		// console.log(this.props.sideEffectsResponse);

			allSideEffectsPreComponent = [
  				{
				  cardImageBack: <img src="../Images/Base_Chain_Lightning_Back.png" role="presentation" />,
				  cardImageFront: <img src="../Images/Base_Chain_Lightning_Front.png" role="presentation" />
				},
				{ 
				  cardImageBack: <img src="../Images/Base_Flask_of_Life_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../Images/Base_Flask_of_Life_Front.png" role="presentation" />
				},
				{ 
				  cardImageBack: <img src="../Images/Base_Alchemists_Ice_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../Images/Base_Alchemists_Ice_Front.png" role="presentation" />
				},
				{
				  cardImageBack: <img src="../Images/Base_Lightning_in_a_Bottle_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../Images/Base_Lightning_in_a_Bottle_Front.png" role="presentation" />
				},
				{ 
				  cardImageBack: <img src="../Images/Base_Mercurial_Poisoning_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../Images/Base_Mercurial_Poisoning_Front.png" role="presentation" />
				},
				{
				  cardImageBack: <img src="../Images/Base_Philosophers_Apex_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../Images/Base_Philosophers_Apex_Front.png" role="presentation" />
				},
				{
				  cardImageBack: <img src="../Images/Star_Searing_Sign_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../Images/Star_Searing_Sign_Front.png" role="presentation" />
				},
				{
				  cardImageBack: <img src="../Images/Star_Flask_of_Clarity_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../Images/Star_Flask_of_Clarity_Front.png" role="presentation" />
				},
				{
				  cardImageBack: <img src="../Images/Star_Alchemists_Crescendo_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../Images/Star_Alchemists_Crescendo_Front.png" role="presentation" />
				},{
				  cardImageBack: <img src="../Images/Star_Aether_Spike_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../Images/Star_Aether_Spike_Front.png" role="presentation" />
				},
				{
				  cardImageBack: <img src="../Images/Star_Vervain_Vortex_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../Images/Star_Vervain_Vortex_Front.png" role="presentation" />
				},
				{
				  cardImageBack: <img src="../Images/Star_Philosophers_Divide_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../Images/Star_Philosophers_Divide_Front.png" role="presentation" />
				},{
				  cardImageBack: <img src="../Images/Aether_Aether_Fuse_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../Images/Aether_Aether_Fuse_Front.png" role="presentation" />
				},
				{
				  cardImageBack: <img src="../Images/Aether_Crystalline_bezoar_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../Images/Aether_Crystalline_bezoar_Front.png" role="presentation" />
				},
				{
				  cardImageBack: <img src="../Images/Aether_Aether_Well_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../Images/Aether_Aether_Well_Front.png" role="presentation" />
				},
				{
				  cardImageBack: <img src="../Images/Aether_Entropic_Siphon_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../Images/Aether_Entropic_Siphon_Front.png" role="presentation" />
				},
				{
				  cardImageBack: <img src="../Images/Aether_Ataxic_Fog_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../Images/Aether_Ataxic_Fog_Front.png" role="presentation" />
				},
				{
				  cardImageBack: <img src="../Images/Aether_Vitalitas_Spike_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../Images/Aether_Vitalitas_Spike_Front.png" role="presentation" />
				},
				{
				  cardImageBack: <img src="../Images/Team_Joachim_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../Images/Team_Joachim_Front.png" role="presentation" />
				},
				{
				  cardImageBack: <img src="../Images/Team_Tinne_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../Images/Team_Tinne_Front.png" role="presentation" />
				},
				{
				  cardImageBack: <img src="../Images/Team_David_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../Images/Team_David_Front.png" role="presentation" />
				},
				{
				  cardImageBack: <img src="../Images/Team_Jenn_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../Images/Team_Jenn_Front.png" role="presentation" />
				},
				{ 
				  cardImageBack: <img src="../Images/Team_Ally_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../Images/Team_Ally_Front.png" role="presentation" />
				},
				{
				  cardImageBack: <img src="../Images/Team_Jason_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../Images/Team_Jason_Front.png" role="presentation" />
				},
			  	{ 
				  cardImageBack: <img src="../Images/Promos_Nerdburger_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../Images/Promos_Nerdburger_Front.png" role="presentation" />
				},
				{
				  cardImageBack: <img src="../Images/Promos_The_Meeple_Mechanic_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../Images/Promos_The_Meeple_Mechanic_Front.png" role="presentation" />
				},
				{
				  cardImageBack: <img src="../Images/Promos_VectoriaDesigns_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../Images/Promos_VectoriaDesigns_Front.png" role="presentation" />
				},
			  	{
				  cardImageBack: <img src="../Images/Promos_All_Us_Geeks_Back.png" role="presentation" />,  
				  cardImageFront: <img src="../Images/Promos_All_Us_Geeks_Front.png" role="presentation" />
			  	},
			  	{
				  cardImageBack: <img src="../Images/Promos_Andocon_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../Images/Promos_Andocon_Front.png" role="presentation" />
				},
				{
				  cardImageBack: <img src="../Images/Promos_Loose_Staples_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../Images/Promos_Loose_Staples_Front.png" role="presentation" />
				},
				{
				  cardImageBack: <img src="../Images/Promos_Borderless_Bliss_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../Images/Promos_Borderless_Bliss_Front.png" role="presentation" />
				}
			];
		
		//add if statement here that will add a div containing favorite/block buttons if user is logged in (from this.props.loginResponse.msg?)

		allSideEffectsPreComponent.map((individualCard, index) => {
			allSideEffects.push(		
				<Display card={individualCard} key={index} />
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
	sideEffectsResponse: state.SideEffects
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
	sideEffectsAction: SideEffectsAction
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SideEffects);