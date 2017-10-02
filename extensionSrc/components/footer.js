import React from 'react';

export default class Footer extends React.Component {

  constructor(props) {
    super(props);

    this.activateMetaView = this.activateMetaView.bind(this);
    this.activateBlockerView = this.activateBlockerView.bind(this);
    
  }

  activateMetaView() {
    console.log(this.props);
    this.props.activateMetaView();
  }

  activateBlockerView() {
    console.log(this.props);
    this.props.activateBlockerView();
  }

  render() {

    let blockerFooter = (
      <ul>
      <li onClick={this.activateMetaView}>ALTERNATIVES</li>
      <li onClick={this.activateMetaView}>OPTIONS</li>
      <li onClick={this.activateMetaView}>HELP</li>
      <li onClick={this.activateMetaView}>ABOUT</li>
      <li onClick={this.activateMetaView}>DONATE</li>
    </ul>
    );

    let metaFooter = (
      <div onClick={this.activateBlockerView}>BACK</div>
    );

    return (
      <footer>
        {this.props.view === 'blocker' && blockerFooter}
        {this.props.view === 'meta' && metaFooter}
      </footer>
    );
  }
}