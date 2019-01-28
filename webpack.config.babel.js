import merge from 'webpack-merge'

// Production Environments
const prodEnvironments = [
  'production',
  'stage',
]


// Define which webpapck conffg use, dev or prod
const environment = process.env.NODE_ENV || 'development'
const webpackConfig = prodEnvironments.includes(environment)
  ? require('./webpack/prod')
  : require('./webpack/dev')


let plugins = []
// if (process.env.BUNDLE_ANALYZE == "true") {
//   plugins.push(new BundleAnalyzerPlugin())
// };


const config = merge(
  webpackConfig,
  { plugins }
)


export default config
