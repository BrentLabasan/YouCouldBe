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

const hostname = window.location.hostname;
const MULTIPLIER = 5;

var d = new Date();
let date = "" + d.getFullYear() + d.getMonth() + d.getDate();

var audio = new Audio();
var audioTimerStarted = new Audio();
var audioTimerEnded = new Audio();

const DEFAULT_ALTERNATIVE_ACTIVITIES = [

    { name: "practice singing", lenMin: 5, tags: [''] },

    { name: "wash the dishes", lenMin: 5, tags: ['chore'] },
    { name: "take the trash out", lenMin: 3, tags: ['chore'] },

    { name: "walk around the block", lenMin: 5, tags: ['exercise'] },

    { name: "standing pike", lenMin: 1, tags: ['stretch'] },

    { name: "meditate", lenMin: 5, tags: ['mental health'] },

    { name: "call your mom", lenMin: 5, tags: ['family'] }
  ];

class App extends Component {
  constructor() {
    super();

    this.activateMetaView = this.activateMetaView.bind(this);
    this.activateBlockerView = this.activateBlockerView.bind(this);
    this.setYcbContainerVisible = this.setYcbContainerVisible.bind(this);
    this.tick = this.tick.bind(this);

    // console.log("App.js constructor()");

    if (!localStorage.getItem('ycbCount')) {
      localStorage.setItem('ycbCount', 1);
    }

    this.state = {
      db: {
        [window.location.hostname]: { count: 0, date: date }
      },

      view: 'blocker',
      isYcbContainerVisible: true,
      viewMetaSlideIndex: 0,
      seconds: MULTIPLIER * localStorage.getItem('ycbCount'),
      tickSoundEnabled: false,

      timer: 1 * MULTIPLIER,
      hasCountdownEnded: false,
      alternativeActivityIndex: Math.floor(Math.random() * DEFAULT_ALTERNATIVE_ACTIVITIES.length)

    };
  }

  componentDidMount() {
    localStorage.setItem('ycbCount', parseInt(localStorage.getItem('ycbCount')) + 1);

    chrome.storage.sync.get(hostname, (db) => {

      if (!db[hostname]) {
        db[hostname] = {};
      }

      if (!db[hostname][date]) {
        db[hostname][date] = true;
        db[hostname]["count"] = null;
      }

      if (!db[hostname]["count"]) {
        db[hostname]["count"] = 0;
      }
      db[hostname]["count"]++;

      this.setState({ db: db });

      // console.log("App.js componentDidMount()");
      // console.log(this.state.db);

      // chrome.storage.sync.get([hostname, 'tickSoundEnabled'], (db) => {
      //   this.setState({
      //     timer: db[URL].count * MULTIPLIER,
      //     tickSoundEnabled: db.tickSoundEnabled
      //   });
      //   // console.log("countdownTimer.js componentDidMount()");
      // });

    });



    var intervalId = setInterval(this.tick, 1000);
    // store intervalId in the state so it can be accessed later:
    this.setState({ intervalId: intervalId });
  }

  tick() {
    // console.log("tick() App.js");

    // chrome.storage.sync.get(hostname, (db) => {
    //   this.setState({seconds: })
    // }

    if (this.state.seconds > 0) { // timer is still counting down
      this.setState((prevState) => ({
        seconds: prevState.seconds - 1
      }));
      if (this.state.tickSoundEnabled) {
        audio.src = chrome.runtime.getURL('tick.mp3');
        audio.play();
      }

    } else { // countdown has ended
      if (this.state.isTimerRunning) {
        audioTimerEnded.src = chrome.runtime.getURL('/extensionSrc/audio/bluedistortion/alert-06.wav');
        audioTimerEnded.play();
        this.setState({ isTimerRunning: false });
      }
      // this.handleCountdownEnded();
      // jQuery("#ycb-target").hide();
    }
  }

  activateMetaView(viewMetaSlideIndex) {
    this.setState({
      view: 'meta',
      viewMetaSlideIndex: viewMetaSlideIndex
    });
  }

  activateBlockerView() {
    this.setState({ view: 'blocker' });
  }

  setYcbContainerVisible() {
    this.setState({ isYcbContainerVisible: false });
    jQuery("#ycb-target").hide();
  }

  render() {
    // console.log("App.js render()");
    // console.log(this.state.isYcbContainerVisible);

    return (
      <MuiThemeProvider>

        {/* <RaisedButton label="Proceed &gt;" primary={true} style={style} />
        <FlatButton label="Primary" primary={true} />
        <IconButton iconClassName="muidocs-icon-custom-github" /> */}

        {this.state.isYcbContainerVisible && (<div id="ycb-container" className="App">
          <link href="https://fonts.googleapis.com/css?family=Roboto:300,400,500" rel="stylesheet" />
          {this.state.view === 'blocker' && <Blocker isTimerRunning={this.state.seconds > 0} seconds={this.state.seconds} db={this.state.db} currentHostname={hostname} handleCountdownEnded={this.setYcbContainerVisible} />}
          {this.state.view === 'meta' && <Meta db={this.state.db} currentHostname={hostname} viewMetaSlideIndex={this.state.viewMetaSlideIndex} />}

          {/* <Timer /> */}
          {/* <RaisedButton label="Default" /> */}

          {this.state.seconds} NEW SECONDS

          <Footer view={this.state.view} activateMetaView={this.activateMetaView} activateBlockerView={this.activateBlockerView} />
        </div>)}
      </MuiThemeProvider>
    );
  }
}

export default App;
