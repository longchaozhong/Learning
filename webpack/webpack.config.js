/**
 * Created by longcz on 2016/12/12.
 */
const webpack = require('webpack'); //to access built-in plugins
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractCSS = new ExtractTextPlugin("css.css");
const ExtractLESS = new ExtractTextPlugin("less.css");
const config = {
  entry: {
    main: "./src/js/main.js",
    vendor:["./src/lib/MyLib.js"]
  },
  output: {
    chunkFilename: "[name].[chunkhash].js",
    filename: '[name].[chunkhash].bundle.js',
    path: __dirname + '/build',
  },
  module: {
    loaders: [
      {
        test: /\.css/,
        loader: ExtractCSS.extract("css-loader")
      },
      {
        test: /\.less$/,
        loader: ExtractLESS.extract(['css','less'])
      }
    ]
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest'],
      minChunks: Infinity
    }),
    new HtmlWebpackPlugin({template: './src/index.html'}),
    ExtractCSS,
    ExtractLESS
  ]
};

module.exports = config;