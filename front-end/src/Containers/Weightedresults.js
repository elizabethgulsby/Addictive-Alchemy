import React, {Component} from 'react';
import Card from './Card';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {hashHistory} from 'react-router';




var weightedArray = [];
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

class Weightedresults extends Component {
	constructor(props) {
		super(props);
		this.state = {
			weightedArray
		}
	}
	
	
	render(){
		responseFromDB.map((individualCard, index) => {
			weightedArray.push(		
				<Card card={individualCard} key={index} />	
			)
		})
		return(

				<div className="weighted-results-card">
					{weightedArray}
				</div>
			
		)
	}
}



function mapStateToProps(state) {
	return {
		// loginResponse: state.login
	}
}

function mapDispatchToProps(dispatch) {
	return bindActionCreators({
		// loginAction: LoginAction
	}, dispatch)
}

// export default connect(mapStateToProps, mapDispatchToProps)(Login);


export default Weightedresults;