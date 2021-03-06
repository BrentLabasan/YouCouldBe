import React, { Component } from 'react';
import Alternative from '../components/alternative';
import CountdownTimer from '../components/countdownTimer';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import CountdownBar from '../components/countdownBar';
import CountdownBarAltActivity from '../components/countdownBarAltActivity';

import * as constants from '../constants';

const URL = window.location.hostname;
const multiplier = 5;

const style = {
  margin: 12,
};

const style2 = {
  textAlign: 'left',
};

const MULTIPLIER = 5;

let vcenter = {
  display: 'flex',
  alignItem: 'center',
  justifyContent: 'center'
};

export default class Blocker extends React.Component {
  constructor(props) {
    super(props);

    this.tick = this.tick.bind(this);
    this.handleProceedButtonClick = this.handleProceedButtonClick.bind(this);

    // this.handleCountdownEnded = this.handleCountdownEnded.bind(this);
    this.state = {
      timer: this.props.seconds,
      hasCountdownEnded: false,
      altActivitySeconds: constants.DEFAULT_ALTERNATIVE_ACTIVITIES[this.props.alternativeActivityIndex].lenSec
    }


  }

  genRndmAltActivityIndex() {
    return Math.floor(Math.random() * constants.DEFAULT_ALTERNATIVE_ACTIVITIES.length);
  }

  // https://stackoverflow.com/a/31615643/708355
  getGetOrdinal(n) {
    var s = ["th", "st", "nd", "rd"],
      v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
  }

  // handleCountdownEnded() {
  //   this.setState({hasCountdownEnded: true});
  // }

  handleProceedButtonClick() {
    this.props.handleCountdownEnded();
  }

  tick() {

    if (this.state.timer > 0) { // timer is still counting down
      this.setState((prevState) => ({
        timer: prevState.timer - 1
      }));
    } else {
      this.setState({ hasCountdownEnded: true });

      // DA FUQ why does clearInterval keep firing?!?!
      // if (!(typeof interval === 'undefined')) {
      // if (false) {
      //   clearInterval(interval);
      // }
    }

    if (this.state.altActivitySeconds > 0) { // timer is still counting down
      this.setState((prevState) => ({
        altActivitySeconds: prevState.altActivitySeconds - 1
      }));
    }





  }

  componentDidMount() {
    // console.log("WOW");
    // console.log(this.props.siteVisitCount);

    // chrome.storage.sync.get([URL, 'tickSoundEnabled'], (db) => {
    //   this.setState({
    //     timer: db[URL].count * multiplier,
    //     tickSoundEnabled: db.tickSoundEnabled
    //   });
    //   // console.log("countdownTimer.js componentDidMount()");
    // });

    var intervalId = setInterval(this.tick, 1000);
    // store intervalId in the state so it can be accessed later:
    this.setState({ intervalId: intervalId });

  }

  componentWillUnmount() {
    // use intervalId from the state to clear the interval
    clearInterval(this.state.intervalId);
  }

  render() {
    // console.log("this.props.currentHostname " + this.props.currentHostname);
    // console.log(this.props.db);
    // console.log("blocker render()");

    return (
      <div id="ycb-blocker">

        <table id="blockerTable" style={style2}>
          <tbody>

            <tr>
              <td>
                <h2>DO THIS</h2>
              </td>
              <td>
              </td>
            </tr>

            <tr>
              <td>
                <h2>&#8212;&gt; {constants.DEFAULT_ALTERNATIVE_ACTIVITIES[this.props.alternativeActivityIndex].name}</h2>
              </td>
              <td>
              {/* <CountdownBarAltActivity duration={constants.DEFAULT_ALTERNATIVE_ACTIVITIES[this.props.alternativeActivityIndex].lenSec} /> */}
              { constants.DEFAULT_ALTERNATIVE_ACTIVITIES[this.props.alternativeActivityIndex].lenSec < MULTIPLIER * localStorage.getItem('ycbCount') && <CountdownBar timeRemaining={this.state.altActivitySeconds} countdownAmountSecs={MULTIPLIER * localStorage.getItem('ycbCount')} /> }
              </td>
            </tr>

            <tr>
              <td>
                <h2>BEFORE VISITING</h2>
              </td>
              <td>
              </td>
            </tr>
            <tr>
              <td>
                <h2>
                  &#8212;&gt; {this.props.currentHostname}
                </h2>
              </td>
              <td>
              <CountdownBar timeRemaining={this.props.seconds} countdownAmountSecs={MULTIPLIER * localStorage.getItem('ycbCount')} />

              </td>
            </tr>



          </tbody>

        </table>

        {/* <span className="txtAlternative"><Alternative /></span>
        <h2>instead of wasting your life on {this.props.currentHostname} for the {this.getGetOrdinal(this.props.db[this.props.currentHostname].count)} time today.</h2>
        <h2>You'll be taken to {URL} in <CountdownTimer handleCountdownEnded={this.handleCountdownEnded} siteVisitCount={this.props.db[URL].count} /> seconds. In the meantime, do something productive, like cleaning your room!</h2> */}


        {/* <RaisedButton label="Proceed &gt;" primary={true} style={style} />
          <FlatButton label="Primary" primary={true} />
          <IconButton iconClassName="muidocs-icon-custom-github" /> */}

        {!this.props.isTimerRunning && <button onClick={this.handleProceedButtonClick} className="btn-proceed">PROCEED &gt;</button>}
      </div>
    );
  }
}
