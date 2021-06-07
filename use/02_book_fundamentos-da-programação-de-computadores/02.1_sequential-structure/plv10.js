const assert = require('assert');

var calc = function (s1, s2) {
    return s1 * s2
}

try {
    assert.strictEqual(24, calc(4, 6))
} catch (error) {
    console.log(error);
}