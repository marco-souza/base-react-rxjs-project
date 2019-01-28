import merge from 'webpack-merge'
import baseConfig from './base'

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
})


export default config
