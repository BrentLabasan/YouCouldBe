import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

import ProgressBar from './progressBar';

const style = {
  margin: 12,
};

export default class CountdownBar extends React.Component {

  constructor(props) {
    super(props);

    this.activateMetaView = this.activateMetaView.bind(this);
    this.activateBlockerView = this.activateBlockerView.bind(this);

    this.state = { timeRemaining: this.props.duration }

  }

  activateMetaView(viewMetaSlideIndex) {
    console.log(this.props);
    this.props.activateMetaView(viewMetaSlideIndex);
  }

  activateBlockerView() {
    console.log(this.props);
    this.props.activateBlockerView();
  }

  tick() {

    if (this.state.timeRemaining > 0) { // timer is still counting down
      this.setState((prevState) => ({
        timeRemaining: prevState.timeRemaining - 1
      }));

    }
  }

  componentDidMount() {
    this.interval = setInterval(() => this.tick(), 1000);
  }

  render() {
    let metaFooter = (
      <div id="btn-metaFooter-back" onClick={this.activateBlockerView}>&lt; BACK</div>
      // <RaisedButton label="BACK" primary={true} style={style} id="btn-metaFooter-back" onClick={this.activateBlockerView}/>
    );

    return (
      <div>
        { (this.state.timeRemaining / this.props.duration * 100 < 100)  && <ProgressBar percentage={this.state.timeRemaining / this.props.duration * 100} />}
        {parseInt(this.state.timeRemaining / 60).toFixed(0)} min {this.state.timeRemaining % 60} s
      </div>
    );
  }
}
