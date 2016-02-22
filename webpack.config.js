'use strict';

var webpack = require('webpack'),
    path = require('path'),
    srcPath = path.join(__dirname, 'src');

module.exports = {
    target: 'web',
    cache: true,
    entry: {
        main: './src/js/logger'
    },
    resolve: {
        root: srcPath,
        extensions: ['', '.js'],
        modulesDirectories: ['node_modules', 'src/js']
    },
    output: {
        chunkFilename:"[chunkhash].logger.min.js",
        filename: "logger.min.js",
        path: path.join(__dirname, "/dist/js"),
        libraryTarget: 'umd',
        umdNamedDefine: true,
        library: 'Logger',
        publicPath: 'http://localhost:8080/'
    },
    module: {
        loaders: [
            {test: /\.js?$/, exclude: /node_modules/, loader: 'babel?cacheDirectory'}
        ]
    },
    debug: true,
    devtool: 'source-map',
    devServer: {
        contentBase: './tmp',
        historyApiFallback: true
    },
    eslint:{
        configFile:"./.eslintrc",
        emitError:true,
        failOnError:true,
        failOnWarning:false,
        formatter:require("eslint-friendly-formatter")
    }
};
