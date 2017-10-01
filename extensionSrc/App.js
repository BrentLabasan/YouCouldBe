import React, { Component } from 'react';
import Timer from './Timer';
const URL = window.location.hostname;
const MULTIPLIER = 5;

class App extends Component {

  render() {

    return (
      <div id="Brent" className="App">
          <h1>To get started, edit <code>src/App.js</code> and save to reload.</h1>
          <Timer/>
      </div>
    );
  }
}

export default App;
