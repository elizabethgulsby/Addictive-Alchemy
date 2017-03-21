import React, {Component} from 'react';
import Card from './Card';

var responseFromDB = [
  {
	cardImageFront: <img src="../Images/Base_Chain_Lightning_Front.png" />,
	cardImageBack: <img src="../Images/Base_Chain_Lightning_Back.png" />
  },
  {
	cardImageFront: <img src="../Images/Base_Chain_Lightning_Front.png" />,
	cardImageBack: <img src="../Images/Base_Chain_Lightning_Back.png" />
  },
  {
	cardImageFront: <img src="../Images/Base_Chain_Lightning_Front.png" />,
	cardImageBack: <img src="../Images/Base_Chain_Lightning_Back.png" />
  },
  {
	cardImageFront: <img src="../Images/Base_Chain_Lightning_Front.png" />,
	cardImageBack: <img src="../Images/Base_Chain_Lightning_Back.png" />
  },
  {
	cardImageFront: <img src="../Images/Base_Chain_Lightning_Front.png" />,
	cardImageBack: <img src="../Images/Base_Chain_Lightning_Back.png" />
  },
  {
	cardImageFront: <img src="../Images/Base_Chain_Lightning_Front.png" />,
	cardImageBack: <img src="../Images/Base_Chain_Lightning_Back.png" />
  }

]

class Random extends Component {
	constructor(props) {
		super(props)
	}

	render(){
		var randomArray = [];
		responseFromDB.map((individualCard, index) => {
			randomArray.push(		
				<Card card={individualCard} key={index} />	
			)
		})

		return (
			<div>	
				{randomArray}
			</div>
		)
	}
}

export default Random;