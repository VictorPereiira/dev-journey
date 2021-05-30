const assert = require('assert')

var converter = function (value) {
    return value * 1000
}

try {
    assert.strictEqual(1500, converter(1.5))
} catch (error) {
    console.log(error);
}