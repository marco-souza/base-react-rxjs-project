import path from 'path'

const absPath = relative =>
  path.resolve(__dirname, relative)

// App paths
export const app = {
  main: absPath('src/app/index.js'),
  dest: absPath('dist'),
}
