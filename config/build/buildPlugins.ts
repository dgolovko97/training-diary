import HtmlWebpackPlugin from 'html-webpack-plugin'
import webpack, { type WebpackPluginInstance } from 'webpack'
import { type BuildOptions } from './types/config'

export function buildPlugins(options: BuildOptions): WebpackPluginInstance[] {
  const { paths, isDev } = options
  return [
    new HtmlWebpackPlugin({
      template: paths.html,
      minify: true,
    }),
    new webpack.ProgressPlugin(),
    new webpack.DefinePlugin({
      __IS_DEV__: JSON.stringify(isDev),
    }),
  ]
}
