// Karma configuration
// Generated on Mon Dec 23 2013 19:46:59 GMT+0600 (YEKT)
var _ = require('lodash');
module.exports = function (config) {
    'use strict';
    config = require('./karma.conf.js')(config);
    config.files = _.map(config.files, function (file) {
        if (_.isString(file)) {
            file = {pattern: file};
        }

        file.watched = true;
        return file;
    });
    config.set({
        reporters: ['progress'],
        browsers: ['Chrome']
    });
};