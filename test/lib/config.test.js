var assert = require('chai').assert;
var Config = require('../../src/lib/config.js');

describe('Config:', function () {
    it('Expect instance of object', function () {
        assert.typeOf(Config, 'object');
    });
    it('Object has required properties', function () {
        assert.property(Config, 'mongodb');
        assert.property(Config.mongodb, 'host');
        assert.property(Config.mongodb, 'port');
    });
});