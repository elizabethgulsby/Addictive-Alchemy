import React, { Component } from 'react';
import Display from './Display';


class SideEffects extends Component{
	constructor(props) {
		super(props);
		this.state = {

		}

	}

  
	render(){


		var allSideEffects = [];
		var allSideEffectsPreComponent = [];
		// console.log("render() this.props.sideEffectsResponse");
		// console.log(this.props.sideEffectsResponse);

			allSideEffectsPreComponent = [
  				{
				  cardImageBack: <img src="../images/Base_Chain_Lightning_Back.png" role="presentation" />,
				  cardImageFront: <img src="../images/Base_Chain_Lightning_Front.png" role="presentation" />
				},
				{ 
				  cardImageBack: <img src="../images/Base_Flask_of_Life_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../images/Base_Flask_of_Life_Front.png" role="presentation" />
				},
				{ 
				  cardImageBack: <img src="../images/Base_Alchemists_Ice_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../images/Base_Alchemists_Ice_Front.png" role="presentation" />
				},
				{
				  cardImageBack: <img src="../images/Base_Lightning_in_a_Bottle_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../images/Base_Lightning_in_a_Bottle_Front.png" role="presentation" />
				},
				{ 
				  cardImageBack: <img src="../images/Base_Mercurial_Poisoning_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../images/Base_Mercurial_Poisoning_Front.png" role="presentation" />
				},
				{
				  cardImageBack: <img src="../images/Base_Philosophers_Apex_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../images/Base_Philosophers_Apex_Front.png" role="presentation" />
				},
				{
				  cardImageBack: <img src="../images/Star_Searing_Sign_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../images/Star_Searing_Sign_Front.png" role="presentation" />
				},
				{
				  cardImageBack: <img src="../images/Star_Flask_of_Clarity_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../images/Star_Flask_of_Clarity_Front.png" role="presentation" />
				},
				{
				  cardImageBack: <img src="../images/Star_Alchemists_Crescendo_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../images/Star_Alchemists_Crescendo_Front.png" role="presentation" />
				},{
				  cardImageBack: <img src="../images/Star_Aether_Spike_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../images/Star_Aether_Spike_Front.png" role="presentation" />
				},
				{
				  cardImageBack: <img src="../images/Star_Vervain_Vortex_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../images/Star_Vervain_Vortex_Front.png" role="presentation" />
				},
				{
				  cardImageBack: <img src="../images/Star_Philosophers_Divide_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../images/Star_Philosophers_Divide_Front.png" role="presentation" />
				},{
				  cardImageBack: <img src="../images/Aether_Aether_Fuse_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../images/Aether_Aether_Fuse_Front.png" role="presentation" />
				},
				{
				  cardImageBack: <img src="../images/Aether_Crystalline_bezoar_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../images/Aether_Crystalline_bezoar_Front.png" role="presentation" />
				},
				{
				  cardImageBack: <img src="../images/Aether_Aether_Well_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../images/Aether_Aether_Well_Front.png" role="presentation" />
				},
				{
				  cardImageBack: <img src="../images/Aether_Entropic_Siphon_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../images/Aether_Entropic_Siphon_Front.png" role="presentation" />
				},
				{
				  cardImageBack: <img src="../images/Aether_Ataxic_Fog_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../images/Aether_Ataxic_Fog_Front.png" role="presentation" />
				},
				{
				  cardImageBack: <img src="../images/Aether_Vitalitas_Spike_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../images/Aether_Vitalitas_Spike_Front.png" role="presentation" />
				},
				{
				  cardImageBack: <img src="../images/Team_Joachim_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../images/Team_Joachim_Front.png" role="presentation" />
				},
				{
				  cardImageBack: <img src="../images/Team_Tinne_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../images/Team_Tinne_Front.png" role="presentation" />
				},
				{
				  cardImageBack: <img src="../images/Team_David_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../images/Team_David_Front.png" role="presentation" />
				},
				{
				  cardImageBack: <img src="../images/Team_Jenn_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../images/Team_Jenn_Front.png" role="presentation" />
				},
				{ 
				  cardImageBack: <img src="../images/Team_Ally_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../images/Team_Ally_Front.png" role="presentation" />
				},
				{
				  cardImageBack: <img src="../images/Team_Jason_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../images/Team_Jason_Front.png" role="presentation" />
				},
			  	{ 
				  cardImageBack: <img src="../images/Promos_Nerdburger_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../images/Promos_Nerdburger_Front.png" role="presentation" />
				},
				{
				  cardImageBack: <img src="../images/Promos_The_Meeple_Mechanic_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../images/Promos_The_Meeple_Mechanic_Front.png" role="presentation" />
				},
				{
				  cardImageBack: <img src="../images/Promos_VectoriaDesigns_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../images/Promos_VectoriaDesigns_Front.png" role="presentation" />
				},
			  	{
				  cardImageBack: <img src="../images/Promos_All_Us_Geeks_Back.png" role="presentation" />,  
				  cardImageFront: <img src="../images/Promos_All_Us_Geeks_Front.png" role="presentation" />
			  	},
			  	{
				  cardImageBack: <img src="../images/Promos_Andocon_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../images/Promos_Andocon_Front.png" role="presentation" />
				},
				{
				  cardImageBack: <img src="../images/Promos_Loose_Staples_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../images/Promos_Loose_Staples_Front.png" role="presentation" />
				},
				{
				  cardImageBack: <img src="../images/Promos_Borderless_Bliss_Back.png" role="presentation" />, 
				  cardImageFront: <img src="../images/Promos_Borderless_Bliss_Front.png" role="presentation" />
				}
			];
		

			allSideEffectsPreComponent.map((individualCard, index) => {
				allSideEffects.push(
					<div>		
						<Display card={individualCard} cardNumber={index + 1} key={index} />
					</div>
				)
			})


		return(
			<div className="container">
	  			{allSideEffects}
			</div>
		)
	}
}

export default SideEffects;