const assert = require('assert')

var converter = function (n) {
    return n * 30
}

try {
    assert.strictEqual(60, converter(2));
} catch (error) {
    console.log(error);
}