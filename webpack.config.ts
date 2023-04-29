import path from 'path';
import webpack from 'webpack';
import {
  BuildEnv,
  BuildOptions,
  BuildPahts,
} from './configs/build/types/config';
import { buildWepbackConfig } from './configs/build/buildWebpackConfig';

export default function (env: BuildEnv) {
  const mode = env.mode || 'development';
  const isDev = mode === 'development';

  const PORT = env.port || 3000;

  const paths: BuildPahts = {
    entry: path.resolve(__dirname, 'src', 'index.tsx'),
    build: path.resolve(__dirname, 'dist'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    src: path.resolve(__dirname, 'src'),
  };

  // выносим опции наружу из конфига, чтобы они не были захардкожены и можно было передавать их пропсами.
  const buildOptions: BuildOptions = {
    mode,
    paths,
    isDev,
    port: PORT,
  };

  const config: webpack.Configuration = buildWepbackConfig(buildOptions);

  return config;
}
