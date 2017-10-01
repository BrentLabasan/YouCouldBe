// Configures Express to serve up our index.html. 5-3

import express from 'express';
import path from 'path';
import open from 'open';
import compression from 'compression';

// removed any calls to Webpack because we won't interacting with Webpack for our dist server
// import webpack from 'webpack';
// import config from '../webpack.config.dev';

const port = 3000;
const app = express();

app.use(compression());
app.use(express.static('dist'));


// removed any calls to Webpack because we won't interacting with Webpack for our dist server
// const compiler = webpack(config);
// app.use(require('webpack-dev-middleware')(compiler, {
//     noInfo: true,
//     publicPath: config.output.publicPath
//   }));

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, '../dist/index.html'));
  });
  
  app.listen(port, function(err) {
    if (err) {
      console.log(err);
    } else {
      open ('http://localhost:' + port);
    }
  })
  