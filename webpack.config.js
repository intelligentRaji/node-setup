import { join } from 'path'
import { TsconfigPathsPlugin } from 'tsconfig-paths-webpack-plugin'
import ForkTsCheckerWebpackPlugin from 'fork-ts-checker-webpack-plugin'
import Dotenv from 'dotenv-webpack'

const { dirname } = import.meta

const config = {
  context: dirname,
  entry: join(dirname, 'src', 'app.ts'),
  output: {
    filename: '[name].js',
    path: join(dirname, 'dist'),
    clean: true,
  },
  target: 'node',
  plugins: [new ForkTsCheckerWebpackPlugin(), new Dotenv()],
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        loader: 'esbuild-loader',
        exclude: ['/node_modules/'],
      },
    ],
  },
  resolve: {
    plugins: [new TsconfigPathsPlugin()],
    extensions: ['.ts'],
  },
}

export default config
