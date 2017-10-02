import React from 'react';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views'; // From https://github.com/oliviertassinari/react-swipeable-views
import Toggle from 'material-ui/Toggle';


const styles = {
  headline: {
    fontSize: 24,
    paddingTop: 16,
    marginBottom: 12,
    fontWeight: 400,
  },
  slide: {
    padding: 10,
  },
};

const labelStyle2 = {
  color: 'white',
  fontSize: '25px'
};

const styles2 = {
  block: {
    maxWidth: 250,
  },
  toggle: {
    marginBottom: 16,
  },
  thumbOff: {
    backgroundColor: '#ffcccc',
  },
  trackOff: {
    backgroundColor: '#ff9d9d',
  },
  thumbSwitched: {
    backgroundColor: 'red',
  },
  trackSwitched: {
    backgroundColor: '#ff9d9d',
  },
  labelStyle: {
    color: 'red',
  },
};

export default class TabsExampleSwipeable extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0,
      tickSoundEnabled: false
    };

    this.handleCountdownTickSound = this.handleCountdownTickSound.bind(this);

  }

  componentDidMount() {
    
        // debugger;
    
        chrome.storage.sync.get('tickSoundEnabled', (db) => {
        
          if (typeof db.tickSoundEnabled === "undefined") {
            db.tickSoundEnabled = true;
          } 
          chrome.storage.sync.set(db); 
          this.setState({ tickSoundEnabled: db.tickSoundEnabled });
    
          console.log("App.js componentDidMount()");
          console.log(this.state.db);
        });
      }

  handleChange = (value) => {
    this.setState({
      slideIndex: value,
    });
  };

  handleCountdownTickSound() {
    // alert("handleCountdownTickSound()");
    chrome.storage.sync.set({ 'tickSoundEnabled': !this.state.tickSoundEnabled })
    this.setState({tickSoundEnabled: !this.state.tickSoundEnabled })
  }

  render() {
    return (
      <div id="ycb-meta">
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="ALTERNATIVES" value={0} />
          <Tab label="OPTIONS" value={1} />
          <Tab label="HELP" value={2} />
          <Tab label="ABOUT" value={3} />
          <Tab label="DONATE" value={4} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            <h2>ALTERNATIVES</h2>
            <h3>Social Networks</h3>
            <h3>Pornography</h3>
            <h3>Link Aggregators</h3>
            <h3>Media</h3>
          </div>
          <div id="view-meta-options">
            <div id="view-meta-options-container">
              <h2>OPTIONS</h2>
              <h3>SOUND</h3>
              <h4></h4>
              <Toggle
                label="Ticking sound on countdown"
                labelStyle={labelStyle2}
                style={styles2.toggle}
                toggled={this.state.tickSoundEnabled}
                onToggle={this.handleCountdownTickSound}
              />
              <Toggle
                label="Countdown start sound effect"
                labelStyle={labelStyle2}
                style={styles2.toggle}
              />
              <Toggle
                label="Countdown end sound effect?"
                labelStyle={labelStyle2}
                style={styles2.toggle}
              />
            </div>
          </div>
          <div>
            <h2>HELP</h2>
          </div>
          <div>
            <h2>ABOUT</h2>
            <h3>You Could Be is a Chrome extension by Brent Labasan.</h3>
          </div>
          <div>
            <h2>DONATE</h2>
            <h3>BitCoin Core
                            <br />
              1EsTtyv6fNPynPooSiFrBFBoSQAxi3GdYu
                        </h3>
            <img src={chrome.runtime.getURL('extensionSrc/images/Bitcoin-QR-code.png')} alt="Bitcoin QR code for donating Bitcoin to the developer of You Could Be" />
          </div>
        </SwipeableViews>
      </div>
    );
  }
}
