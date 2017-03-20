import React, {Component} from 'react';
import Display from './Display';

var allSideEffectsPreComponent = [
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

class SideEffects extends Component{
	
	render(){
	var allSideEffects = [];
	allSideEffectsPreComponent.map((individualCard, index) => {
		allSideEffects.push(<Display card={individualCard} key={index} />)
		})

		return(
			<div>
				{allSideEffects}
			</div>
		)
	}
}

export default SideEffects;