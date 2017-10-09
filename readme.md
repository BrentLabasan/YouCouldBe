download node.js

in directory you downloaded repository to
npm install
npm run build-extension

load the extension into Chrome by going to chrome://extensions/ > Load unpacked extension > select folder where repository was downloaded to

you should see the extension activate when you go to any page that's not whitelisted in index.js

e.g.

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
    'www.dropbox.com'
    'www.messenger.com',

    'www.cybercoders.com',
    'indeed.com',
    'jobs.stackoverflow.com',

    'www.hiphopdx.com',
    'www.complex.com',

    'www.typescriptlang.org'
  ];



Every time you make a change to the repository, you need to follow these instructions
npm run build-extension
Reload the chrome://extensions/ page, or just click the Reload button next to the extension.

npm run build-extension typically takes 8-12 seconds.
