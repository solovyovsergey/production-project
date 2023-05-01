import { DefinePlugin, ProgressPlugin, WebpackPluginInstance } from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import MiniCssExtractPlugin from 'mini-css-extract-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
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

    // TODO доделать, чтобы плагин BundleAnalyzerPlugin не грузил сборку и запускался опционально.
    //     Добавил переменную analyze в options функции buildWebpuckConfig
    // __ package.json:
    // "analyze:prod": "npm run build:prod --env analyze=true"

    // __ buildPlugins.ts:
    // new BundleAnalyzerPlugin({
    // analyzerMode: analyze ? 'server' : 'disabled',
    // })

    // ! Ресурс, где можно смотреть размеры бандлов библиотек: https://bundlephobia.com/
    new BundleAnalyzerPlugin({
      openAnalyzer: false,
    }),
    // TODO Не удалось настроить react-refresh-plugin
  ];
}
