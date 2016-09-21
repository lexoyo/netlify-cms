/* global module, __dirname, require */
const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');

module.exports = merge.smart(require('./webpack.base.js'), {
  entry: {
    cms: ['./index'],
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js'
  },
  context: path.join(__dirname, 'src'),
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    })
  ]
});
