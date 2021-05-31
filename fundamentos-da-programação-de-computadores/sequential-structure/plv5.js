const assert = require('assert')

var calc = function (value, percent) {
    return value - (value * (percent / 100))
}

try {
    assert.strictEqual(450, calc(500, 10))
} catch (error) {
    console.log(error);
}