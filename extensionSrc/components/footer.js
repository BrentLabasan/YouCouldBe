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

    let btnStyle = {color: 'yellow', fontWeight: '900'};

    return (
      <footer>
        <ul>
          <li onClick={() => this.setView('alternatives')}><FlatButton label="ALTERNATIVES" style={btnStyle} /></li>
          <li onClick={() => this.setView('options')}><FlatButton label="OPTIONS" style={btnStyle} /></li>
          <li onClick={() => this.setView('help')}><FlatButton label="HELP" style={btnStyle} /></li>
          <li onClick={() => this.setView('about')}><FlatButton label="ABOUT" style={btnStyle} /></li>
          <li onClick={() => this.setView('donate')}><FlatButton label="DONATE" style={btnStyle} /></li>
        </ul>
      </footer>
    );
  }
}













