const path = require("path");
const typescript = require("@rollup/plugin-typescript");
const babel = require("@rollup/plugin-babel");

module.exports = [
  {
    input: path.resolve(__dirname, "../src/main.tsx"),
    output: {
      file: "build/main.js",
      format: "iife",
      name: "amd",
    },

    plugins: [
      typescript(),
      babel({
        presets: ["@babel/preset-react"],
      }),
    ],
  },
];
