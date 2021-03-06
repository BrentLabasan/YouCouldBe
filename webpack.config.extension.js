import path from 'path';
import webpack from 'webpack';

export default {
  debug: true,
  devtool: 'source-map',
  noInfo: false,
  entry: [
    'react-devtools',
    path.resolve(__dirname, 'extensionSrc/index')
  ],
  target: 'web',
  output: { // doesn't actually generate any physical files, it will just create a bundle in memory and serve it to browser. But we need to define the path and name so it can simulate the file's existence.
    path: path.resolve(__dirname, 'extension'),
    publicPath: '/',
    filename: 'extension.js'
  },
  plugins: [
    // Eliminate duplicate packages when generating bundle.
    new webpack.optimize.DedupePlugin(),
    
    // Minify JS
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [ // loaders teach Webpack how to handle different file types
      {test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
      { test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ },
      {test: /\.css$/, loaders: ['style','css']}
    ]
  }
}
