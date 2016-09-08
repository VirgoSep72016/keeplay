const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

const config = {
  entry: [
    path.resolve(__dirname, 'client/index.js')
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
        test: /.pug/, loader: 'pug-loader'
      }
    ]
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'client/index.pug'
    })
  ]
}

module.exports = config
