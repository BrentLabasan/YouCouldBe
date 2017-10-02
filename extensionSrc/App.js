import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import Timer from './Timer';
import Blocker from './views/blocker';
import Meta from './views/meta';

import Footer from './components/footer';
const URL = window.location.hostname;
const MULTIPLIER = 5;

var d = new Date();
let date = "" + d.getFullYear() + d.getMonth() + d.getDate();

class App extends Component {
  constructor() {
    super();

    this.activateMetaView = this.activateMetaView.bind(this);    

    console.log("App.js constructor()");

    this.state = {
      currentHostname: window.location.hostname,
      db: {
        [window.location.hostname]: {count:1, date: date}
      },
      view: 'blocker'
    };

  }

  componentDidMount() {

    // debugger;

    chrome.storage.sync.get(URL, (db) => {

      debugger;

      if (!db[URL]) {
        db[URL] = {};
      }

      // console.log("date " + date);
      if (!db[URL][date]) {
        db[URL][date] = true;
        db[URL]["count"] = null;
      }


      if (!db[URL]["count"]) {
        db[URL]["count"] = 0;
      }
      db[URL]["count"]++;

      chrome.storage.sync.set(db);

      this.setState({ db: db });

      debugger;
      console.log("App.js componentDidMount()");
      console.log(this.state.db);

    });


  }

  activateMetaView() {
    console.log("LMAO");
    this.setState({view: 'meta'});
  }

  render() {

    console.log("App.js render()");
    

    return (
      <MuiThemeProvider>
        <div id="ycb-container" className="App">
          {/* <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" /> */}
          {this.state.view === 'blocker' && <Blocker db={this.state.db} currentHostname={this.state.currentHostname} />}
          {this.state.view === 'meta' && <Meta db={this.state.db} currentHostname={this.state.currentHostname} />}

          {/* <Timer /> */}
          {/* <RaisedButton label="Default" /> */}

          <Footer  activateMetaView={this.activateMetaView} />
        </div>
      </MuiThemeProvider>
    );
  }
}

export default App;
