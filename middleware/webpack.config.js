/**
 * Created by longcz on 2016/12/12.
 */
const webpack = require('webpack'); //to access built-in plugins
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = {
  entry: {
    main: "./src/js/main.js"
  },
  output: {
    chunkFilename: "[name].[chunkhash].js",
    filename: '[name].[chunkhash].bundle.js',
    path: __dirname + '/build/js',
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015']
        }
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({template: './src/index.html', filename: '../index.html'})
  ]
};

module.exports = config;