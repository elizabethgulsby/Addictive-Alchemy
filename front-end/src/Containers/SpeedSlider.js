import React, { Component } from 'react';
import 'react-rangeslider/lib/index.css';
import Slider from 'react-rangeslider';

class SpeedSlider extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
        SpeedValue: 3
        }
    }

    handleOnChange = (value) => {
        this.setState({
            SpeedValue: value
        })
  }

    render() {
        let { SpeedValue } = this.state
        return (
            <Slider value={SpeedValue} orientation="horizontal" onChange={this.handleOnChange}
            min={1} max={5} step={1} />
        )
    }
}


module.exports = SpeedSlider;