const path = require("path");

module.exports = {
  name: "word-relay-setting",
  mode: "development",
  devtool: "eval",
  resolve: {
    extensions: [".js", ".jsx"],
  },
  entry: {
    app: ["./client"],
  }, // 입력
  module: {
    rules: [
      {
        test: /\.jsx?/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-react"],
          plugins: ["@babel/plugin-proposal-class-properties"],
        },
      },
    ],
  },
  output: {
    path: path.join(__dirname, "dist"),
    filename: "app.js",
  }, // 출력
};
// "devDependencies": {
//   // jsx 문법
//   "@babel/preset-react": "^7.18.6",
//   // 웹팩과 바벨연결
//   "babel-loader": "^9.1.2",
//   // 최신문법으로
//   "@babel/core": "^7.21.8",
//   // 환경에 맞게 -> 자동으로 옛날 브라우저 지원해줌
//   "@babel/preset-env": "^7.21.5",
//   "webpack": "^5.83.1",
//   "webpack-cli": "^5.1.1"
// }
