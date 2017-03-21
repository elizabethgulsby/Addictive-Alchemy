import React, { Component } from 'react';
import {Link} from 'react-router';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import 'react-rangeslider/lib/index.css';
import Slider from 'react-rangeslider';
import BalancingAction from '../Actions/BalancingAction.js';
import Weightedresults from './Weightedresults.js';


class Balancing extends Component {
	constructor(props) {
		super(props)
		this.state = {
		  	speedValue: 3,
		  	complexityValue: 3
		}
	this.handleSpeedChange = this.handleSpeedChange.bind(this);
	this.handleComplexityChange = this.handleComplexityChange.bind(this);
	this.handleSettings = this.handleSettings.bind(this);
	this.handleRandom = this.handleRandom.bind(this);
	}

	handleRandom = (event) => {
		//will hide slider if clicked, no values from slider sent to weighted-results route
		let speed_value = 0;
		let complexity_value = 0;
		this.props.balancingAction({
			speed_value: speed_value,
			complexity_value: complexity_value
		})

	}

	handleSettings = (event) =>{
		let speed_value =  this.state.speedValue;
		let complexity_value = this.state.complexityValue;
		this.props.balancingAction({
	  		speed_value: speed_value,
	  		complexity_value: complexity_value
		})
  	}
  
  	handleSpeedChange = (value) => {
		this.setState({
		 speedValue: value
	  	})
  	}

 	handleComplexityChange = (value) => {
		this.setState({
		complexityValue: value
		})
  	}  

	render() {
		let { speedValue } = this.state
		let { complexityValue } = this.state
		
		return (
			<div className="container text-large text-center">
					Weight Side Effects
				<div className="col-sm-8 col-sm-offset-2 balancing">
					<div className="col-sm-6 text-field text-left">
						Slower Game
					</div>
					<div className="text-right col-sm-6 text-field">
						Fast Game
					</div>
					<div className="col-sm-12 slider-one slider">  
						<Slider value={speedValue} orientation="horizontal" onChange={this.handleSpeedChange}
				  		min={1} max={5} step={1} />
					</div>
					<div className="col-sm-6 text-field text-left">
						Easy Game
					</div>
					<div className="text-right col-sm-6 text-field">
						Complex Game
					</div>
					<div className="col-sm-12 slider-two slider">
				  		<Slider value={complexityValue} orientation="horizontal" onChange={this.handleComplexityChange}
						min={1} max={5} step={1} />
					</div>
				</div>
			 	<div className="deal-weighted-effects row">
			 		<div className="text-left col-xs-6">
						<Link to="/weighted-results"><img onClick={this.handleSettings} src="/Images/DealWeightedSideEffects.png" /></Link>
					</div>
					<div className="col-xs-6 text-right">
						<Link to="/weighted-results"><img onClick={this.handleRandom} src="/Images/DealRandomSideEffects.png"/></Link>
					</div>
				</div>
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




export default connect(mapStateToProps, mapDispatchToProps)(Balancing);