import baseConfig from './base'
import { app } from '../filepaths'

const config = {
  ...baseConfig,
  mode: 'production',
}

console.log(app);
export default config
