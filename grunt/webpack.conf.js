var webpack = require('webpack'),
    path = require('path');
var BowerWebpackPlugin = require("bower-webpack-plugin");

var root = path.normalize(__dirname + '/../');

module.exports = {
    context: path.join(root, 'src'),
    entry: {
        main: ["main.js"]
    },
    output: {
        path: path.join(root, 'out'),
        filename: '[name].js',
        publicPath: '/out/'
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('main', 'main.js'),
        new BowerWebpackPlugin({
            modulesDirectories: [path.join(root, 'bower_components')],
            manifestFiles: 'bower.json',
            includes: /.*/,
            excludes: []
        })
    ],
    resolve: {
        root: path.join(root, 'src'),
        alias: {
            'example': 'vendor/example.js'
        }
    },
    module: {
        loaders: [
            // ...
        ]
    }
};