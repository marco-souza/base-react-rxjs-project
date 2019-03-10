import webpack from 'webpack'

import Happypack from 'happypack'
import CleanWebpackPlugin from 'clean-webpack-plugin'
import CopyPlugin from 'copy-webpack-plugin'
import HtmlWebpackPlugin from 'html-webpack-plugin'
import TerserPlugin from 'terser-webpack-plugin'
import ServiceWorkerWebpackPlugin from 'serviceworker-webpack-plugin'
import WebpackPwaManifest from 'webpack-pwa-manifest'
import FaviconsWebpackPlugin from 'favicons-webpack-plugin'

import manifest from '../src/app/manifest'
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
    filename: '[name].[hash].js',
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
    new CleanWebpackPlugin([ app.dest ], {
      root: app.root,
    }),
    new WebpackPwaManifest(manifest),
    new Happypack({
      loaders: [
        { loader: 'babel-loader' },
        { loader: 'eslint-loader' },
      ],
    }),
    new HtmlWebpackPlugin({
      template: app.html,
    }),
    // Create favicon
    new FaviconsWebpackPlugin(app.logo),
    // Copy Assets
    new CopyPlugin(app.copyAssets),
    // Avoid to import React to use JSX syntax
    new webpack.ProvidePlugin({
      'React': 'react',
    }),
    // Service Workers
    new ServiceWorkerWebpackPlugin({
      entry: app.workers.main,
      filename: 'sw-main.js',
    }),
  ],

  // Optimizations
  optimization: {
    removeAvailableModules: true,
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
      }),
    ],
    splitChunks: {
      chunks: 'all',
      hidePathInfo: false,
      minSize: 10000,
      maxAsyncRequests: Infinity,
      maxInitialRequests: Infinity,
      cacheGroups: {
        vendors: {
          test: /node_modules/,
        },
      },
    },
  },
}


export default config
