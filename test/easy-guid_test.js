'use strict';

var guid = require('../easy-guid.js');

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

exports.easyGuid = {
  setUp: function(done) {
    // setup here
    done();
  },
  'args': function(test) {
    test.expect(4);

    // tests here
    test.equal(guid.new(16).length, 16, 'should be length 16.');
    test.equal(guid.new(32).length, 32, 'should be length 32.');
    test.equal(guid.new().length, 32, 'default should be length 32.');
    test.equal(guid.new('abc').length, 32, 'others should be length 32.');

    test.done();
  }
};
