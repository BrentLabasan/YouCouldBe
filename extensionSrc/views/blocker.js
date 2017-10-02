import React, { Component } from 'react';
import CountdownTimer from '../components/countdownTimer';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';

const URL = window.location.hostname;
const multiplier = 5;

const style = {
  margin: 12,
};


export default class Blocker extends React.Component {
  constructor(props) {
    super(props);

    this.tick = this.tick.bind(this);
    this.handleProceedButtonClick = this.handleProceedButtonClick.bind(this);
    
    this.handleCountdownEnded = this.handleCountdownEnded.bind(this);
    this.state = {
      timer: this.props.db[URL].count * multiplier,
      hasCountdownEnded: false
    }
  }

  // https://stackoverflow.com/a/31615643/708355
  getGetOrdinal(n) {
    var s = ["th", "st", "nd", "rd"],
      v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  }

  handleCountdownEnded() {
    this.setState({hasCountdownEnded: true});
  }

  handleProceedButtonClick() {
    this.props.handleCountdownEnded();    
  }

  tick() {

    if (this.state.timer > 0) { // timer is still counting down
      this.setState((prevState) => ({
        timer: prevState.timer - 1
      }));
    }
  }

  render() {
    console.log("this.props.currentHostname " + this.props.currentHostname);
    console.log(this.props.db);

    return (
      <div id="ycb-blocker">
        <h1>You Could Be&trade;</h1>
        <span className="txtAlternative">CHECKING YOUR EMAIL</span>
        <h2>instead of wasting your life on {this.props.currentHostname} for the {this.getGetOrdinal(this.props.db[this.props.currentHostname].count)} time today.</h2>
        <h2>You'll be taken to {URL} in <CountdownTimer handleCountdownEnded={this.handleCountdownEnded} siteVisitCount={this.props.db[URL].count} /> seconds. In the meantime, do something productive, like cleaning your room!</h2>

        {/* <RaisedButton label="Proceed &gt;" primary={true} style={style} />
          <FlatButton label="Primary" primary={true} />
          <IconButton iconClassName="muidocs-icon-custom-github" /> */}

        {this.state.hasCountdownEnded && <button onClick={this.handleCountdownEnded} className="btn-proceed">PROCEED &gt;</button>}
      </div>
    );
  }
}