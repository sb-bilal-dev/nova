const path = require('path');
const webpack = require('webpack');
const merge = require('webpack-merge');
const config = require('./webpack.config.js');


const HOST = process.env.HOST || '127.0.0.1';
const PORT = process.env.PORT || '9000';

module.exports = merge(config, {
  output: {
    path: path.resolve(__dirname, '../dist'),
    filename: '[name].[hash].js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: '../dist',
    host: HOST,
    port: PORT,
    compress: true,
    inline: true,
    historyApiFallback: true,
    hot: true,
    overlay: true,
    open: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ]
});
