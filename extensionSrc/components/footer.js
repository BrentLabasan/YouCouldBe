import React, { Component } from 'react';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  setView() {
    alert();
  }

  render() {
    return (
      <footer id="ycb-blocker">
        <ul>
          <li onClick={this.setView}>ALTERNATIVES</li>
          <li>OPTIONS</li>
          <li>HELP</li>
          <li>ABOUT</li>
          <li>DONATE</li>
        </ul>
      </footer>
    );
  }
}













