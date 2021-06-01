const assert = require('assert')

var calc = function (minWage, userWage) {
    return userWage / minWage
}

try {
    assert.strictEqual(5, calc(1000, 5000))
    assert.strictEqual(1, calc(1000, 1000))
    assert.strictEqual(0.8, calc(1000, 800))
} catch (error) {
    console.log(error);
}