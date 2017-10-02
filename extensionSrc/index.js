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

const DEFAULT_WHITELIST = [
    'developer.chrome.com',
    'www.google.com',
    'gmail.com',
    'www.gamefaqs.com',
    'news.ycombinator.com',
    'github.com',
    'stackoverflow.com',
    'api.jquery.com',
    'www.material-ui.com',
    'www.w3schools.com',
    'developer.mozilla.org',
    'www.namecheap.com',
    'reactjs.org',
    'reactcheatsheet.com',
    
  ];

const courseValue = numeral(1000).format('$0,0.00');
debugger;
console.log(`I would pay ${courseValue} for this awesome course!`);

var div = document.createElement("div");        
div.id = "ycb-target";
document.body.appendChild(div);

if (!DEFAULT_WHITELIST.includes(window.location.hostname)) {
    jQuery( document ).ready(function() {
        // ReactDOM.render(<App />, document.getElementsByTagName('body')[0]);    
        ReactDOM.render(<App />, document.getElementById("ycb-target"));    
        
        console.log( "ready!" );
    });
}