const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const DashboardPlugin = require('webpack-dashboard/plugin');
const publicPath = 'http://localhost:8080/'
const webPackMiddleware = 'webpack-hot-middleware/client?reload=true&path=/__webpack_hmr&timeout=20000'

const config = {
  entry: [
    path.resolve(__dirname, 'client/index.js'),
    path.resolve(__dirname, 'client/src/css/style.sass'),
    webPackMiddleware
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
          presets: [ 'react', 'es2015' ]
        }
      },
      {
        test: /\.sass$/,
        loaders: ['style', 'css', 'sass']
      },
      {
        test: /\.pug/, loader: 'pug-loader'
      },
      {
        test: /\.(jpe?g|png|gif|svg)$/i,
        loaders: [
          'file?hash=sha512&digest=hex&name=[hash].[ext]',
          'image-webpack?bypassOnDebug&optimizationLevel=7&interlaced=false'
        ]
      }
    ]
  },
  sassLoader: {
    includePaths: [ path.resolve(__dirname, './client/src/css') ]
  },
  plugins: [
    new DashboardPlugin({ port: 3001 }),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: 'client/index.pug'
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}

module.exports = config
