/**
 * Created by longcz on 2016/10/9.
 */
module.exports = {
  entry: {
    proxy: "./src/proxy.js",
    iterator: "./src/iterator.js",
    generator:  "./src/generator.js",
    promise:  "./src/promise.js"
  },
  output: {
    path: __dirname + "/dest",
    filename: "[name].bundle.js"
  },
  module: {
    loaders: [
      {test: /\.css$/, loader: "style!css"},
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel'
      }
    ]
  }
};
