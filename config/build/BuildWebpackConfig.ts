import { type BuildOptions } from './types/config'
import { type Configuration } from 'webpack'
import { buildLoaders } from './buildLoaders'
import { buildPlugins } from './buildPlugins'
import { buildResolver } from './buildResolver'
import { buildDevServer } from './buildDevServer'

export function buildWebpackConfig(options: BuildOptions): Configuration {
  const { paths, mode, isDev } = options
  return {
    mode,
    entry: paths.entry,
    output: {
      path: paths.build,
      filename: '[name].[contenthash].js',
      clean: true,
    },
    module: {
      rules: buildLoaders(),
    },
    plugins: buildPlugins(options),
    resolve: buildResolver(options),
    devtool: isDev ? 'inline-source-map' : undefined,
    devServer: isDev ? buildDevServer(options) : undefined,
  }
}
