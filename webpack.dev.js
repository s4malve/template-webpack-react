/* eslint-disable import/no-extraneous-dependencies */
const { merge } = require('webpack-merge'),
  common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  devServer: {
    static: './dist',
    port: 3000,
    compress: true,
  },
});
