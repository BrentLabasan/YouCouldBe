import React, { Component } from 'react';
import jQuery from 'jQuery';

const URL = window.location.hostname;
const multiplier = 5;
var audio = new Audio();

export default class CountdownTimer extends React.Component {
  constructor(props) {
    super(props);

    this.tick = this.tick.bind(this);
    this.handleCountdownEnded = this.handleCountdownEnded.bind(this);    
    
    console.log("CountdownTimer");
    console.log(this.props);
    this.state = {
      seconds: props.siteVisitCount
    };
  }

  handleCountdownEnded() {
    this.props.handleCountdownEnded();
  }

  tick() {
    if (this.state.seconds > 0) {
      this.setState((prevState) => ({
        seconds: prevState.seconds - 1
      }));

      audio.src = chrome.extension.getURL('tick.mp3');
      audio.play();
    } else {
      this.handleCountdownEnded();
      jQuery("#ycb-target").hide();
    }
  }

  componentDidMount() {
    console.log("WOW");
    console.log(this.props.siteVisitCount);


    chrome.storage.sync.get(URL, (db) => {

      this.setState({ seconds: db[URL].count * multiplier });

      debugger;
      console.log("countdownTimer.js componentDidMount()");
    });

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