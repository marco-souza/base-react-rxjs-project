import path from 'path'


const logo = path.resolve('src/assets/images/logo.png')
const manifest = {
  filename: 'manifest.json',
  name: 'My Progressive Web App',
  short_name: 'MyPWA',
  description: 'My awesome Progressive Web App!',
  background_color: '#ffffff',
  theme_color: '#449922',
  crossorigin: 'use-credentials', // can be null, use-credentials or anonymous
  icons: {
    src: logo,
    sizes: [96, 128, 192, 256, 384, 512], // multiple sizes
  },
  // {
  //   src: path.resolve('src/assets/large-icon.png'),
  //   size: '1024x1024', // you can also use the specifications pattern
  // },
}

export default manifest
