import './index.css';
import ayy from './file1';
import lmao from './file2';
import helpers from './helpers';
import constants from './constants';
import viewBlocker from './view-blocker';
import viewOptions from './view-options';
import jsx from './jsx.jsx';
import jQuery from 'jQuery';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import numeral from 'numeral';

const courseValue = numeral(1000).format('$0,0.00');
debugger;
console.log(`I would pay ${courseValue} for this awesome course!`);

var elYcbParent = document.createElement("div");        
elYcbParent.id = "ycb-elYcbParent";
document.body.appendChild(elYcbParent); // attaches view-blocker to <body> 

jQuery( document ).ready(function() {
    // ReactDOM.hydrate(<App />, document.getElementById('ycb-elYcbParent'));
    ReactDOM.render(<App />, document.getElementsByTagName('body')[0]);    
    console.log( "ready!" );
});

