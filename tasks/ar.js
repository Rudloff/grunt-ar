/*jslint node: true */
module.exports = function (grunt) {
    'use strict';
    var process = require('child_process');
    grunt.registerMultiTask('ar', 'Extract archive files with GNU ar', function () {
        this.files.forEach(function (f) {
            f.src.forEach(function (src) {
                process.spawn('ar', ['x', src]);
                grunt.log.writeln('File "' + src + '" extracted');
            });
        });
    });
};
