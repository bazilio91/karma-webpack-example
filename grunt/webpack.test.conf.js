var webpack = require('webpack');
var conf = require('./webpack.dev.conf.js'),
    _ = require('lodash');

module.exports = _.merge({}, conf, {
    entry: __dirname + "/../tests/boot.js",
    output: {
        path: __dirname + '/../out/tests',
        filename: "[name].js",
        publicPath: "/base/out/tests/"
    },
    devtool: 'inline-source-map',
    watch: true
});