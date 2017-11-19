import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';

const style = {
  margin: 12,
};

export default class Footer extends React.Component {

  constructor(props) {
    super(props);

    this.activateMetaView = this.activateMetaView.bind(this);
    this.activateBlockerView = this.activateBlockerView.bind(this);

  }

  activateMetaView(viewMetaSlideIndex) {
    console.log(this.props);
    this.props.activateMetaView(viewMetaSlideIndex);
  }

  activateBlockerView() {
    console.log(this.props);
    this.props.activateBlockerView();
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
      <footer>
        {this.props.view === 'blocker' && blockerFooter}
        {this.props.view === 'meta' && metaFooter}
      </footer>
    );
  }
}
