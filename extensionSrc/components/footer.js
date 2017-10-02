import React, { Component } from 'react';
import FlatButton from 'material-ui/FlatButton';

export default class Footer extends React.Component {
  constructor(props) {
    super(props);
  }

  setView(view) {
    alert(view);
  }

  render() {
    return (
      <footer id="ycb-blocker">
        <ul>
          <li onClick={() => this.setView('alternatives')}><FlatButton label="ALTERNATIVES" /></li>
          <li onClick={() => this.setView('options')}><FlatButton label="OPTIONS" /></li>
          <li onClick={() => this.setView('help')}><FlatButton label="HELP" /></li>
          <li onClick={() => this.setView('about')}><FlatButton label="ABOUT" /></li>
          <li onClick={() => this.setView('donate')}><FlatButton label="DONATE" /></li>
        </ul>
      </footer>
    );
  }
}













