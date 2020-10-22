const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

function webpackCommonConfigCreateor(options) {
  /**
   * options: 
   * mode // 开发模式
   */
  return {
    mode: options.mode,
    entry: "./src/index.js",
    output: {
      path: path.resolve(__dirname, "../build"),
      filename: 'bundle.js'
    },
    resolve: {
      extensions: ['.wasm', '.mjs', '.js', '.json', '.jsx', '.tsx', '.ts']
    },
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          exclude: /node_modules/,
          loader: 'ts-loader',
          options: {
            configFile: path.resolve(__dirname, '../tsconfig.json')
          }
        },
        {
          test: /\.(png|svg|jpg|gif|jpeg|obj|json)]$/,
          loader: 'file-loader'
        },
        {
          test: /\.(css|scss)$/,
          use: [{ loader: 'style-loader'},{ loader: 'css-loader'},{ loader: 'sass-loader'}]
        },
        {
          test: /\.jsx?$/, // jsx/js文件的正则
          exclude: /node_modules/, // 排除 node_modules 文件夹
          use: {
            loader: 'babel-loader', // loader 是 babel
            options: {
              babelrc: false, // babel转义的配置选项
              presets: [
                require.resolve('@babel/preset-react'), // 添加 preset-react
                [require.resolve('@babel/preset-env'), {modules: false}]
              ],
              cacheDirectory: true,
            }
          }
        }
      ]
    },
    plugins: [
      new HtmlWebpackPlugin({
        template: 'public/index.html',
        filename: 'index.html',
        inject: true
      })
    ]
  }
}

module.exports = webpackCommonConfigCreateor;