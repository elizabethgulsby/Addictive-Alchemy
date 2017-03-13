import React, { Component } from 'react';
import SpeedSlider from './SpeedSlider';
import ComplexitySlider from './ComplexitySlider';

import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {hashHistory} from 'react-router';








class Balancing extends Component {
	constructor(props, context) {
        super(props, context)
        this.state = {
        
        }
    }

    



  	render() {
		

		
	    	return (
	    		<div className="container">
            <div className="row col-sm-8 col-sm-offset-2">
                <div className="col-sm-6 ">Slower Game</div>
                <div className="text-right col-sm-6 ">Fast Game</div>
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
                  <Link to="weighted-results"><img src="/Images/DealWeightedSideEffects.png" /></Link>
              </div>

	    		</div>
			)
	    	
	}
}
function mapStateToProps(state) {
  return {
    
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    
  }, dispatch)
}
// console.log(currentArray)



export default Balancing;