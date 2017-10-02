import React from 'react';

export default class Footer extends React.Component {

  constructor(props) {
    super(props);

    this.activateMetaView = this.activateMetaView.bind(this);
  }

  activateMetaView() {
    console.log(this.props);
    this.props.activateMetaView();
  }

  render() {
    return (
      <footer>
        <ul>
          <li onClick={this.activateMetaView}>ALTERNATIVES</li>
          <li onClick={this.activateMetaView}>OPTIONS</li>
          <li onClick={this.activateMetaView}>HELP</li>
          <li onClick={this.activateMetaView}>ABOUT</li>
          <li onClick={this.activateMetaView}>DONATE</li>
        </ul>
      </footer>
    );
  }
}