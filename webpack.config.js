const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const publicPath = 'http://localhost:8080/'

const config = {
  entry: [
    path.resolve(__dirname, 'client/index.js')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.bundle.js',
    publicPath: publicPath
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,         // Match both .js and .jsx files
        exclude: /node_modules/,
        include: path.join(__dirname, 'client'),
        loader: 'babel',
        query: {
          presets: [ 'es2015' ]
        }
      },
      {
        test: /\.sass$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.pug/, loader: 'pug-loader'
      }
    ]
  },
  sassLoader: {
    includePaths: [ path.resolve(__dirname, './client/src/css') ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'client/index.pug'
    })
  ]
}

module.exports = config
