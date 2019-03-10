import webpack from 'webpack'
import merge from 'webpack-merge'
import baseConfig from './base'

import { app } from '../filepaths'


const config = merge(baseConfig, {
  mode: 'development',
  devtool: 'inline-source-map',
  optimization: {
    noEmitOnErrors: true,
    concatenateModules: true,
  },
  watchOptions: {
    ignored: /node_modules/,
  },
  devServer: {
    contentBase: app.dest,
    watchContentBase: true,
    compress: true,
    port: 9000,
    hot: true,
    open: true,
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
})


export { config }
