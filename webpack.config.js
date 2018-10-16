var webpack = require("webpack");


module.exports = {
    entry: './index.js',
    output: {
        filename: 'bundle.js',
        path: __dirname
    },
    devtool: "eval",
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'babel-loader',
                exclude: [/node_modules/]
            }
        ]
    }
};
