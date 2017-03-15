import React, { Component } from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import 'react-rangeslider/lib/index.css';
import Slider from 'react-rangeslider';







class Balancing extends Component {
	constructor(props) {
        super(props)
        this.state = {
          speedValue: 3,
          complexityValue: 3
        }
    this.handleSpeedChange = this.handleSpeedChange.bind(this)
    this.handleComplexityChange = this.handleComplexityChange.bind(this)
    }
  handleSettings = (event) =>{

    console.log("Darn it")
  }
  
  handleSpeedChange = (value) => {
    this.setState({
        speedValue: value
    })
    // console.log(this.state.speedValue);
  }

  handleComplexityChange = (value) => {
    this.setState({
        complexityValue: value
    })
    // console.log(this.state.complexityValue);
  }  



  	render() {
		   let { speedValue } = this.state
        let { complexityValue } = this.state

		
	    	return (
	    		<div className="container">
            <div className="row col-sm-8 col-sm-offset-2">
                <div className="col-sm-6 ">Slower Game</div>
                <div className="text-right col-sm-6 ">Fast Game</div>
                <div className="col-sm-12 slider">  
                 <Slider value={speedValue} orientation="horizontal" onChange={this.handleSpeedChange}
                  min={1} max={5} step={1} />
                </div>
                <div className="col-sm-6">Easy Game</div>
                <div className="text-right col-sm-6">Complex Game</div>
                <div className="col-sm-12 slider">
                  <Slider value={complexityValue} orientation="horizontal" onChange={this.handleComplexityChange}
                    min={1} max={5} step={1} />
                </div>
  				  </div>
              <div className="deal-weighted-effects text-center">
                  <Link to="weighted-results" onClick={this.handleSettings}><img src="/Images/DealWeightedSideEffects.png" /></Link>
                 
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