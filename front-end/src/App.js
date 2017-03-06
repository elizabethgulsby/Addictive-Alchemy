import React, { Component } from 'react';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
      Main app Component renders here, all thigs are a child of app
      {this.props.children}
      </div>
    );
  }
}

export default App;
