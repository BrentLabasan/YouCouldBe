import './index.css';
import helpers from './helpers';
import constants from './constants';
import viewBlocker from './view-blocker';
import viewOptions from './view-options';
import jQuery from 'jQuery';
import moment from 'moment';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import numeral from 'numeral';

const DEFAULT_WHITELIST = [

    // social
    'www.facebook.com/events/',

    // work
    'www.google.com',
    'gmail.com',
    'mail.google.com',
    'docs.google.com',
    'calendar.google.com',
    'www.calendar.google.com',

    // research
    'www.wikipedia.org',
    'en.wikipedia.org',

    // chat
    'www.messenger.com',

    // career
    'www.linkedin.com',
    'www.cybercoders.com',
    'indeed.com',
    'jobs.stackoverflow.com',

    // dating
    'www.okcupid.com',


    'developer.chrome.com',
    'play.google.com',
    'images.google.com',
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
    'clients.mindbodyonline.com',
    'www.dropbox.com',


    'www.pluralsight.com',
    'app.pluralsight.com',
    'outlook.live.com',

    'www.hiphopdx.com',
    'www.complex.com',
    'www.xxlmag.com',

    'www.typescriptlang.org',

    'www.amazon.com',
    'smile.amazon.com',
    'www.newegg.com',

    'nirvanahq.com',
    'www.nirvanahq.com',
    'focus.nirvanahq.com',
    'help.nirvanahq.com',

    'trello.com',

    'www.barnesandnoble.com',

    'www.spl.org',

    'www.hoodfamousbakeshop.com',

    'www.apress.com',
    'checkout.apress.com',

    'twitter.com',
    'motherless.com',

    'www.coinbase.com',
    'www.gdax.com',
    'support.gdax.com',

    'www.zendone.com',
    'app.zendone.com',

    'accounts.google.com',

    'www.wrike.com',

    'todoist.com',
    'support.todoist.com',

    'facilethings.com',
    'app.facilethings.com',

    'seattle.craigslist.org',

    'www.stubhub.com',

    'www.blockchain-basics.com',
    'www.glassdoor.com',

    'www.dailymotion.com',

    'watch-series.co',

    'onlineclock.net',
    'www.online-stopwatch.com',
    'www.onlinemeditationtimer.com',

    'barnesandnoble.com',
    'stores.barnesandnoble.com',

    'uptoken.org',

    'www.meetup.com',

    'www.4chan.org',
    'boards.4chan.org',

    'jsfiddle.net',

    'thepiratebay.org',

    'www.ebay.com',

    'nekoseattle.com',

    'sleepyti.me/',

    'www.doordash.com',

    'www.teksystems.com',
    'timeandexpense.teksystems.com',

    'codepen.io',

    'momentjs.com',

    'fonts.google.com',

    'www.redfin.com',

    'www.reddit.com/r/javascript/'

  ];

const DEFAULT_BLACKLIST = [
  {url: 'www.facebook.com', weight: 5},
  {url: 'www.reddit.com', weight: 5},
  {url: 'www.instagram.com', weight: 5},
  {url: 'www.youtube.com.com', weight: 3},
  {url: 'www.dailymotion.com', weight: 3}
];

jQuery( document ).ready(function() {
    let blockedUrl = true;
    for (let i = 0; i < DEFAULT_WHITELIST.length; i++) {
      // console.log(window.location.hostname + window.location.pathname, DEFAULT_WHITELIST[i]);
      if ( (window.location.hostname + window.location.pathname).includes(DEFAULT_WHITELIST[i]) ) {
        blockedUrl = false;
      }

    }
    if (blockedUrl) {
      let audioTimerStarted = new Audio();
      audioTimerStarted.src = chrome.runtime.getURL('/extensionSrc/audio/bluedistortion/alert-01.wav');
      audioTimerStarted.play();

      // if dateLastVisited isn't a date, set it to today's date
      if (!localStorage.getItem('dateLastVisited')) {
        localStorage.setItem('dateLastVisited', moment().format('YYYY-MM-DD'));
      }
      // if today's date is greater than dateLastVisited, reset ycbCount to 0, and update dateLastVisited to today's date
      if ( moment().format('YYYY-MM-DD') > localStorage.getItem('dateLastVisited') ) {
        localStorage.setItem('ycbCount', 0);
        localStorage.setItem('dateLastVisited', moment().format('YYYY-MM-DD'));
      }

      var div = document.createElement("div");
      div.id = "ycb-target";
      document.body.appendChild(div);

      ReactDOM.render(<App />, document.getElementById("ycb-target"));

    }
});
