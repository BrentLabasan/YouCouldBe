import React, { Component } from 'react';
import jQuery from 'jQuery';

const URL = window.location.hostname;
const multiplier = 5;
var audio = new Audio();
var audioTimerStarted = new Audio();
var audioTimerEnded = new Audio();

// var audio, audioTimerStarted, audioTimerEnded = new Audio();

export default class CountdownTimer extends React.Component {
  constructor(props) {
    super(props);

    this.tick = this.tick.bind(this);
    // this.handleCountdownEnded = this.handleCountdownEnded.bind(this);

    // console.log("CountdownTimer");
    // console.log(this.props);

    audioTimerStarted.src = chrome.runtime.getURL('/extensionSrc/audio/bluedistortion/alert-01.wav');
    audioTimerStarted.play();

    this.state = {
      seconds: props.siteVisitCount,
      isTimerRunning: true,
      tickSoundEnabled: false
    };
  }

  // handleCountdownEnded() {
  //   this.props.handleCountdownEnded();
  // }

  tick() {

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
        this.setState({isTimerRunning: false});
      }
      // this.handleCountdownEnded();
      // jQuery("#ycb-target").hide();
    }
  }

  componentDidMount() {
    // console.log("WOW");
    // console.log(this.props.siteVisitCount);

    // chrome.storage.sync.get([URL, 'tickSoundEnabled'], (db) => {
    //   this.setState({
    //     seconds: db[URL].count * multiplier ,
    //     tickSoundEnabled: db.tickSoundEnabled
    //   });
    //   // console.log("countdownTimer.js componentDidMount()");
    // });

    this.interval = setInterval(() => this.tick(), 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {

    return (
      <span id="ycb-countdownTimer">
        {/* {this.props.siteVisitCount} <br /> */}
        {this.state.seconds}
      </span>
    );
  }
}
