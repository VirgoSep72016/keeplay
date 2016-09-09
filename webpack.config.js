const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const webPackMiddleware = 'webpack-hot-middleware/client?reload=true&path=/__webpack_hmr&timeout=20000'

const config = {
  entry: [
    path.resolve(__dirname, 'client/index.js'),
    webPackMiddleware
  ],
  output: {
    path: path.resolve(__dirname, 'build'),
    filename: 'index.bundle.js'
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
        test: /\.css$/, loader: 'style!css'
      },
      {
        test: /\.pug/, loader: 'pug-loader'
      }
    ]
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'client/index.pug'
    }),
        // Webpack 1.0
    new webpack.optimize.OccurenceOrderPlugin(),
    // Webpack 2.0 fixed this mispelling
    // new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}

module.exports = config
