import { buildWebpackConfig } from './config/build/BuildWebpackConfig'
import type { buildEnv, BuildPaths } from './config/build/types/config'
import path from 'path'
import { type Configuration } from 'webpack'

export default (env: buildEnv): Configuration => {
  const paths: BuildPaths = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'src', 'index.template.html'),
    static: path.join(__dirname, 'dist'),
    src: path.resolve(__dirname, 'src'),
  }
  const PORT: number = env.port || 3000
  const mode = env.mode || 'development'
  const isDev = mode === 'development'

  return buildWebpackConfig({
    mode,
    port: PORT,
    paths,
    isDev,
  })
}
