import React, { Component } from 'react';

export default class Blocker extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="ycb-blocker">
          <h1>You Could Be&trade;</h1>
          <span className="txtAlternative">CHECKING YOUR EMAIL</span>
          <h2>instead of wasting your life on {this.props.currentHostname}</h2>
      </div>
    );
  }
}













