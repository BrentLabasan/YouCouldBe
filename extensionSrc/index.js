import './index.css';
import helpers from './helpers';
import constants from './constants';
import viewBlocker from './view-blocker';
import viewOptions from './view-options';
import jQuery from 'jquery';
import moment from 'moment';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

import numeral from 'numeral';

const DEFAULT_WHITELIST = [
  // finances
  'venmo.com',

  // social
  'www.facebook.com/search',
  'www.facebook.com/events',

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
  'www.pof.com',


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
  'secure.meetup.com',

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

  'www.reddit.com/r/javascript/',

  'www.skilletfood.com',

  'resy.com',

  'www.chowhound.com',

  'www.salliemae.com',
  'www.barclaycardus.com',

  'nodejs.org',

  'www.getdrip.com',

  // travel
  'www.alaskaair.com',

  'secure.nordstrom.com',
  'www.ticketmaster.com',
  'www1.ticketmaster.com',

  'www.gitkraken.com',

  'wikibooks.org'

];



jQuery(document).ready(function () {
  let blockedUrl = true;
  for (let i = 0; i < DEFAULT_WHITELIST.length; i++) {
    // console.log(window.location.hostname + window.location.pathname, DEFAULT_WHITELIST[i]);
    if ((window.location.hostname + window.location.pathname).includes(DEFAULT_WHITELIST[i])) {
      blockedUrl = false;
    }
  
  }

  // if webattends >= 3;
  debugger;
  if ( localStorage.getItem('ycbCount') > constants.DEFAULT_BLACKLIST[window.locationlhostname].freeViews ) {
    blockedUrl = false;
  }


  if (blockedUrl) { // begin process to start blocking
    let audioTimerStarted = new Audio();
    audioTimerStarted.src = chrome.runtime.getURL('/extensionSrc/audio/bluedistortion/alert-01.wav');
    audioTimerStarted.play();

    // chrome.storage.sync.clear();

    let s = new Date().toString();
    chrome.storage.sync.set({[window.location.hostname + " " + s]: {[s]: window.location.pathname}  });

    chrome.storage.sync.get(null, function (obj) {
      console.log("BRENT");
      console.log(obj);
    });

    debugger;
    // if PL8r-dateLastVisited isn't a date, set it to today's date
    if (!localStorage.getItem('PL8r-dateLastVisited')) {
      localStorage.setItem('PL8r-dateLastVisited', moment().format('YYYY-MM-DD'));
    }
    // if today's date is greater than PL8r-dateLastVisited, reset ycbCount to 0, and update PL8r-dateLastVisited to today's date
    if (moment().format('YYYY-MM-DD') > localStorage.getItem('PL8r-dateLastVisited')) {
      localStorage.setItem('ycbCount', 0);
      localStorage.setItem('PL8r-dateLastVisited', moment().format('YYYY-MM-DD'));
    }

    window.scrollTo(0, 0);

    var div = document.createElement("div");
    div.id = "ycb-target";
    div.style.width = window.innerWidth + "px";
    div.style.height = window.innerHeight + "px";
    document.body.appendChild(div);

    ReactDOM.render(<App />, document.getElementById("ycb-target"));

  }
});
