/*jslint node: true */
module.exports = function (grunt) {
    'use strict';
    var process = require('child_process'),
        path = require('path');
    grunt.registerMultiTask('ar', 'Extract archive files with GNU ar', function () {
        this.files.forEach(function (f) {
            f.src.forEach(function (src) {
                var absoluteSrc = path.resolve(src);
                process.spawn(
                    'ar',
                    ['x', absoluteSrc],
                    {
                        cwd: path.dirname(absoluteSrc)
                    }
                );
                grunt.log.writeln('File "' + src + '" extracted');
            });
        });
    });
};
