import MiniCssExtractPlugin from "mini-css-extract-plugin";
import { RuleSetRule } from "webpack";
import { BuildOptions } from "./types/config";

export function buildLoaders({ isDev }: BuildOptions): RuleSetRule[] {
  const tsLoader: RuleSetRule = {
    test: /\.tsx?$/,
    use: "ts-loader",
    exclude: /node_modules/,
  };

  const scssLoader: RuleSetRule = {
    test: /\.s[ac]ss$/i,
    use: [
      // нам не нужно формировать css файлы в режиме разработки
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      {
        loader: "css-loader",
        options: {
          modules: {
            auto: true,
            // стоит ли, для режима разработки добавлять [hash:base64] в конец класса?
            localIdentName: isDev ? "[path][name]__[local]" : "[hash:base64]",
          },
        },
      },
      "sass-loader",
    ],
  };

  return [tsLoader, scssLoader];
}
