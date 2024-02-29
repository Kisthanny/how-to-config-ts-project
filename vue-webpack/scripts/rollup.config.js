const path = require("path");
const typescript = require("@rollup/plugin-typescript");
const babel = require("@rollup/plugin-babel");
const vuePlugin = require("rollup-plugin-vue");
module.exports = [
  {
    input: path.resolve(__dirname, "../src/main.tsx"),
    output: {
      file: "build/main.js",
      format: "commonjs",
      name: "main",
    },
    plugins: [
      typescript(),
      babel({
        exclude: "node_modules/**",
        extensions: [".js", ".jsx", ".tsx", ".ts"],
        presets: ["@babel/preset-env", "@babel/preset-typescript"],
        plugins: ["@vue/babel-plugin-jsx"],
      }),
      vuePlugin(),
    ],
  },
];
