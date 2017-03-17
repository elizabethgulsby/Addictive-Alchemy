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
    this.handleSpeedChange = this.handleSpeedChange.bind(this)
    this.handleComplexityChange = this.handleComplexityChange.bind(this)
    this.handleSettings = this.handleSettings.bind(this)
    }
  // componentDidMount() {
  //   console.log("the props"+this.props)
  //   console.log("the state"+this.state)
  // }
 handleSettings = (event) =>{
    // console.log("Darn it")
    var speed_value =  this.state.speedValue;
    var complexity_value = this.state.complexityValue
    this.props.balancingAction({
      speed_value: speed_value,
      complexity_value: complexity_value
    })
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
      console.log(this.props)
           let { speedValue } = this.state
        let { complexityValue } = this.state
        // if(this.props.balancingResponse.FinalSideEffects.length === 0){
        //   console.log("wooooot");
        // }else
        //   var sideEffectsOutput = [];
        //   for (var i = 0; i < this.props.balancingResponse.FinalSideEffects.length; i++) {
        //   sideEffectsOutput.push(this.props.balancingResponse.FinalSideEffects[i]);
        //   }

        
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
                  <img onClick={this.handleSettings} src="/Images/DealWeightedSideEffects.png" />
                
              </div>
              <div className="results container text-center">
                <Weightedresults key="index" />
                {this.props.children}
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