import config from './webpack.config.js'

const prodConfig = {
  ...config,
  mode: 'production',
}

export default prodConfig
