import { app } from '../filepaths'

const config = {
  entry: {
    main: app.main,
  },
  output: {
    path: app.dest,
    filename: '[name].[contenthash].js',
  },
}


export default config