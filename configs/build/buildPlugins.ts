import { DefinePlugin, ProgressPlugin, WebpackPluginInstance } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BuildOptions } from './types/config';

export function buildPlugins({
  paths,
  isDev,
}: BuildOptions): WebpackPluginInstance[] {
  return [
    new HtmlWebpackPlugin({ template: paths.html }),
    new ProgressPlugin(),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      // TODO пока не используется и не ясно как будет работать
      // chunkFilename: "css/[name].[contenthash:8].css",
    }),
    new DefinePlugin({
      // чтобы прокинуть idDev в проект
      __IS_DEV__: JSON.stringify(isDev),
    }),
    // TODO Не удалось настроить react-refresh-plugin
  ];
}
