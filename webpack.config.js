var path = require('path');

var srcDirectory = path.resolve(__dirname, 'src');
var distDirectory = path.resolve(__dirname, 'dist');
var ExtractTextPlugin = require("extract-text-webpack-plugin");

module.exports = {
  entry: [
    'babel-polyfill',
    path.resolve(srcDirectory, 'js/app.js'),
  ],
  output: {
    path: distDirectory,
    filename: "bundle.js"
  },

  module: {
    loaders: [
      {
        test: /.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react']
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
