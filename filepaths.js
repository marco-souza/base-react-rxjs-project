import path from 'path'

const absPath = relative =>
  path.resolve(__dirname, relative)

// App paths
const app = {
  root: path.resolve(),
  main: [
    absPath('src/app/index.js'),
  ],
  html: absPath('src/app/index.pug'),
  dest: absPath('dist'),
  resolve: [
    absPath('src'),
    'node_modules',
  ],
  workers: {
    main: absPath('src/workers/index.js'),
  },
}


export {
  app,
}
