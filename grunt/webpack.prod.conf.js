var webpack = require('webpack');
var conf = require('./webpack.conf.js'),
    _ = require('lodash');

module.exports = _.merge({}, conf, {
    output: {
        filename: "[name].[hash].js",
        chunkFilename: "[id].[hash].js"
    },
    stats: ['assets'],
    storeStatsTo: 'webpackResults'
});

module.exports.plugins.push(new webpack.optimize.CommonsChunkPlugin('main', 'main.[hash].js'));
module.exports.plugins.push(new webpack.optimize.UglifyJsPlugin({warnings: false}));