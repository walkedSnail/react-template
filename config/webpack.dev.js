const path = require('path');
const webpackConfigCreator = require('./webpack.common');
const { merge } = require('webpack-merge');

const config = {
  devServer: {
    contentBase: path.join(__dirname, '../dist')
  }
}

const options = {
  mode: 'development'
}

module.exports = merge(webpackConfigCreator(options), config)