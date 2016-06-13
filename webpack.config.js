var path = require('path');

var directory = path.resolve(__dirname, "moj_rec_sample/apps/sample_problems/static/sample_problems");
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    'babel-polyfill',
    path.resolve(directory, 'js/main.js'),
  ],
  output: {
    path: path.resolve(directory, 'dist'),
    filename: "bundle.js"
  },

  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015']
        }
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract("style-loader", "css-loader")
      }
    ],
    resolve: {
      alias: {

      }
    }
  },
  plugins: [
    new ExtractTextPlugin("styles.css")
  ],
  devtool: 'source-map'
};
