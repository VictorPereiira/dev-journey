const assert = require('assert')

var double = function (n) {
    return n * 2;
}

try {
    assert.strictEqual(4, double(2));
} catch (error) {
    console.log(error);
}