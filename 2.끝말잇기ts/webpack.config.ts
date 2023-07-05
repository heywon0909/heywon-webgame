import path from 'path';
import ReactRefreshPlugin from '@pmmmwh/react-refresh-webpack-plugin';
import ForkTsCheckWebpackPlugin from 'fork-ts-checker-webpack-plugin';
import { Configuration as WebpackConfiguration } from 'webpack';
import { Configuration as WebpackDevServerConfiguration } from 'webpack-dev-server';
interface Configuration extends WebpackConfiguration{
    devServer?: WebpackDevServerConfiguration;
}

module.exports = {
  mode: "development", // production
  devtool: "eval", // hidden-source-map -> 그냥 source-map 쓰면 개발자 도구 탭에 노출됨..
  resolve: {
    extensions: [".jsx", ".js", ".ts", ".tsx"],
  },
  entry: {
    app: "./client",
  },
  module: {
    rules: [
      {
        loader: "babel-loader",
        options:{plugins:['react-refresh/babel']}
      },
      {
        test: /\.tsx?$/,
        loader: "ts-loader",
        exclude: path.join(__dirname,'node_modules'),
      },
    ],
  },
  plugins: [
    new ReactRefreshPlugin(), new ForkTsCheckWebpackPlugin()
  ],
  output: {
    path: path.join(__dirname,'dist'),
    filename: "[name].js",
    publicPath: '/dist/',
  },
  devServer: {
    devMiddleware: { publicPath: '/dist' },
    static: { directory: path.resolve(__dirname) },
    hot: true
  }
};
export default config;