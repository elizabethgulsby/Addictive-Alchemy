import React, { Component } from 'react';
import { Link } from 'react-router';

import './App.css';



class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="Home">
          <div className="container">
            <div className="logo">
              <Link to="/"><img src="/Images/Mix_C14004_Logo_Game_words.png" /></Link>
            </div>
            <div className="workbench">
              Side Effects <br />Workbench
            </div>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}

export default App;
