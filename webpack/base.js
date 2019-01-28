import Happypack from 'happypack'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'

import * as filepaths from '../filepaths'
const { app } = filepaths


const config = {
  // App entry point
  entry: {
    main: app.main,
  },

  // Output format
  output: {
    path: app.dest,
    publicPath: app.root,
    filename: '[name].[contenthash].js',
  },

  // Resolve path
  resolve: {
    modules: app.resolve,
  },

  // Import loaders
  module: {
    rules: [
      // JS loader
      { test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          'happypack/loader',
        ],
      },

      // HTML template loader (pug)
      { test: /\.pug$/,
        use: [
          'pug-loader',
        ],
      },

    ],
  },

  // Plugins
  plugins: [
    new Happypack({
      loaders: [
        { loader: 'babel-loader' },
        { loader: 'eslint-loader' },
      ],
    }),
    new CleanWebpackPlugin([ app.dest ], {
      root: app.root,
    }),
    new HtmlWebpackPlugin({
      template: app.html,
    }),
  ],
}


export default config
