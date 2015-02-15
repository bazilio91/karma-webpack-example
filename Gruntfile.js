/*global module:false*/

module.exports = function (grunt) {

    // Project configuration.
    grunt.initConfig({
        // Task configuration.
        karma: {
            spec: {
                configFile: 'grunt/karma.conf.js',
                singleRun: true
            },
            watch: {
                configFile: 'grunt/karma.watch.conf.js',
                singleRun: false
            }
        },
        webpack: {
            build: require('./grunt/webpack.prod.conf.js'),
            test: require('./grunt/webpack.test.conf.js')
        }
    });

    // These plugins provide necessary tasks.
    grunt.loadNpmTasks('grunt-karma');

    grunt.registerTask('default', function () {
        grunt.loadNpmTasks('grunt-webpack');
        //grunt.loadNpmTasks('grunt-karma');
        grunt.task.run(['webpack:build']);
    });

    grunt.registerTask('test', function () {
        grunt.loadNpmTasks('grunt-webpack');
        //grunt.loadNpmTasks('grunt-karma');
        grunt.task.run(['webpack:test', 'karma:spec']);
    });
};
