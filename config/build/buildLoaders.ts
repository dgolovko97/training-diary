import { type RuleSetRule } from 'webpack'

export function buildLoaders(): RuleSetRule[] {
  const cssLoader = {
    test: /\.s[ac]ss$/i,
    use: ['style-loader', 'css-loader', 'sass-loader'],
  }
  const babelLoader = {
    test: /\.(js|ts)x?$/,
    use: 'babel-loader',
    exclude: /node_modules/,
  }
  /* const tsLoader = {
    test: /\.(js|ts)x?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  } */
  return [babelLoader, cssLoader]
}
