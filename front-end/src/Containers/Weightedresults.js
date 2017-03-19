import React, {Component} from 'react';
import Card from './Card';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {hashHistory} from 'react-router';
import BalancingAction from '../Actions/BalancingAction.js'



class Weightedresults extends Component {

  constructor(props) {
    super(props)
    this.state = {

    }
  }
  
  
  render(){
var weightedArray = [];
var responsefromDB = [];

    // console.log("props!");
    // console.log(this.props.balancingResponse);

    //Before the side effects are dealt this if statement is skipped to avoid undefined errors.
    if (this.props.balancingResponse.FinalSideEffects != null) {

      // alert("hi" + this.props.balancingResponse.FinalSideEffects[0]);
    // }

       responsefromDB = [
       {
         
         cardImageBack: <img role="presentation" src={"../Images/" + this.props.balancingResponse.FinalSideEffects[0] + "_Back.png"} />,
         cardImageFront: <img role="presentation" src={"../Images/" + this.props.balancingResponse.FinalSideEffects[0] + "_Front.png"} />
       },
       {
         
         cardImageBack: <img role="presentation" src={"../Images/" + this.props.balancingResponse.FinalSideEffects[1] + "_Back.png"} /> ,
         cardImageFront: <img role="presentation" src={"../Images/" + this.props.balancingResponse.FinalSideEffects[1] + "_Front.png"} />
       },
       {
         
         cardImageBack: <img role="presentation" src={"../Images/" + this.props.balancingResponse.FinalSideEffects[2] + "_Back.png"} /> ,
         cardImageFront: <img role="presentation" src={"../Images/" + this.props.balancingResponse.FinalSideEffects[2] + "_Front.png"} />
       },
       {
         
         cardImageBack: <img role="presentation" src={"../Images/" + this.props.balancingResponse.FinalSideEffects[3] + "_Back.png"} /> ,
         cardImageFront: <img role="presentation" src={"../Images/" + this.props.balancingResponse.FinalSideEffects[3] + "_Front.png"} />
       },
       {
         
         cardImageBack: <img role="presentation" src={"../Images/" + this.props.balancingResponse.FinalSideEffects[4] + "_Back.png"} /> ,
         cardImageFront: <img role="presentation" src={"../Images/" + this.props.balancingResponse.FinalSideEffects[4] + "_Front.png"} />
       },
       {
         
         cardImageBack: <img role="presentation" src={"../Images/" + this.props.balancingResponse.FinalSideEffects[5] + "_Back.png"} /> ,
         cardImageFront: <img role="presentation" src={"../Images/" + this.props.balancingResponse.FinalSideEffects[5] + "_Front.png"} />
       }

      ];



  		responsefromDB.map((individualCard, index) => {
  			weightedArray.push(        
  				<Card card={individualCard} key={index} />    
  			)


  		})

    }
    

		return (
		

				<div className="container text-center">
					{weightedArray}
				</div>
			
		)
	}

}

function mapStateToProps(state) {
  return {
    balancingResponse: state.balancing
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    balancingAction: BalancingAction
  }, dispatch)
}



export default connect(mapStateToProps, mapDispatchToProps)(Weightedresults);