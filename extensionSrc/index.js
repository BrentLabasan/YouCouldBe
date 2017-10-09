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
    'mail.google.com',
    'docs.google.com',
    'play.google.com',
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
    'genius.com',
    'chrome',
    'clients.mindbodyonline.com',
    'www.dropbox.com',
    'www.messenger.com',

    'www.cybercoders.com',
    'indeed.com',
    'jobs.stackoverflow.com',

    'www.hiphopdx.com',
    'www.complex.com',

    'www.typescriptlang.org'
  ];

  const DEFAULT_WHITELIST2 = [
    {url: 'developer.chrome.com'},
    {url: 'www.google.com'},
    {url: 'gmail.com'},
    {url: 'mail.google.com'},
    {url: 'docs.google.com'},
    {url: 'play.google.com'},
    {url: 'www.gamefaqs.com'},
    {url: 'news.ycombinator.com'},
    {url: 'github.com'},
    {url: 'stackoverflow.com'},
    {url: 'api.jquery.com'},
    {url: 'www.material-ui.com'},
    {url: 'www.w3schools.com'},
    {url: 'developer.mozilla.org'},
    {url: 'www.namecheap.com'},
    {url: 'reactjs.org',
    {url: 'reactcheatsheet.com'},
    {url: 'genius.com'},
    {url: 'chrome'},
    {url: 'clients.mindbodyonline.com'},
    {url: 'www.dropbox.com'},
    {url: 'www.messenger.com'},

    {url: 'www.cybercoders.com'},
    {url: 'indeed.com'},
    {url: 'jobs.stackoverflow.com'},

    {url: 'www.hiphopdx.com'},
    {url: 'www.complex.com'},

    {url: 'www.typescriptlang.org'}
  ];

  const DEFAULT_BLACKLIST = [
    {url: 'www.facebook.com', weight: 5}
  ];

const courseValue = numeral(1000).format('$0,0.00');
// debugger;
console.log(`MEOW I would pay ${url: courseValue} for this awesome course! LOL`);

jQuery( document ).ready(function() {url: 
    if (!DEFAULT_WHITELIST.includes(window.location.hostname)) {url: 
        
            var div = document.createElement("div");        
            div.id = "ycb-target";
            document.body.appendChild(div);
        

                // ReactDOM.render(<App />, document.getElementsByTagName('body')[0]);    
                ReactDOM.render(<App />, document.getElementById("ycb-target"));    
                
                console.log( "ready!" );
        }
});


