import { Configuration } from "webpack";

export type BuildMode = Configuration["mode"];

export interface BuildPahts {
  entry: string;
  build: string;
  html: string;
}

export interface BuildOptions {
  mode: BuildMode;
  paths: BuildPahts;
  isDev: boolean; // зачем, если есть mode?
  port: number;
}

export interface BuildEnv {
  port: number;
  mode: BuildMode;
}
