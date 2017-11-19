import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  border: '1px solid black',
  display: 'inline-block',
  width: '200px',
  borderRadius: '3px'
  // height: '30px',
  padding: '1px'
};

export default class ProgressBar extends React.Component {

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

    let blockerFooter = (
      <ul>
        <li onClick={() => this.activateMetaView(0)}>ALTERNATIVES</li>
        <li onClick={() => this.activateMetaView(1)}>OPTIONS</li>
        <li onClick={() => this.activateMetaView(2)}>HELP</li>
        <li onClick={() => this.activateMetaView(3)}>ABOUT</li>
        <li onClick={() => this.activateMetaView(4)}>DONATE</li>
      </ul>
    );

    let metaFooter = (
      <div id="btn-metaFooter-back" onClick={this.activateBlockerView}>&lt; BACK</div>
      // <RaisedButton label="BACK" primary={true} style={style} id="btn-metaFooter-back" onClick={this.activateBlockerView}/>
    );

    return (
      <div style={style}>
        <div style={{fontSize: '20px', width: this.props.percentage + '%', backgroundColor: 'black', borderRadius: '3px'}}>
          &nbsp;
          </div>
      </div>
    );
  }
}
