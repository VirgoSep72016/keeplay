const path = require('path')
const webpack = require('webpack')

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
      }
    ]
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
}

module.exports = config
