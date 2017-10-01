import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Timer from './Timer';
import Blocker from './views/blocker';
const URL = window.location.hostname;
const MULTIPLIER = 5;

class App extends Component {
  constructor() {
    super();
    this.state = {
      view: 'blocker'
    };
  }

  render() {

    return (
      <MuiThemeProvider>
        <div id="#ycb-container" className="App">
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" />
          {this.state.view === 'blocker' && <Blocker/>}



          <Timer/>
          <RaisedButton label="Default" />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
