import React, {Component} from 'react';
import Display from './Display';
import $ from 'jquery';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {hashHistory} from 'react-router';

var allSideEffects = [];
var allSideEffectsPreComponent = [
	{
    
    cardImageBack: <img src="../Images/Base_Chain_Lightning_Back.png" />,
    cardImageFront: <img src="../Images/Base_Chain_Lightning_Front.png" />
  	},
  	{
    
    cardImageBack: <img src="../Images/Base_Flask_of_Life_Back.png" />, 
    cardImageFront: <img src="../Images/Base_Flask_of_Life_Front.png" />
  	},
  	{
    
    cardImageBack: <img src="../Images/Base_Alchemists_Ice_Back.png" />, 
    cardImageFront: <img src="../Images/Base_Alchemists_Ice_Front.png" />
  	},
  	{
    
    cardImageBack: <img src="../Images/Base_Lightning_in_a_Bottle_Back.png" />, 
    cardImageFront: <img src="../Images/Base_Lightning_in_a_Bottle_Front.png" />
  	},
  	{
    
    cardImageBack: <img src="../Images/Base_Mercurial_Poisoning_Back.png" />, 
    cardImageFront: <img src="../Images/Base_Mercurial_Poisoning_Front.png" />
  	},
  	{
    
    cardImageBack: <img src="../Images/Base_Philosophers_Apex_Back.png" />, 
    cardImageFront: <img src="../Images/Base_Philosophers_Apex_Front.png" />
  	},
  	{
    
    cardImageBack: <img src="../Images/Star_Searing_Sign_Back.png" />, 
    cardImageFront: <img src="../Images/Star_Searing_Sign_Front.png" />
  	},
  	{
    
    cardImageBack: <img src="../Images/Star_Flask_of_Clarity_Back.png" />, 
    cardImageFront: <img src="../Images/Star_Flask_of_Clarity_Front.png" />
  	},
  	{
    
    cardImageBack: <img src="../Images/Star_Alchemists_Crescendo_Back.png" />, 
    cardImageFront: <img src="../Images/Star_Alchemists_Crescendo_Front.png" />
  	},{
    
    cardImageBack: <img src="../Images/Star_Aether_Spike_Back.png" />, 
    cardImageFront: <img src="../Images/Star_Aether_Spike_Front.png" />
  	},
  	{
    
    cardImageBack: <img src="../Images/Star_Vervain_Vortex_Back.png" />, 
    cardImageFront: <img src="../Images/Star_Vervain_Vortex_Front.png" />
  	},
  	{
    
    cardImageBack: <img src="../Images/Star_Philosophers_Divide_Back.png" />, 
    cardImageFront: <img src="../Images/Star_Philosophers_Divide_Front.png" />
  	},{
    
    cardImageBack: <img src="../Images/Aether_Aether_Fuse_Back.png" />, 
    cardImageFront: <img src="../Images/Aether_Aether_Fuse_Front.png" />
  	},
  	{
    
    cardImageBack: <img src="../Images/Aether_Crystalline_bezoar_Back.png" />, 
    cardImageFront: <img src="../Images/Aether_Crystalline_bezoar_Front.png" />
  	},
  	{
    
    cardImageBack: <img src="../Images/Aether_Aether_Well_Back.png" />, 
    cardImageFront: <img src="../Images/Aether_Aether_Well_Front.png" />
  	},
  	{
    
    cardImageBack: <img src="../Images/Aether_Entropic_Siphon_Back.png" />, 
    cardImageFront: <img src="../Images/Aether_Entropic_Siphon_Front.png" />
  	},
  	{
    
    cardImageBack: <img src="../Images/Aether_Ataxic_Fog_Back.png" />, 
    cardImageFront: <img src="../Images/Aether_Ataxic_Fog_Front.png" />
  	},
  	{
    
    cardImageBack: <img src="../Images/Aether_Vitalitas_Spike_Back.png" />, 
    cardImageFront: <img src="../Images/Aether_Vitalitas_Spike_Front.png" />
  	},
  	{
    
    cardImageBack: <img src="../Images/Team_Joachim_Back.png" />, 
    cardImageFront: <img src="../Images/Team_Joachim_Front.png" />
  	},
  	{
    
    cardImageBack: <img src="../Images/Team_Tinne_Back.png" />, 
    cardImageFront: <img src="../Images/Team_Tinne_Front.png" />
  	},
  	{
    
    cardImageBack: <img src="../Images/Team_David_Back.png" />, 
    cardImageFront: <img src="../Images/Team_David_Front.png" />
  	},
  	{
    
    cardImageBack: <img src="../Images/Team_Jenn_Back.png" />, 
    cardImageFront: <img src="../Images/Team_Jenn_Front.png" />
  	},
  	{
    
    cardImageBack: <img src="../Images/Team_Ally_Back.png" />, 
    cardImageFront: <img src="../Images/Team_Ally_Front.png" />
  	},
  	{
    
    cardImageBack: <img src="../Images/Team_Jason_Back.png" />, 
    cardImageFront: <img src="../Images/Team_Jason_Front.png" />
  	},{
    
    cardImageBack: <img src="../Images/Promos_Nerdburger_Back.png" />, 
    cardImageFront: <img src="../Images/Promos_Nerdburger_Front.png" />
  	},
  	{
    
    cardImageBack: <img src="../Images/Promos_The_Meeple_Mechanic_Back.png" />, 
    cardImageFront: <img src="../Images/Promos_The_Meeple_Mechanic_Front.png" />
  	},
  	{
    
    cardImageBack: <img src="../Images/Promos_VectoriaDesigns_Back.png" />, 
    cardImageFront: <img src="../Images/Promos_VectoriaDesigns_Front.png" />
  	},{
    
    cardImageBack: <img src="../Images/Promos_All_Us_Geeks_Back.png" />,  
    cardImageFront: <img src="../Images/Promos_All_Us_Geeks_Front.png" />
    },
    {
    cardImageBack: <img src="../Images/Promos_Andocon_Back.png" />, 
    cardImageFront: <img src="../Images/Promos_Andocon_Front.png" />
  	},
  	{
    
    cardImageBack: <img src="../Images/Promos_Loose_Staples_Back.png" />, 
    cardImageFront: <img src="../Images/Promos_Loose_Staples_Front.png" />
  	},
  	{
    
    cardImageBack: <img src="../Images/Promos_Borderless_Bliss.png" />, 
    cardImageFront: <img src="../Images/Promos_Unfortunate_Walls.png" />
  	}
];






class SideEffects extends Component{
	constructor(props) {
		super(props);
    this.state = {
      Flipped: "False"
    }
      // this.handleFlip = this.handleFlip.bind(this);
	}
  handleFlip = function() {
    this.setState({
      Flipped: "True"
    })
    console.log(this.state);
  }
	render(){

		allSideEffectsPreComponent.map((individualCard, index) => {
			allSideEffects.push(		
				<Display card={individualCard} key={index} onClick={this.handleFlip} />	
			)
		})

		return(
			<div className="container" >
      {allSideEffects}

			</div>
		)
	}
}

export default SideEffects;