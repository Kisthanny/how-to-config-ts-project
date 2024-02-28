const HtmlWebpackPlugin = require("html-webpack-plugin")
const path = require("path")
module.exports = {
    entry: path.resolve(__dirname, "../src/main.tsx"),
    output: {
        filename: "bundle.js",
        path: path.resolve(__dirname, "../build")
    },
    mode: "development",
    devServer: {
        static: {
            directory: path.resolve(__dirname, "../build")
        },
        port: 3000 
    },
    resolve: {
        extensions: [".tsx", ".ts", ".js"]
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: path.resolve(__dirname, "./template.html")
        })
    ],
    module: {
        rules:[
            {
                test: /\.tsx?$/,
                use: "ts-loader",
                exclude: /node_modules/ 
            }
        ]
    }
}