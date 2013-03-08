/*
 * grunt-init jshintrc
 */

'use strict';

// Basic template description.
exports.description = 'Create a jshintrc';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '.jshintrc';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({}, [
        init.prompt('name')
    ], function(err, props) {

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // All done!
    done();
  });

};
