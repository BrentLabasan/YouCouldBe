download node.js

in main directory
npm install

npm run build-extension
load the extension into Chrome by going to chrome://extensions/ > Load unpacked extension > select folder where repository was downloaded to

you should see the extensin activate when you go to any page that's not whitelisted in index.js

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
  ];

