const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  context: path.resolve(__dirname, "src"),
  entry: "./index.jsx",
  output: {
    filename: "[name].[contenthash].bundle.js",
    path: path.resolve(__dirname, "dist"),
    clean: true,
  },
  plugins: [new HtmlWebpackPlugin({
    template: path.resolve(__dirname, "public/index.html"),
  })],
  resolve: {
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        use: "babel-loader",
        exclude: /node_modules/,
      },
      {
        test: /\.s?css$/,
        use: ["style-loader", "css-loader", "sass-loader"],
      },
    ],
  },
};
