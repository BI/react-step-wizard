/* jshint node: true */
var path = require('path');


module.exports = {
  context: path.join(__dirname),
  entry: './example.js',
  devtool: 'source-map',

  output: {
    path: path.join(__dirname),
    filename: 'react-step-wizard.js',
    libraryTarget: 'umd',
    library: 'ReactPillSelector'
  },

  module: {
    loaders: [
      {
        test: /\.scss$/,
        // Query parameters are passed to node-sass
        loader: 'style!css!sass?outputStyle=expanded&' +
          'includePaths[]=' + (path.resolve(__dirname, './node_modules'))
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {presets:['react']},
      },
    ]
  }
};
