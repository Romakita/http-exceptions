/**
 * Created by romakita on 14/05/15.
 */
'use strict';


module.exports = function (grunt) {
    // show elapsed time at the end
    require('time-grunt')(grunt);
    // load all grunt tasks
    require('load-grunt-tasks')(grunt);

    grunt.loadNpmTasks('grunt-simple-mocha');

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        simplemocha: {
            options: {
                globals:        ['expect'],
                timeout:        3000,
                ignoreLeaks:    false,
                ui:             'bdd'//,
                //reporter:       'mocha-jenkins-reporter'
            },
            all: {
                src: [
                    'test/spec/*.js'
                ]
            }
        }
    });

    grunt.registerTask('test',[
        'simplemocha'
    ]);

};
