'use strict';
const path = require('path');
const slsw = require('serverless-webpack');

module.exports = {
    entry: slsw.lib.entries,
    target: 'node',
    module: {
        loaders: [{
            test: /\.js$/,
            loader: 'babel-loader',
            options: {
                presets: [['env', {targets: {node: '6.10'}, useBuiltIns: true}]],
            },
            include: __dirname,
            exclude: /node_modules/,
        }],
    },
    output: {
        libraryTarget: 'commonjs',
        path: path.join(__dirname, '.webpack'),
        filename: '[name].js',
    },
};
