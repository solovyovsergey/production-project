import { ResolveOptions } from "webpack";
import { BuildOptions } from "./types/config";

export function buildResolve(options: BuildOptions): ResolveOptions {
  return {
    extensions: [".tsx", ".ts", ".js"],
    preferAbsolute: true, // ? Абсолютные пути в приоритете. Почитать об этом
    // TODO изучить эти настройки подробнее
    modules: [options.paths.src, "node_modules"],
    mainFiles: ["index"],
    alias: {},
  };
}
