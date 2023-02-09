import { BuildOptions } from "./types/config";
import { Configuration } from "webpack-dev-server";

export function buildDevServer(opt: BuildOptions): Configuration {
  return {
    port: opt.port,
    open: true,
    historyApiFallback: true, // когда refresh page на /about страница не найдена. Почитать про это.
  };
}
