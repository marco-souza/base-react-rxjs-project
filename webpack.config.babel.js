import webpack from 'webpack'

// Production Environments
const prodEnvs = [
  'production',
  'stage',
]


// Define which webpapck conffg use, dev or prod
const environment = process.env.NODE_ENV || 'development'
const config = prodEnvs.includes(environment)
  ? require('./webpack/prod')
  : require('./webpack/dev')


export default config