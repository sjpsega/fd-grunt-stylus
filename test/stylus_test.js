'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.sjpsega_grunt_contrib_stylus = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  not_complie: function(test) {
    test.expect(3);

    test.ok(!grunt.file.exists("css/cc.css"));
    test.ok(!grunt.file.exists("css/global/effects.css"));
    test.ok(!grunt.file.exists("css/utils.css"));

    test.done();
  },
  mergefile_compile_test:function(test){
    test.expect(1);

    var actual = grunt.file.read('css/merge.css');
    var expected = grunt.file.read('test/expected/merge.css');
    test.equal(actual, expected, 'merge styl complie ok');

    test.done();
  },
  compile_test:function(test){
    test.expect(1);

    var actual = grunt.file.read('css/bb.css');
    var expected = grunt.file.read('test/expected/bb.css');
    test.equal(actual, expected, 'complie ok');

    test.done();
  }
  // custom_options: function(test) {
  //   test.expect(1);

  //   var actual = grunt.file.read('tmp/custom_options');
  //   console.log("::::",actual);
  //   var expected = grunt.file.read('test/expected/custom_options');
  //   test.equal(actual, expected, 'should describe what the custom option(s) behavior is.');

  //   test.done();
  // },
};
