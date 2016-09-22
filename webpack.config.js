const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const publicPath = 'http://localhost:8080/'

const ExtractTextPlugin = require('extract-text-webpack-plugin')
const sassLoaders = [
  'css-loader',
  'sass-loader?indentedSyntax=sass&includePaths[]=' + path.resolve(__dirname, './client/src/css')
]

const config = {
  entry: [
    path.resolve(__dirname, 'client/index.js'), path.resolve(__dirname, 'client/src/css/style.sass')
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.bundle.js',
    publicPath: publicPath
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        include: path.join(__dirname, 'client'),
        loader: 'babel',
        query: {
          presets: [ 'es2015' ]
        }
      },
      {
        test: /\.sass$/,
        loader: ExtractTextPlugin.extract('style', sassLoaders.join('!'))
      },
      {
        test: /\.pug/, loader: 'pug-loader'
      }
    ]
  },
  plugins: [
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('style.css'),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'client/index.pug'
    })
  ]
}

module.exports = config
