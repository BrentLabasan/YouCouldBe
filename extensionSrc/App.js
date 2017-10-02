import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import jQuery from 'jQuery';
import Timer from './Timer';
import Blocker from './views/blocker';
import Meta from './views/meta';

import Footer from './components/footer';


import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';

const style = {
  margin: 12,
};

const URL = window.location.hostname;
const MULTIPLIER = 5;

var d = new Date();
let date = "" + d.getFullYear() + d.getMonth() + d.getDate();

class App extends Component {
  constructor() {
    super();

    this.activateMetaView = this.activateMetaView.bind(this);
    this.activateBlockerView = this.activateBlockerView.bind(this);
    this.setYcbContainerVisible = this.setYcbContainerVisible.bind(this);

    console.log("App.js constructor()");

    this.state = {
      currentHostname: window.location.hostname,
      db: {
        [window.location.hostname]: { count: 0, date: date }
      },
      view: 'blocker',
      isYcbContainerVisible: true
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
    this.setState({ view: 'meta' });
  }

  activateBlockerView() {
    this.setState({ view: 'blocker' });
  }

  setYcbContainerVisible() {
    this.setState({ isYcbContainerVisible: false });
    jQuery("#ycb-target").hide();
  }

  render() {
    console.log("App.js render()");
    console.log(this.state.isYcbContainerVisible);

    return (
      <MuiThemeProvider>

        {/* <RaisedButton label="Proceed &gt;" primary={true} style={style} />
        <FlatButton label="Primary" primary={true} />
        <IconButton iconClassName="muidocs-icon-custom-github" /> */}

        {this.state.isYcbContainerVisible && (<div id="ycb-container" className="App">
          {/* <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" /> */}
          {this.state.view === 'blocker' && <Blocker db={this.state.db} currentHostname={this.state.currentHostname} handleCountdownEnded={this.setYcbContainerVisible} />}
          {this.state.view === 'meta' && <Meta db={this.state.db} currentHostname={this.state.currentHostname} />}

          {/* <Timer /> */}
          {/* <RaisedButton label="Default" /> */}

          <Footer view={this.state.view} activateMetaView={this.activateMetaView} activateBlockerView={this.activateBlockerView} />
        </div>)}
      </MuiThemeProvider>
    );
  }
}

export default App;
