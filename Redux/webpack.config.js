/**
 * Created by longcz on 2016/10/9.
 */
module.exports = {
  entry: "./scripts/index.js",
  output: {
    path: __dirname + "/assets",
    filename: "bundle.js"
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
