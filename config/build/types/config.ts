type BuildMode = 'production' | 'development'
export interface BuildPaths {
  entry: string
  build: string
  html: string
  static: string
  src: string
}
export interface BuildOptions {
  mode: BuildMode
  port: number
  paths: BuildPaths
  isDev: boolean
}

export interface buildEnv {
  mode: BuildMode
  port: number
}
