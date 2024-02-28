const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const { VueLoaderPlugin } = require("vue-loader");
module.exports = {
  entry: path.resolve(__dirname, "../src/main.tsx"),
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "../build"),
  },
  mode: "development",
  devServer: {
    static: {
      directory: path.resolve(__dirname, "../build"),
    },
    port: 3030,
  },
  resolve: {
    extensions: [".tsx", ".ts", ".js", ".vue"],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        loader: "babel-loader",
        options: {
          presets: ["@babel/preset-env", "@babel/preset-typescript"],
          plugins: ["@vue/babel-plugin-jsx"],
        },
        exclude: /node_modules/,
      },
      {
        test: /\.vue$/,
        loader: "vue-loader",
      },
    ],
  },
  plugins: [
    new VueLoaderPlugin(),
    new HtmlWebpackPlugin({
      template: path.resolve(__dirname, "./template.html"),
    }),
  ],
};
