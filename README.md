# grunt-ar

Extract archive files with GNU ar

## Usage

```js
/*jslint node: true*/
module.exports = function (grunt) {
    'use strict';

    grunt.initConfig({
        ar: {
            archive: {
                src: ['archive.deb']
            }
        }
    });

    grunt.loadNpmTasks('grunt-ar');
};
```

```bash
grunt ar
```
