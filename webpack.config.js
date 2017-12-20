const path = require('path');
const webpack = require('webpack');
const OfflinePlugin = require('offline-plugin');

const production = process.env.NODE_ENV === 'production';

const plugins = [];

// if (production) {
//   plugins.push(new OfflinePlugin());
// }

module.exports = {
  entry: {
    main: [
      '@babel/polyfill',
      './source/main.jsx',
    ],
  },
  output: {
    path: path.resolve(__dirname, 'docs'),
    filename: '[name].bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
      }
    ],
  },
  plugins,
  stats: { colors: true },
  devtool: 'source-map',
  devServer: production ? null : {
    contentBase: path.resolve(__dirname, 'docs'),
  },
};