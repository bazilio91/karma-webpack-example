var webpack = require('webpack');
var conf = require('./webpack.conf.js'),
    _ = require('lodash');

module.exports = _.merge({}, conf, {
    output: {
        publicPath: "/"
    },
    devtool: 'inline-source-map'
});
