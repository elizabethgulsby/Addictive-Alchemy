import React, { Component } from 'react';
import 'react-rangeslider/lib/index.css';
import Slider from 'react-rangeslider';

class ComplexitySlider extends Component {
    constructor(props, context) {
        super(props, context)
        this.state = {
        ComplexityValue: 3
        }
    }

    handleOnChange = (value) => {
        this.setState({
            ComplexityValue: value
        })
  }

    render() {
        let { ComplexityValue } = this.state
        return (
            <Slider value={ComplexityValue} orientation="vertical" onChange={this.handleOnChange}
            min={1} max={5} step={1} />
        )
    }
}


module.exports = ComplexitySlider;