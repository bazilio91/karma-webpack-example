// Karma configuration
// Generated on Mon Dec 23 2013 19:46:59 GMT+0600 (YEKT)

module.exports = function (config) {
    'use strict';
    var webpackConf = require('./webpack.conf.js'),
        path = require('path');

    config.set({

        // base path, that will be used to resolve files and exclude
        basePath: path.normalize(__dirname + '/../'),


        // frameworks to use
        frameworks: ['mocha'],


        // list of files / patterns to load in the browser
        files: [
            'out/tests/main.js',
            {pattern: 'out/tests/**/*', included: false}

        ],

        preprocessors: {
            'src/**/*.js': ['webpack', 'sourcemap']
        },


        webpack: webpackConf,

        // list of files to exclude
//        exclude: [
//            'app/static/js/main-min.js'
//        ],

        // you can proxy your 'real' api
        proxies: {
            //'/api': 'http://localhost:3000/api'
        },

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['dots'],


        // enable / disable colors in the output (reporters and logs)
        colors: true,


        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_WARN,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,


        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera (has to be installed with `npm install karma-opera-launcher`)
        // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
        // - PhantomJS
        // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
        browsers: ['PhantomJS'],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,


        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true
    });

    return config;
};