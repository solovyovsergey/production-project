import { Configuration } from 'webpack-dev-server';
import { BuildOptions } from './types/config';

export function buildDevServer(opt: BuildOptions): Configuration {
  return {
    hot: true,
    port: opt.port,
    open: true,
    historyApiFallback: true, // когда refresh page на /about страница не найдена. Почитать про это.
  };
}
