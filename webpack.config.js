const CopyWebpackPlugin = require("copy-webpack-plugin");
const UglifyJsPlugin = require("uglifyjs-webpack-plugin");
const path = require("path");

module.exports = {
    entry: "./app/initialize.tsx",

    output: {
        filename: "app.js",
        path: path.resolve(__dirname, "public")
    },

    devtool: "source-map",

    devServer: {
        contentBase: path.join(__dirname, "public"),
        compress: true,
        port: 3333,
        inline: true,
        open: false,
    },

    // TODO: Build vendor and app.js separately
    module: {
        rules: [
            {
                test: /\.tsx?$/,
                use: "awesome-typescript-loader",
                exclude: /(node_modules|public|assets)/
            }
        ]
    },

    plugins: [
        new CopyWebpackPlugin([
            { from: "app/assets/index.html", to: "index.html" },
            { from: "app/styles/application.css", to: "app.css" }
        ])
        // new UglifyJsPlugin(),
    ],

    resolve: {
        modules: ["node_modules", path.resolve(__dirname, "app")],
        extensions: [".tsx", ".ts", ".js", ".json"]
    }
};
