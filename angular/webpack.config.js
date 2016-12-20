/**
 * Created by longcz on 2016/12/12.
 */
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack'); //to access built-in plugins
const HTMLLoader = require("html-loader");
const config = {
  entry: {
    main: "./src/js/main.js"
  },
  output: {
    chunkFilename: "chunkFilename",
    filename: '[name].bundle.js',
    path: __dirname + '/build',
  },
  module: {
    loaders: [{
      test: /\.html$/,
      loader: 'html',
      query: {
        minimize: true
      }
    }]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html'})
  ]
};

module.exports = [config];