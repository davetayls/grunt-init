/*
 * grunt-init jshintrc
 */

'use strict';

// Basic template description.
exports.description = 'Create a set of brand tests';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = 'brand.html';

// The actual init template.
exports.template = function(grunt, init, done) {

  init.process({}, [], function(err, props) {

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props);

    // All done!
    done();
  });

};
