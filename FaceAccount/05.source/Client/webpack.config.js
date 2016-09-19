"use strict";

var Webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: {
        index: ["webpack/hot/dev-server", "./app/entry/index.entry.js"]
    },
    output: {
        path: "./build",
        filename: "./js/[name].bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                loader: 'babel',
                exclude: /node_modules/,
                query: {
                    presets: ['es2015', 'stage-0', 'react']
                }
            },
            {
                test: /\.css$/,
                loader: 'style!css!autoprefixer'
            },
            {
                test: /\.(png|jpg|jpeg|gif|woff)$/,
                loader: 'url'
            },
            {
                test: /\.json$/,
                loader: 'json'
            }
        ]
    },
    devServer: {
        hot: true,
        inline: true,
        port: 8000
    },
    plugins: [
        new Webpack.HotModuleReplacementPlugin()
    ]
};